"""Modo navegador contra un portal falso local (sin red)."""
import asyncio, socket, subprocess, sys, time
from datetime import datetime
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
pytest.importorskip("playwright")
from zb.modelo import Paciente  # noqa: E402
from zb.portal import PortalUI  # noqa: E402

AQUI = Path(__file__).parent / "portal_falso"


@pytest.fixture(scope="module")
def url():
    s = socket.socket(); s.bind(("127.0.0.1", 0)); puerto = s.getsockname()[1]; s.close()
    p = subprocess.Popen([sys.executable, str(AQUI / "servidor.py"), str(puerto)])
    time.sleep(0.8)
    yield f"http://127.0.0.1:{puerto}"
    p.terminate()


def test_lee_pacientes_en_paralelo(url):
    async def correr():
        async with PortalUI(url, "usuario", "secreto", headless=True, paralelo=3) as portal:
            return await portal.leer_varios([
                (Paciente("202", "Juan Pérez López"), datetime(2026, 11, 20)),   # con acentos: requiere 2a variante
                (Paciente("443", "Ana Díaz Paz"), datetime(2026, 11, 20)),
                (Paciente("212", "Nadie Inexistente Mas"), datetime(2026, 11, 20)),
            ], datetime(2026, 11, 25))
    a, b, c = asyncio.run(correr())
    assert a.encontrado and b.encontrado and not c.encontrado
    hem = next(e for e in a.estudios if e.codigo == "LABHEM")
    assert hem.fecha == datetime(2026, 11, 25, 7, 31)
    assert hem.valores == [("LEUCOCITOS", "12.3"), ("HEMOGLOBINA", "9.1"), ("PLAQUETAS", "250")]
    qui = next(e for e in a.estudios if e.codigo == "LABQUI")
    assert qui.parcial and ("POTASIO", "6.1") in qui.valores and all(x != "CLORO" for x, _ in qui.valores)
    assert b.estudios[0].valores == [("TP", "13.1"), ("INR", "1.2")]
