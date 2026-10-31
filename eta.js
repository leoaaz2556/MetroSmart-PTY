// eta.js — Predicción de demora para MetroSmart PTY
// Se carga con <script src="eta.js"></script> (sin import/export).
// Define dos funciones globales: rush(hora) y factor(hora, trafico, clima).

// ¿La hora (0-23) está en hora pico? Pico: 6-9 y 16-19 (inclusive).
function rush(hora) {
  return (hora >= 6 && hora <= 9) || (hora >= 16 && hora <= 19);
}

// Tabla aprendida por el árbol de decisión del notebook (metrosmart_eta.ipynb).
// Clave: [pico][trafico pesado][lluvia], cada uno 0 o 1.
// Valor: demora esperada en minutos según el árbol (datos SIMULADOS).
// Se obtuvo con la última celda del notebook (promedio de lunes a viernes).
const DEMORA_MIN = {
  "0,0,0": 3.1,  "0,0,1": 6.9,  "0,1,0": 8.8,  "0,1,1": 13.0,
  "1,0,0": 10.2, "1,0,1": 13.8, "1,1,0": 20.4, "1,1,1": 24.4,
};
const VIAJE_TIPICO_MIN = 30; // duración típica de un viaje, usada para convertir minutos extra en multiplicador

// Multiplicador de demora: 1.0 = sin demora extra.
// factor = 1 + (demora esperada - demora base) / duración típica del viaje.
// hora: número 0-23 | trafico: "Normal" o "Pesado" | clima: "Despejado" o "Lluvia"
function factor(hora, trafico, clima) {
  const clave = [rush(hora) ? 1 : 0, trafico === "Pesado" ? 1 : 0, clima === "Lluvia" ? 1 : 0].join(",");
  return 1 + (DEMORA_MIN[clave] - DEMORA_MIN["0,0,0"]) / VIAJE_TIPICO_MIN;
}