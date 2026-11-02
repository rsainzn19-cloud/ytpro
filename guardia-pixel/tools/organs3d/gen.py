# Genera models3d/organs.json a partir del registro de OrganUI (github.com/organui/organui, MIT):
#   python3 -I tools/organs3d/gen.py <ruta al repo de organui> models3d/organs.json
# Para cada órgano toma vistas (dirección y estructuras que encuadran), estructuras (id, etiqueta, grupo, color,
# visibilidad inicial) y la atribución/licencia del modelo. Los GLB se copian aparte a models3d/ (ver README.md).
import json, re, sys

REPO, OUT = sys.argv[1], sys.argv[2]
ORG = {  # archivo de registro → (nombre en español, archivo GLB)
    'heart': ('Corazón', 'heart.glb'), 'lungs': ('Pulmones', 'lungs.glb'), 'kidneys': ('Riñones', 'kidneys.glb'),
    'pancreas': ('Páncreas', 'pancreas.glb'), 'stomach': ('Estómago', 'stomach.glb'), 'esophagus': ('Esófago', 'esophagus.glb'),
    'intestines': ('Intestinos', 'intestines.glb'), 'pituitary': ('Hipófisis', 'pituitary.glb'), 'adrenals': ('Suprarrenales', 'adrenals.glb'),
    'vessels': ('Vasos', 'vessels.glb'), 'spleen': ('Bazo', 'spleen.glb'), 'lymph': ('Ganglio linfático', 'lymph.glb'), 'joints': ('Articulaciones', 'joints.glb')
}
VIEW_ES = {'Anterior': 'Frente', 'Posterior': 'Atrás', 'Left lateral': 'Lado izquierdo', 'Right lateral': 'Lado derecho', 'Inferior': 'Abajo',
           'Superior': 'Arriba', 'Patient left': 'Lado izquierdo', 'Patient right': 'Lado derecho', 'Head and neck': 'Cabeza y cuello', 'Chest': 'Tórax',
           'Abdomen and pelvis': 'Abdomen y pelvis', 'Legs': 'Piernas', 'Front': 'Frente', 'Hilum': 'Hilio', 'Side': 'Lado', 'Spine': 'Columna',
           'Shoulders': 'Hombros', 'Pelvis and hips': 'Pelvis y caderas', 'Knees': 'Rodillas', 'Feet': 'Pies', 'Hands': 'Manos', 'Wrists and hands': 'Muñecas y manos',
           'Elbows': 'Codos', 'Overview': 'General'}

def block(text, key):
    """Devuelve el contenido del arreglo `key: [ ... ]` respetando corchetes anidados."""
    i = text.index(key + ':')
    i = text.index('[', i)
    depth = 0
    for j in range(i, len(text)):
        if text[j] == '[': depth += 1
        elif text[j] == ']':
            depth -= 1
            if depth == 0: return text[i + 1:j]
    raise ValueError(key)

def objects(arr):
    """Separa los objetos { ... } de primer nivel de un arreglo."""
    out, depth, start = [], 0, None
    for j, ch in enumerate(arr):
        if ch == '{':
            if depth == 0: start = j
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0: out.append(arr[start:j + 1])
    return out

def s(obj, key):
    m = re.search(key + r':\s*"((?:[^"\\]|\\.)*)"', obj)
    return m.group(1) if m else None

res = {}
for reg, (name, glb) in ORG.items():
    text = open(f'{REPO}/packages/registry/registry/base-nova/{reg}/{reg}.tsx', encoding='utf8').read()
    views = []
    for v in objects(block(text, 'views')):
        d = re.search(r'direction:\s*\[([^\]]+)\]', v).group(1)
        ids = re.search(r'structureIds:\s*\[([^\]]*)\]', v)
        views.append({'n': VIEW_ES.get(s(v, 'name'), s(v, 'name')), 'd': [float(x) for x in d.split(',')],
                      **({'ids': re.findall(r'"([^"]+)"', ids.group(1))} if ids else {})})
    st = {}
    for o in objects(block(text, 'structures')):
        st[s(o, 'id')] = [s(o, 'label'), s(o, 'color'), s(o, 'group')] + ([0] if re.search(r'defaultVisible:\s*false', o) else [])
    dv = s(text, 'defaultView')
    res[reg] = {'name': name, 'file': glb, 'def': VIEW_ES.get(dv, dv), 'views': views, 'st': st,
                'credit': s(text, 'credit'), 'lic': s(text, 'license'), 'licUrl': s(text, 'licenseUrl')}
    print(f'{reg}: {len(views)} vistas, {len(st)} estructuras, {res[reg]["lic"]}')
json.dump(res, open(OUT, 'w', encoding='utf8'), ensure_ascii=False, separators=(',', ':'))
