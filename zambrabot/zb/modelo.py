from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime


@dataclass
class Estudio:
    """Un estudio (tarjeta) del portal: LABHEM, LABQUI, ..."""
    codigo: str
    titulo: str
    fecha: datetime                      # "Fecha de creación"
    estatus: str = ""                    # Validada / Parcialmente validada
    valores: list[tuple[str, str]] = field(default_factory=list)  # (analito, valor limpio)

    @property
    def parcial(self) -> bool:
        return "parcial" in self.estatus.lower()

    def clave(self) -> tuple:
        return (self.codigo, self.fecha, tuple(self.valores))


@dataclass
class Paciente:
    cama: str
    nombre: str                          # solo se usa para buscar; nunca se imprime
    ingreso: datetime | None = None

    @property
    def iniciales(self) -> str:
        from .nombres import iniciales
        return iniciales(self.nombre)


@dataclass
class Lectura:
    paciente: Paciente
    encontrado: bool = False
    estudios: list[Estudio] = field(default_factory=list)
    avisos: list[str] = field(default_factory=list)   # sin nombres ni diagnósticos
