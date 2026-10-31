// ============================================================================
// MetroSmart PTY - data.js
// Catálogo de paradas oficiales y viajes preconfigurados de Metro y MetroBus
// ============================================================================
// PERSONA 2: ampliar aquí

const STOPS = {
  "Vía España": {
    lat: 8.9863,
    lng: -79.5230,
    desc: "Estación Iglesia del Carmen / Vía España (Línea 1 Metro y Troncales)"
  },
  "5 de Mayo": {
    lat: 8.9569,
    lng: -79.5398,
    desc: "Estación 5 de Mayo (L1) y Zona Paga El Marañón / Calidonia"
  },
  "San Miguelito": {
    lat: 9.0305,
    lng: -79.5034,
    desc: "Estación de Intercambio Línea 1 y Línea 2 / Zona Paga San Miguelito"
  },
  "Albrook": {
    lat: 8.9734,
    lng: -79.5526,
    desc: "Gran Terminal Nacional de Transporte y Estación Albrook (L1)"
  },
  "Tocumen": {
    lat: 9.0718,
    lng: -79.3879,
    desc: "Zona Este / Estación Aeropuerto y Nuevo Tocumen (Línea 2)"
  },
  "Marbella": {
    lat: 8.9798,
    lng: -79.5186,
    desc: "Área Bancaria / Calle 50 y Avenida Balboa (MetroBus Troncal)"
  }
};

const TRIPS = {
  // Viaje: Albrook a San Miguelito (Línea 1)
  "Albrook>San Miguelito": {
    metro: {
      min: 18,
      fare: 0.35,
      steps: [
        "Ingresa a la estación subterránea de Albrook (Línea 1).",
        "Aborda el tren con dirección a San Isidro / Villa Zaita.",
        "Viaja 8 estaciones directas.",
        "Desembarca en la estación elevada San Miguelito."
      ]
    },
    bus: {
      min: 42,
      fare: 0.25,
      steps: [
        "Aborda ruta troncal Transístmica (K441 o K540) en Bahía E de Gran Terminal Albrook.",
        "Recorre Avenida Simón Bolívar (Transístmica).",
        "Bájate en la Zona Paga San Miguelito."
      ]
    }
  },

  // Viaje: San Miguelito a Albrook (Línea 1)
  "San Miguelito>Albrook": {
    metro: {
      min: 18,
      fare: 0.35,
      steps: [
        "Ingresa a la estación San Miguelito (andén Línea 1).",
        "Toma el tren con dirección sur a Albrook.",
        "Pasa por 12 de Octubre, Santo Tomás y 5 de Mayo.",
        "Llega a la estación terminal en Albrook."
      ]
    },
    bus: {
      min: 45,
      fare: 0.25,
      steps: [
        "Aborda MetroBus Transístmica K441 en Zona Paga San Miguelito.",
        "Viaja por la Transístmica hacia Calidonia.",
        "Finaliza en Gran Terminal de Albrook."
      ]
    }
  },

  // Viaje: Vía España a 5 de Mayo
  "Vía España>5 de Mayo": {
    metro: {
      min: 7,
      fare: 0.35,
      steps: [
        "Ingresa a la estación Iglesia del Carmen (Vía España).",
        "Aborda el tren Línea 1 en dirección Albrook.",
        "Pasa por estación Santo Tomás y Lotería.",
        "Desembarca en estación 5 de Mayo (salida Peatonal / Marañón)."
      ]
    },
    bus: {
      min: 22,
      fare: 0.25,
      steps: [
        "Toma el MetroBus ruta Vía España (V430 / V500) en parada Iglesia del Carmen.",
        "Continúa directo por Vía España hacia Calidonia.",
        "Bájate en la Zona Paga 5 de Mayo."
      ]
    }
  },

  // Viaje: 5 de Mayo a Vía España
  "5 de Mayo>Vía España": {
    metro: {
      min: 7,
      fare: 0.35,
      steps: [
        "Ingresa a la estación 5 de Mayo (Línea 1).",
        "Aborda el tren con dirección San Isidro / Villa Zaita.",
        "Bájate en la estación Iglesia del Carmen (salida Vía España)."
      ]
    },
    bus: {
      min: 25,
      fare: 0.25,
      steps: [
        "Aborda MetroBus V500 o V530 en Bahía B de Zona Paga 5 de Mayo.",
        "Recorre Avenida Central y Vía España.",
        "Bájate en la parada frente al Metro Iglesia del Carmen."
      ]
    }
  },

  // Viaje: San Miguelito a Tocumen (Línea 2)
  "San Miguelito>Tocumen": {
    metro: {
      min: 26,
      fare: 0.50,
      steps: [
        "En estación San Miguelito, sube al andén superior de la Línea 2.",
        "Aborda el tren con sentido hacia Nuevo Tocumen.",
        "Viaja por viaducto Domingo Díaz pasando por Cerro Viento y Brisas.",
        "Desciende en estación Corredor Sur / Altos de Tocumen."
      ]
    },
    bus: {
      min: 55,
      fare: 0.25,
      steps: [
        "Toma MetroBus ruta Domingo Díaz (V440 / CH400) en Zona Paga San Miguelito.",
        "Viaja por la Avenida Domingo Díaz hacia Tocumen.",
        "Bájate en la parada de Tocumen."
      ]
    }
  },

  // Viaje: Tocumen a San Miguelito
  "Tocumen>San Miguelito": {
    metro: {
      min: 26,
      fare: 0.50,
      steps: [
        "Ingresa a la estación de Línea 2 en Tocumen.",
        "Aborda tren en dirección San Miguelito.",
        "Desembarca en estación de transbordo San Miguelito."
      ]
    },
    bus: {
      min: 58,
      fare: 0.25,
      steps: [
        "Aborda MetroBus ruta Domingo Díaz hacia el Centro.",
        "Transita por Vía Tocumen y Avenida Domingo Díaz.",
        "Bájate en Zona Paga San Miguelito."
      ]
    }
  },

  // Viaje: Marbella a Albrook
  "Marbella>Albrook": {
    metro: {
      min: 14,
      fare: 0.35,
      steps: [
        "Camina 4 minutos desde Marbella hacia la estación Iglesia del Carmen.",
        "Toma el Metro Línea 1 en dirección Albrook.",
        "Llega directo a la estación Albrook evitando el tráfico de Calle 50."
      ]
    },
    bus: {
      min: 30,
      fare: 0.25,
      steps: [
        "Toma el MetroBus ruta Cinta Costera o Calle 50 en Marbella.",
        "Continúa hacia Calidonia y la Gran Terminal.",
        "Bájate en Albrook."
      ]
    }
  },

  // Viaje: Albrook a Marbella
  "Albrook>Marbella": {
    metro: {
      min: 14,
      fare: 0.35,
      steps: [
        "Ingresa a la estación Albrook de la Línea 1.",
        "Toma el tren en dirección a Villa Zaita.",
        "Bájate en Iglesia del Carmen y camina 4 minutos hacia Marbella / Calle 50."
      ]
    },
    bus: {
      min: 28,
      fare: 0.25,
      steps: [
        "Aborda MetroBus ruta Cinta Costera en la Terminal de Albrook.",
        "Bájate en parada Balboa Plaza o Calle 50 Marbella."
      ]
    }
  },

  // Viaje: Albrook a Tocumen (Transbordo L1 + L2)
  "Albrook>Tocumen": {
    metro: {
      min: 44,
      fare: 0.85,
      steps: [
        "Aborda el Metro Línea 1 en estación Albrook hacia San Miguelito ($0.35).",
        "En San Miguelito haz transbordo interno techado a Línea 2 hacia Nuevo Tocumen ($0.50).",
        "Desciende en la estación de Tocumen."
      ]
    },
    bus: {
      min: 65,
      fare: 0.75,
      steps: [
        "Aborda ruta MetroBus Corredor Sur (S542) en Gran Terminal Albrook ($0.75).",
        "Viaja expreso por Corredor Sur directo hacia Tocumen.",
        "Bájate en la parada de Tocumen."
      ]
    }
  },

  // Viaje: Tocumen a Albrook
  "Tocumen>Albrook": {
    metro: {
      min: 44,
      fare: 0.85,
      steps: [
        "Aborda Línea 2 en Tocumen hasta San Miguelito ($0.50).",
        "Transborda a Línea 1 en dirección Albrook ($0.35).",
        "Llega a la Gran Terminal de Albrook."
      ]
    },
    bus: {
      min: 65,
      fare: 0.75,
      steps: [
        "Aborda MetroBus Corredor Sur (S542) en Tocumen ($0.75).",
        "Viaja directo por Corredor Sur hasta la terminal de Albrook.",
        "Desciende en Bahía de llegada."
      ]
    }
  },

  // Viaje: Vía España a Tocumen
  "Vía España>Tocumen": {
    metro: {
      min: 38,
      fare: 0.85,
      steps: [
        "Toma Metro Línea 1 en Iglesia del Carmen hacia San Miguelito ($0.35).",
        "Transborda en San Miguelito a Línea 2 hacia Nuevo Tocumen ($0.50).",
        "Llega a Tocumen protegido de lluvias y tranques."
      ]
    },
    bus: {
      min: 60,
      fare: 0.25,
      steps: [
        "Toma MetroBus ruta Vía España - Tocumen en la parada Iglesia del Carmen.",
        "Viaja por Vía España y Avenida Domingo Díaz.",
        "Bájate en la parada de Tocumen."
      ]
    }
  },

  // Viaje: Tocumen a Vía España
  "Tocumen>Vía España": {
    metro: {
      min: 38,
      fare: 0.85,
      steps: [
        "Aborda Línea 2 en Tocumen hasta San Miguelito ($0.50).",
        "Transborda a Línea 1 hacia Iglesia del Carmen ($0.35).",
        "Salida directa a Vía España."
      ]
    },
    bus: {
      min: 62,
      fare: 0.25,
      steps: [
        "Aborda MetroBus hacia Vía España en la parada de Tocumen.",
        "Viaja por Domingo Díaz y Vía España hasta Iglesia del Carmen."
      ]
    }
  },

  // Viaje por defecto
  "default": {
    metro: {
      min: 20,
      fare: 0.35,
      steps: [
        "Dirígete a la estación de Metro de Panamá más cercana a tu ubicación.",
        "Valida tu tarjeta en los torniquetes ($0.35 para Línea 1 o $0.50 para Línea 2).",
        "Si tu destino requiere cambiar de línea, realiza transbordo en la estación San Miguelito.",
        "Desciende en la estación correspondiente a tu parada de destino."
      ]
    },
    bus: {
      min: 40,
      fare: 0.25,
      steps: [
        "Ubica la Zona Paga o parada de MetroBus más cercana.",
        "Aborda la ruta troncal regular ($0.25) o ruta corredor rápido ($0.75).",
        "Monitorea el recorrido y solicita la parada con anticipación."
      ]
    }
  }
};

// Exposición global para navegador
if (typeof window !== "undefined") {
  window.STOPS = STOPS;
  window.TRIPS = TRIPS;
}