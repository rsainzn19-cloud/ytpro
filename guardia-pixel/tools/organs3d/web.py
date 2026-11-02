# Convierte models3d/*.glb a glTF en JSON con el búfer embebido (models3d/web/<órgano>.json), porque la página
# publicada solo sirve tipos web comunes (.json sí, .glb no). Mismo modelo, sin cambios; ~33% más grande antes de gzip.
#   python3 -I tools/organs3d/web.py models3d
import base64, glob, json, os, struct, sys
src = sys.argv[1]; out = os.path.join(src, 'web'); os.makedirs(out, exist_ok=True)
for f in sorted(glob.glob(os.path.join(src, '*.glb'))):
    b = open(f, 'rb').read()
    assert b[:4] == b'glTF', f
    n = struct.unpack('<I', b[12:16])[0]; j = json.loads(b[20:20 + n])
    rest = b[20 + n:]; bl = struct.unpack('<I', rest[:4])[0]; assert rest[4:8] == b'BIN\x00'
    j['buffers'][0]['uri'] = 'data:application/octet-stream;base64,' + base64.b64encode(rest[8:8 + bl]).decode()
    dst = os.path.join(out, os.path.basename(f)[:-4] + '.json')
    json.dump(j, open(dst, 'w'), separators=(',', ':'))
    print(os.path.basename(dst), os.path.getsize(dst) // 1024, 'KB')
