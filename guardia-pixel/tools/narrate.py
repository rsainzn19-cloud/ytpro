"""Graba la narración de los videos con una voz Piper (español de México).

Uso: python tools/narrate.py segmentos.json carpeta-de-voz [temas]
- segmentos.json: {tema: [[hash, texto], ...]} (lo genera tools/narrate.cjs)
- carpeta-de-voz: modelo Piper (.onnx + .onnx.json), p. ej. es_MX-claude-high
Escribe audio/<tema>.mp3 y src/voice/<tema>.json ({hash: [inicio, fin]} en segundos).
"""
import array, glob, json, os, subprocess, sys, tempfile, wave
from piper import PiperVoice

segs_path, voice_dir = sys.argv[1], sys.argv[2]
only = set(sys.argv[3].split(',')) if len(sys.argv) > 3 else None
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
voice = PiperVoice.load(glob.glob(os.path.join(voice_dir, '*.onnx'))[0])
segs = json.load(open(segs_path, encoding='utf-8'))
os.makedirs(os.path.join(root, 'audio'), exist_ok=True)
os.makedirs(os.path.join(root, 'src', 'voice'), exist_ok=True)

for tid, items in segs.items():
    if only and tid not in only:
        continue
    rate, pcm, mapa = None, array.array('h'), {}
    for h, text in items:
        chunk = array.array('h')
        for a in voice.synthesize(text):
            rate = a.sample_rate
            chunk.frombytes(a.audio_int16_bytes)
        lead = int(rate * 0.08)
        t0 = (len(pcm) + lead) / rate
        pcm.extend([0] * lead); pcm.extend(chunk)
        t1 = len(pcm) / rate
        pcm.extend([0] * int(rate * 0.25))
        mapa[str(h)] = [round(t0 - 0.03, 3), round(t1 + 0.05, 3)]
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp:
        wav = tmp.name
    with wave.open(wav, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate); w.writeframes(pcm.tobytes())
    out = os.path.join(root, 'audio', f'{tid}.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', wav, '-ac', '1', '-ar', '22050', '-c:a', 'libmp3lame', '-b:a', '32k', out], check=True)
    os.unlink(wav)
    json.dump(mapa, open(os.path.join(root, 'src', 'voice', f'{tid}.json'), 'w', encoding='utf-8'), separators=(',', ':'))
    print(f'{tid}: {len(items)} frases, {len(pcm) / rate / 60:.1f} min, {os.path.getsize(out) / 1e6:.1f} MB', flush=True)
