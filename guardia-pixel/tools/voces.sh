#!/bin/sh
# Variantes de la narración (mismos tiempos que audio/<tema>.mp3, así sirven los mismos mapas de src/voice):
#   audio/heroe/      más aguda y brillante, con más energía
#   audio/espartano/  más grave, con eco corto de casco
# Uso: sh tools/voces.sh            (todas)   ·   sh tools/voces.sh hta sca   (solo esas)
cd "$(dirname "$0")/.." || exit 1
HEROE="rubberband=pitch=1.2:formant=preserved:pitchq=quality,highpass=f=120,equalizer=f=3200:t=q:w=1.2:g=4,equalizer=f=250:t=q:w=1:g=-2,acompressor=threshold=0.1:ratio=4:attack=3:release=90:makeup=1.8,alimiter=limit=0.95"
ESPARTANO="rubberband=pitch=0.82:formant=shifted:pitchq=quality,highpass=f=90,equalizer=f=180:t=q:w=1:g=3,equalizer=f=2600:t=q:w=1.2:g=3,aecho=0.85:0.5:9|17:0.22|0.12,acompressor=threshold=0.12:ratio=3:attack=5:release=120:makeup=1.6,alimiter=limit=0.95"
mkdir -p audio/heroe audio/espartano
if [ $# -gt 0 ]; then LIST="$*"; else LIST=$(ls audio/*.mp3 | sed 's#audio/##; s#\.mp3$##'); fi
for t in $LIST; do
  ffmpeg -v error -y -i "audio/$t.mp3" -af "$HEROE" -ac 1 -ar 22050 -c:a libmp3lame -b:a 32k "audio/heroe/$t.mp3" &
  ffmpeg -v error -y -i "audio/$t.mp3" -af "$ESPARTANO" -ac 1 -ar 22050 -c:a libmp3lame -b:a 32k "audio/espartano/$t.mp3"
  wait
  echo "$t listo"
done
