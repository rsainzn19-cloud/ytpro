"""Narración de un clip: python tts.py textos.json carpeta-de-voz carpeta-salida
Escribe s0.wav, s1.wav... (una por escena) y dur.json con la duración de cada una en segundos."""
import glob, json, os, sys, wave
from piper import PiperVoice

texts, voice_dir, out = json.load(open(sys.argv[1], encoding='utf-8')), sys.argv[2], sys.argv[3]
voice = PiperVoice.load(glob.glob(os.path.join(voice_dir, '*.onnx'))[0])
os.makedirs(out, exist_ok=True)
durs = []
for i, text in enumerate(texts):
    rate, pcm = 22050, b''
    for a in voice.synthesize(text):
        rate = a.sample_rate
        pcm += a.audio_int16_bytes
    with wave.open(os.path.join(out, f's{i}.wav'), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate); w.writeframes(pcm)
    durs.append(len(pcm) / 2 / rate)
json.dump(durs, open(os.path.join(out, 'dur.json'), 'w'))
