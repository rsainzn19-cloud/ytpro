# Toma 3D “Dentro de la coronaria” (Blender/Cycles, sin GPU): la cámara viaja por una arteria con eritrocitos
# bicóncavos; una placa crece, se rompe y un trombo cierra la luz mientras el flujo se detiene.
# Uso: <python con bpy> tools/motion/blender/sca.py <carpeta de salida> [--frames 1,60,120]
import bpy, bmesh, math, random, sys, os

OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/sca3d'
ONLY = [int(x) for x in sys.argv[sys.argv.index('--frames') + 1].split(',')] if '--frames' in sys.argv else None
FPS, N = 30, 165  # 5.5 s
random.seed(7)
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 10; sc.cycles.use_denoising = True
sc.cycles.max_bounces = 3; sc.render.use_persistent_data = True
sc.render.resolution_x, sc.render.resolution_y = 600, 750
sc.render.fps = FPS; sc.frame_start, sc.frame_end = 1, N
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'AgX - Medium High Contrast'
sc.world = bpy.data.worlds.new('w'); sc.world.use_nodes = True
sc.world.node_tree.nodes['Background'].inputs['Color'].default_value = (0.02, 0.0, 0.01, 1)

def mat(name, rgb, rough=0.45, sss=0.0, emit=None):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    if sss: b.inputs['Subsurface Weight'].default_value = sss; b.inputs['Subsurface Radius'].default_value = (1.0, 0.25, 0.15)
    if emit: b.inputs['Emission Color'].default_value = (*emit[0], 1); b.inputs['Emission Strength'].default_value = emit[1]
    return m

# Eritrocito bicóncavo (Evans–Fung): z(r) = ±R·√(1−ρ²)·(0.207 + 2.003ρ² − 1.123ρ⁴)
def rbc_mesh():
    bm = bmesh.new(); R, rings, segs = 1.0, 14, 28
    top, bot = [], []
    for i in range(rings + 1):
        rho = min(i / rings, 0.999); r = rho * R
        z = 0.5 * R * math.sqrt(1 - rho * rho) * (0.207 + 2.003 * rho ** 2 - 1.123 * rho ** 4)
        top.append([bm.verts.new((r * math.cos(2 * math.pi * k / segs), r * math.sin(2 * math.pi * k / segs), z)) for k in range(segs)])
        bot.append([bm.verts.new((r * math.cos(2 * math.pi * k / segs), r * math.sin(2 * math.pi * k / segs), -z)) for k in range(segs)])
    for L in (top, bot):
        for i in range(rings):
            for k in range(segs):
                q = [L[i][k], L[i][(k + 1) % segs], L[i + 1][(k + 1) % segs], L[i + 1][k]]
                bm.faces.new(q if L is top else q[::-1])
    for k in range(segs): bm.faces.new([top[-1][k], top[-1][(k + 1) % segs], bot[-1][(k + 1) % segs], bot[-1][k]][::-1])
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-4)
    me = bpy.data.meshes.new('rbc'); bm.to_mesh(me); bm.free()
    for p in me.polygons: p.use_smooth = True
    return me

RAD, LEN = 3.0, 60.0
# Arteria: tubo a lo largo de Y, visto desde adentro
bpy.ops.mesh.primitive_cylinder_add(vertices=64, radius=RAD, depth=LEN, location=(0, LEN / 2 - 6, 0), rotation=(math.pi / 2, 0, 0), end_fill_type='NOTHING')
wall = bpy.context.object; wall.data.materials.append(mat('pared', (0.45, 0.04, 0.06), 0.75, 0.35))
bpy.ops.object.shade_smooth()
wd = wall.modifiers.new('ondas', 'DISPLACE'); tex = bpy.data.textures.new('n', 'CLOUDS'); tex.noise_scale = 1.2; wd.texture = tex; wd.strength = 0.15

# Placa (amarilla) y trombo (rojo oscuro) en la pared, adelante
PY = 22.0
bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=(0, PY, -RAD + 0.2), segments=48, ring_count=24)
plaque = bpy.context.object; plaque.data.materials.append(mat('placa', (0.95, 0.72, 0.25), 0.6, 0.2)); bpy.ops.object.shade_smooth()
bpy.ops.mesh.primitive_ico_sphere_add(radius=1, subdivisions=4, location=(0, PY, -RAD + 1.2))
clot = bpy.context.object; clot.data.materials.append(mat('trombo', (0.25, 0.01, 0.03), 0.8)); bpy.ops.object.shade_smooth()
cd = clot.modifiers.new('grumos', 'DISPLACE'); t2 = bpy.data.textures.new('c', 'CLOUDS'); t2.noise_scale = 0.35; cd.texture = t2; cd.strength = 0.35
def key(o, f, loc=None, scale=None):
    if loc is not None: o.location = loc; o.keyframe_insert('location', frame=f)
    if scale is not None: o.scale = scale; o.keyframe_insert('scale', frame=f)
key(plaque, 1, scale=(1.4, 2.2, 0.3)); key(plaque, 55, scale=(2.0, 3.2, 1.1)); key(plaque, 75, scale=(2.1, 3.3, 1.25))
key(clot, 1, scale=(0.01, 0.01, 0.01)); key(clot, 78, scale=(0.01, 0.01, 0.01)); key(clot, 140, scale=(2.4, 3.0, 2.0))
# Grieta: luz cálida que se enciende en la ruptura
bpy.ops.object.light_add(type='POINT', location=(0, PY - 1.5, -RAD + 1.4)); crack = bpy.context.object; crack.data.color = (1, 0.5, 0.2); crack.data.shadow_soft_size = 0.3
for f, e in ((1, 0), (70, 0), (78, 600), (100, 80), (N, 40)): crack.data.energy = e; crack.data.keyframe_insert('energy', frame=f)

# Plaquetas que llegan a la ruptura
pmat = mat('plaqueta', (0.55, 0.35, 0.85), 0.5)
for i in range(18):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.16, location=(0, 0, 0), segments=24, ring_count=12)
    p = bpy.context.object; p.scale = (1, 1.6, 0.6); p.data.materials.append(pmat); bpy.ops.object.shade_smooth()
    tgt = (random.uniform(-1.2, 1.2), PY + random.uniform(-1.6, 1.6), -RAD + 1.4 + random.uniform(0, 1.0))
    start = (tgt[0], -14 - random.uniform(0, 6), random.uniform(-1.5, 1.5)); key(p, 1, loc=start); key(p, 66, loc=start)
    key(p, 96 + random.randint(0, 20), loc=tgt)

# Eritrocitos: avanzan en +Y; con el trombo se frenan y se amontonan
me, rmat = rbc_mesh(), mat('eritrocito', (0.75, 0.02, 0.04), 0.35, 0.15)
for i in range(70):
    o = bpy.data.objects.new(f'rbc{i}', me); bpy.context.collection.objects.link(o); o.data.materials.append(rmat) if not o.data.materials else None
    a, r = random.uniform(0, 2 * math.pi), math.sqrt(random.random()) * (RAD - 0.9)
    x, z, y0 = r * math.cos(a), r * math.sin(a), random.uniform(-4, 48)
    o.scale = (0.55, 0.55, 0.55); o.rotation_euler = (random.uniform(0, 3), random.uniform(0, 3), random.uniform(0, 3))
    v = random.uniform(0.32, 0.42)  # unidades por cuadro
    yA = y0 + v * 85; yB = min(yA + v * 25, PY - 3 + random.uniform(-2, 1)) if yA < PY else yA + v * 70
    key(o, 1, loc=(x, y0, z)); key(o, 85, loc=(x, yA, z)); key(o, N, loc=(x, yB, z))
    o.keyframe_insert('rotation_euler', frame=1); o.rotation_euler[0] += random.uniform(2, 5); o.keyframe_insert('rotation_euler', frame=N)

# Cámara (con luz tipo endoscopio) que avanza y se detiene frente al trombo
bpy.ops.object.camera_add(location=(0, -4, 0.3), rotation=(math.radians(92), 0, 0)); cam = bpy.context.object; sc.camera = cam; cam.data.lens = 24
key(cam, 1, loc=(0, -4, 0.3)); key(cam, 80, loc=(0, 9, 0.6)); key(cam, N, loc=(0, 13.5, 0.9))
bpy.ops.object.light_add(type='POINT', location=(0, 0, 0)); lamp = bpy.context.object; lamp.parent = cam; lamp.location = (0, 0.4, 0); lamp.data.energy = 260; lamp.data.shadow_soft_size = 1.5
bpy.ops.object.light_add(type='POINT', location=(0, PY + 6, 0)); fill = bpy.context.object; fill.data.energy = 900; fill.data.color = (1, 0.55, 0.5)
for fc in [fc for o in bpy.data.objects if o.animation_data and o.animation_data.action for fc in o.animation_data.action.fcurves] if hasattr(bpy.types.Action, 'fcurves') else []:
    for kp in fc.keyframe_points: kp.interpolation = 'BEZIER'

os.makedirs(OUT, exist_ok=True)
frames = ONLY or range(1, N + 1)
for f in frames:
    sc.frame_set(f); sc.render.filepath = os.path.join(OUT, f'f{f:04d}.png'); bpy.ops.render.render(write_still=True)
    print('cuadro', f, flush=True)
