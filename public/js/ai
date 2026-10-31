// ============================================================================
// MetroSmart PTY - ai.js
// Asistente inteligente y motor de reglas de tránsito para Panamá
// ============================================================================
// PERSONA 4: ampliar aquí

/**
 * Prompt del sistema para el copiloto de tránsito oficial MetroSmart PTY.
 */
const SYSTEM = `Eres "MetroSmart PTY", el copiloto oficial de transporte público de la Ciudad de Panamá (Metro de Panamá Línea 1 y 2, y MetroBus MiBus).
Tu objetivo es recomendar la mejor ruta de viaje considerando en tiempo real:
- Ubicación actual del usuario.
- Saldo en tarjeta Metro / MetroBus (en USD).
- Hora actual y condición de hora pico (6-9 y 16-19).
- Estado del tráfico vial en superficie (Normal o Pesado).
- Condición climática (Despejado o Lluvia).
- Factor de demora calculado.

REGLAS DE OPERACIÓN:
1. Valida siempre el saldo: advierte si el saldo no alcanza para el Metro ($0.35 L1, $0.50 L2) o MetroBus ($0.25 regular, $0.75 corredor).
2. Con lluvia o tráfico pesado, recomienda firmemente el Metro por sobre los buses para evitar tranques e inundaciones.
3. Menciona claramente el destino para que el mapa trace la ruta.
4. Mantén un tono local panameño, profesional, conciso y estilo señalética de transporte.`;

/**
 * Motor de reglas determinístico sin IA que analiza la pregunta y el contexto actual.
 * @param {string} pregunta - Consulta realizada por el usuario.
 * @returns {string} Respuesta estructurada con ruta, tiempos, tarifas y recomendaciones.
 */
function local(pregunta) {
  if (typeof ctx !== "function") {
    return "Error del sistema: la función ctx() no está disponible.";
  }

  const c = ctx();
  const hora = c.hora || "12:00";
  const trafico = c.trafico || "Normal";
  const clima = c.clima || "Despejado";
  const saldo = Number(c.saldo_usd) || 0;
  const origen = c.ubicacion || "Albrook";

  // Factor de demora actual de eta.js
  const f = typeof factor === "function" ? factor(hora, trafico, clima) : 1.0;
  const isRush = typeof rush === "function" ? rush(hora) > 1.0 : false;
  const isRain = typeof clima === "string" && clima.toLowerCase().includes("lluvia");
  const isHeavyTraffic = typeof trafico === "string" && trafico.toLowerCase().includes("pesado");

  // Detección de parada de destino en la pregunta del usuario
  const stopNames = typeof STOPS !== "undefined" ? Object.keys(STOPS) : [
    "Vía España", "5 de Mayo", "San Miguelito", "Albrook", "Tocumen", "Marbella"
  ];

  const qLower = pregunta.toLowerCase();
  let destino = null;

  for (const name of stopNames) {
    const cleanName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const qClean = qLower.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (qClean.includes(cleanName) && name.toLowerCase() !== origen.toLowerCase()) {
      destino = name;
      break;
    }
  }

  // Fallback de destino por defecto según origen
  if (!destino) {
    if (origen === "Albrook") destino = "San Miguelito";
    else if (origen === "San Miguelito") destino = "Tocumen";
    else if (origen === "Vía España") destino = "5 de Mayo";
    else destino = "Albrook";
  }

  // Búsqueda en el catálogo TRIPS de data.js
  let tripData = null;
  if (typeof TRIPS !== "undefined") {
    const tripKey = `${origen}>${destino}`;
    const reverseKey = `${destino}>${origen}`;
    tripData = TRIPS[tripKey] || TRIPS[reverseKey] || TRIPS["default"];
  }

  if (!tripData) {
    tripData = {
      metro: { min: 20, fare: 0.35, steps: ["Aborda el Metro hacia tu destino.", "Valida tu tarjeta al salir."] },
      bus: { min: 40, fare: 0.25, steps: ["Toma un MetroBus en la parada más cercana.", "Desciende en tu destino."] }
    };
  }

  // Estimación de tiempos ajustados por el factor de demora
  const metroMin = Math.round(tripData.metro.min * (isRain ? 1.15 : 1.0));
  const busMin = Math.round(tripData.bus.min * f);

  // Evaluación de saldo
  const metroFare = tripData.metro.fare;
  const busFare = tripData.bus.fare;
  const canAffordMetro = saldo >= metroFare;
  const canAffordBus = saldo >= busFare;

  let saldoAlert = "";
  if (!canAffordMetro && !canAffordBus) {
    const faltante = (Math.min(metroFare, busFare) - saldo).toFixed(2);
    saldoAlert = `⚠️ **ALERTA DE SALDO INSUFICIENTE**: Tu saldo actual es de **$${saldo.toFixed(2)} USD**. Necesitas recargar al menos **$${faltante} USD** en tótem o Zona Paga antes de abordar.\n\n`;
  } else if (!canAffordMetro && canAffordBus) {
    saldoAlert = `⚠️ Saldo bajo ($${saldo.toFixed(2)}): Te alcanza para MetroBus ($${busFare.toFixed(2)}), pero no para Metro ($${metroFare.toFixed(2)}).\n\n`;
  }

  // Recomendación modal según clima y congestión
  let recomendacion = "";
  if (isRain || isHeavyTraffic) {
    recomendacion = `🚇 **RECOMENDACIÓN METROSMART**: Prioriza el **Metro de Panamá**. Hay ${isRain ? "lluvia" : ""}${isRain && isHeavyTraffic ? " y " : ""}${isHeavyTraffic ? "tráfico pesado" : ""} en superficie; el Metro te ahorrará aprox. **${Math.max(5, busMin - metroMin)} minutos** frente al bus.`;
  } else {
    recomendacion = `⚡ **RECOMENDACIÓN METROSMART**: Condiciones viales favorables (Factor ${f}x). Si buscas rapidez usa **Metro**, si buscas economía usa **MetroBus**.`;
  }

  const metroPasos = tripData.metro.steps.map((s, i) => `  ${i + 1}. ${s}`).join("\n");
  const busPasos = tripData.bus.steps.map((s, i) => `  ${i + 1}. ${s}`).join("\n");

  return `${saldoAlert}🚩 **Ruta sugerida: ${origen} ➔ ${destino}**
⏱️ **Factor de demora actual:** ${f}x ${isRush ? "· [Hora Pico]" : "· [Horario Regular]"} · Clima: ${clima} · Tráfico: ${trafico}

---

🚇 **OPCIÓN A: Metro de Panamá**
- **Tiempo estimado:** ~${metroMin} min
- **Tarifa:** $${metroFare.toFixed(2)} USD | **Saldo posterior:** $${(saldo - metroFare).toFixed(2)} USD
- **Pasos:**
${metroPasos}

🚌 **OPCIÓN B: MetroBus (MiBus)**
- **Tiempo estimado:** ~${busMin} min (afectado por congestión de superficie)
- **Tarifa:** $${busFare.toFixed(2)} USD | **Saldo posterior:** $${(saldo - busFare).toFixed(2)} USD
- **Pasos:**
${busPasos}

---

${recomendacion}`;
}

/**
 * Llama a la API local de Ollama (http://localhost:11434/api/chat) sin streaming.
 * Obtiene endpoint de #ep y modelo de #mdl.
 * @param {string} pregunta - Consulta realizada por el usuario.
 * @returns {Promise<string>} Respuesta generada por el modelo LLM local.
 */
async function ollama(pregunta) {
  if (typeof ctx !== "function") {
    return "Error del sistema: la función ctx() no está disponible.";
  }

  const epEl = document.getElementById("ep");
  const mdlEl = document.getElementById("mdl");

  let endpoint = epEl && epEl.value.trim() ? epEl.value.trim() : "http://localhost:11434";
  let modelo = mdlEl && mdlEl.value.trim() ? mdlEl.value.trim() : "llama3.1:8b";

  endpoint = endpoint.replace(/\/+$/, "");

  const c = ctx();
  const f = typeof factor === "function" ? factor(c.hora, c.trafico, c.clima) : 1.0;

  const systemContext = `${SYSTEM}

CONTEXTO EN TIEMPO REAL REPORTADO POR LA APP:
- Ubicación actual: ${c.ubicacion}
- Saldo en tarjeta: $${Number(c.saldo_usd).toFixed(2)} USD
- Hora actual: ${c.hora}
- Tráfico: ${c.trafico}
- Clima: ${c.clima}
- Factor de demora actual: ${f}x`;

  const requestBody = {
    model: modelo,
    stream: false,
    messages: [
      {
        role: "system",
        content: systemContext
      },
      {
        role: "user",
        content: pregunta
      }
    ]
  };

  try {
    const response = await fetch(`${endpoint}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      return `⚠️ Error de Ollama (${response.status} ${response.statusText}):\n${errText}\n\nVerifica que el modelo "${modelo}" esté descargado con: 'ollama pull ${modelo}'`;
    }

    const data = await response.json();
    if (data.message && data.message.content) {
      return data.message.content;
    } else if (data.response) {
      return data.response;
    } else {
      return "Respuesta recibida de Ollama sin contenido legible.";
    }
  } catch (error) {
    console.error("Error al conectar con Ollama:", error);
    return `⚠️ **No se pudo conectar a Ollama en ${endpoint}**

Posibles causas:
1. Ollama no está iniciado en tu máquina local.
   👉 Abre una terminal y ejecuta: \`ollama run ${modelo}\`
2. Si el navegador bloquea la conexión por CORS, inicia Ollama permitiendo orígenes cruzados:
   👉 En macOS/Linux: \`OLLAMA_ORIGINS="*" ollama serve\`
   👉 En Windows PowerShell: \`$env:OLLAMA_ORIGINS="*"; ollama serve\`
3. También puedes cambiar el menú **"Modo"** a **"Reglas locales"** en el panel de Modelo de IA para obtener respuestas instantáneas sin necesidad de servidor externo.`;
  }
}

// Exposición global para navegador
if (typeof window !== "undefined") {
  window.SYSTEM = SYSTEM;
  window.local = local;
  window.ollama = ollama;
}