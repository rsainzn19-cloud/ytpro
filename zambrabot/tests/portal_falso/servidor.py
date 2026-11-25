"""Portal falso para probar el modo navegador sin red. Datos ficticios."""
import json, sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit, parse_qs

PACIENTES = {  # registrados SIN acentos, como pasa en el portal real
    ("JUAN", "PEREZ", "LOPEZ"): [
        {"codigo": "LABHEM", "titulo": "BIOMETRIA HEMATICA", "fecha": "25/11/2026 07:31:00", "estatus": "Validada",
         "valores": [["LEUCOCITOS", "12.3", "Anormal por encima"], ["HEMOGLOBINA", "9.1", "Anormal por debajo"],
                     ["PLAQUETAS", "250", ""]]},
        {"codigo": "LABQUI", "titulo": "QUIMICA SANGUINEA", "fecha": "25/11/2026 07:31:00", "estatus": "Parcialmente validada",
         "valores": [["CREATININA", "1.07", "Anormal por encima"], ["POTASIO", "6.1", "Crítico por encima (Numérico)"],
                     ["TACROLIMUS", "8.2", ""], ["CLORO", "NA", ""]]},
    ],
    ("ANA", "DIAZ", "PAZ"): [
        {"codigo": "LABCOA", "titulo": "TIEMPOS DE COAGULACION", "fecha": "24/11/2026 18:05:00", "estatus": "Validada",
         "valores": [["TP", "13.1", ""], ["INR", "1.2", ""]]},
    ],
}
PAGINA = open(__file__.replace("servidor.py", "app.html"), encoding="utf-8").read()

class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def _send(self, code, body, ct="text/html"):
        b = body.encode(); self.send_response(code); self.send_header("Content-Type", ct)
        self.send_header("Content-Length", str(len(b))); self.end_headers(); self.wfile.write(b)
    def do_GET(self):
        u = urlsplit(self.path)
        if u.path == "/api/resultados":
            if "sesion=ok" not in (self.headers.get("Cookie") or ""):
                return self._send(401, "{}", "application/json")
            q = {k: v[0].upper().strip() for k, v in parse_qs(u.query).items()}
            res = []
            for (n, p, m), estudios in PACIENTES.items():
                if (q.get("nombres", "") and q["nombres"] not in n) or \
                   (q.get("paterno") and q["paterno"] != p) or (q.get("materno") and q["materno"] != m):
                    continue
                for e in estudios:
                    res.append(dict(e, paciente=f"{p} {m} {n}"))
            return self._send(200, json.dumps(res), "application/json")
        return self._send(200, PAGINA)
    def do_POST(self):
        self.send_response(302); self.send_header("Set-Cookie", "sesion=ok; Path=/")
        self.send_header("Location", "/buscar"); self.end_headers()

if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1])), H).serve_forever()
