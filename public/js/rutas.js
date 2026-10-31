/**
 * Transporte Público Ciudad de Panamá - Metro & MetroBus
 * Archivo de datos para carga mediante etiqueta <script> (sin import/export).
 * Define las constantes globales STOPS y TRIPS.
 * 
 * Nota: Los tiempos de viaje corresponden a estimaciones en horario regular diurno.
 * Tarifas estándar: Metro de Panamá $0.35, MetroBus Regular $0.25, MetroBus Corredor $0.75.
 */

// ==========================================
// 1. PARADAS Y ZONAS PRINCIPALES (STOPS)
// ==========================================
const STOPS = {
  // Eje comercial y bancario central; conecta con Estación Iglesia del Carmen y Vía Argentina (Línea 1)
  "Vía España": {
    lat: 8.9850,
    lng: -79.5230
  },

  // Centro histórico y comercial; conexión con Calidonia, Cinta Costera y Casco Antiguo (Línea 1)
  "5 de Mayo": {
    lat: 8.9598,
    lng: -79.5398
  },

  // Punto neurálgico de intercambio entre Línea 1 y Línea 2 del Metro y Gran Estación de buses
  "San Miguelito": {
    lat: 9.0289,
    lng: -79.5028
  },

  // Principal centro de transporte de Panamá (Gran Terminal Nacional y cabecera sur de Línea 1)
  "Albrook": {
    lat: 8.9745,
    lng: -79.5512
  },

  // Extremo este metropolitano; terminal de Línea 2, conexión al Aeropuerto Internacional y vía Panamericana
  "Tocumen": {
    lat: 9.0682,
    lng: -79.3855
  },

  // Zona corporativa y residencial de alta densidad entre Calle 50, Av. Balboa y Cinta Costera
  "Marbella": {
    lat: 8.9785,
    lng: -79.5180
  },

  // Núcleo empresarial y financiero moderno con acceso directo por autopista Corredor Sur
  "Costa del Este": {
    lat: 9.0145,
    lng: -79.4678
  },

  // Sector comercial y residencial en el sector norte de San Miguelito (Estación Los Andes Línea 1)
  "Los Andes": {
    lat: 9.0435,
    lng: -79.5074
  },

  // Sector residencial e industrial liviano entre Transístmica y 12 de Octubre (Línea 1)
  "Pueblo Nuevo": {
    lat: 9.0068,
    lng: -79.5132
  },

  // Zona gastronómica y residencial conectada con Vía Porras y Calle 50
  "San Francisco": {
    lat: 8.9912,
    lng: -79.4985
  }
};

// ==========================================
// 2. RUTAS Y TRAYECTOS (TRIPS)
// ==========================================
const TRIPS = {
  // --- Rutas desde y hacia Vía España ---
  "Vía España>Albrook": {
    metro: {
      min: 12,
      fare: 0.35,
      steps: [
        "Ingresar a la Estación Iglesia del Carmen (Línea 1) en Vía España",
        "Abordar tren con dirección a Albrook y recorrer 3 estaciones",
        "Descender en Estación Albrook con acceso directo a la Gran Terminal de Transporte"
      ]
    },
    bus: {
      min: 28,
      fare: 0.25,
      steps: [
        "Tomar MetroBus ruta Troncal Vía España (V180 / V201) en parada Iglesia del Carmen",
        "Transitar por Calidonia y Curundú hasta aproximarse a la terminal",
        "Descender en la bahía de llegada de la Terminal de Albrook"
      ]
    }
  },

  "Albrook>Vía España": {
    metro: {
      min: 12,
      fare: 0.35,
      steps: [
        "Abordar tren en Estación Albrook (Línea 1) en dirección San Isidro",
        "Viajar directo durante 3 estaciones (pasando 5 de Mayo y Santo Tomás)",
        "Bajar en Estación Iglesia del Carmen y salir hacia Av. Manuel Espinosa Batista / Vía España"
      ]
    },
    bus: {
      min: 30,
      fare: 0.25,
      steps: [
        "Tomar MetroBus ruta Troncal Vía España en la Bahía B de Albrook",
        "Recorrer Av. de los Mártires, cruzar Plaza 5 de Mayo y Calidonia",
        "Descender en la parada Estación Iglesia del Carmen sobre Vía España"
      ]
    }
  },

  "Vía España>San Miguelito": {
    metro: {
      min: 14,
      fare: 0.35,
      steps: [
        "Entrar a Estación Iglesia del Carmen o Vía Argentina (Línea 1) rumbo a San Isidro",
        "Pasar las estaciones Fernández de Córdoba, El Ingenio y Pueblo Nuevo",
        "Descender en Estación San Miguelito (nivel subterráneo o conexión a pasarela)"
      ]
    },
    bus: {
      min: 35,
      fare: 0.25,
      steps: [
        "Tomar MetroBus Vía España (V180) en dirección al Norte",
        "Avanzar por Río Abajo y Calle 16 Santa Elena",
        "Bajar en la parada Cruce de San Miguelito / Gran Estación"
      ]
    }
  },

  "San Miguelito>Vía España": {
    metro: {
      min: 14,
      fare: 0.35,
      steps: [
        "Ingresar a Estación San Miguelito (Línea 1) en andén dirección Albrook",
        "Viajar 5 estaciones hasta Estación Iglesia del Carmen o Vía Argentina",
        "Salir por torniquetes hacia el corredor comercial de Vía España"
      ]
    },
    bus: {
      min: 38,
      fare: 0.25,
      steps: [
        "Abordar MetroBus ruta Vía España (V180) en la parada Gran Estación",
        "Transitar por Av. La Paz, Vía Fernández de Córdoba y empalme a Vía España",
        "Descender en parada Iglesia del Carmen / Calle Manuel Espinosa"
      ]
    }
  },

  // --- Rutas San Miguelito <-> Albrook ---
  "San Miguelito>Albrook": {
    metro: {
      min: 20,
      fare: 0.35,
      steps: [
        "Abordar Línea 1 en Estación San Miguelito con dirección Albrook",
        "Recorrer 10 estaciones sin transbordo atravesando el centro urbano",
        "Descender en la terminal Estación Albrook"
      ]
    },
    bus: {
      min: 45,
      fare: 0.25,
      steps: [
        "Abordar MetroBus Troncal Transístmica (K100 / K181) en Gran Estación",
        "Recorrer Vía Simón Bolívar pasando frente a la Universidad de Panamá",
        "Finalizar en la Zona Paga de la Terminal de Albrook"
      ]
    }
  },

  "Albrook>San Miguelito": {
    metro: {
      min: 20,
      fare: 0.35,
      steps: [
        "Abordar Línea 1 en Estación Albrook en dirección a San Isidro",
        "Permanecer a bordo por 10 estaciones",
        "Bajar en Estación San Miguelito (con opción de transbordo a Línea 2)"
      ]
    },
    bus: {
      min: 48,
      fare: 0.25,
      steps: [
        "Abordar MetroBus Transístmica (K100) en Bahía A de la Terminal de Albrook",
        "Avanzar por Av. Simón Bolívar pasando Caja de Seguro Social y El Ingenio",
        "Descender en la parada Gran Estación de San Miguelito"
      ]
    }
  },

  // --- Rutas 5 de Mayo <-> Albrook ---
  "5 de Mayo>Albrook": {
    metro: {
      min: 4,
      fare: 0.35,
      steps: [
        "Ingresar a Estación 5 de Mayo (Línea 1) rumbo a Albrook",
        "Viajar 1 sola estación (aproximadamente 4 minutos de trayecto)",
        "Desembarcar en la estación terminal Albrook"
      ]
    },
    bus: {
      min: 15,
      fare: 0.25,
      steps: [
        "Abordar unidad de MetroBus en la Zona Paga 5 de Mayo con dirección Albrook",
        "Transitar por Av. de los Mártires y borde de Ancón",
        "Descender en la Terminal Nacional de Transporte de Albrook"
      ]
    }
  },

  "Albrook>5 de Mayo": {
    metro: {
      min: 4,
      fare: 0.35,
      steps: [
        "Tomar Línea 1 en Estación Albrook en andén hacia San Isidro",
        "Recorrer 1 parada directa",
        "Bajar en Estación 5 de Mayo con acceso a Plaza 5 de Mayo y Peatonal"
      ]
    },
    bus: {
      min: 14,
      fare: 0.25,
      steps: [
        "Tomar MetroBus ruta Calidonia o 5 de Mayo en Bahía B de Albrook",
        "Recorrer Av. Roosevelt hacia Plaza 5 de Mayo",
        "Descender en la Zona Paga 5 de Mayo"
      ]
    }
  },

  // --- Rutas 5 de Mayo <-> San Miguelito ---
  "5 de Mayo>San Miguelito": {
    metro: {
      min: 17,
      fare: 0.35,
      steps: [
        "Abordar Línea 1 en Estación 5 de Mayo con dirección a San Isidro",
        "Viajar a lo largo de 8 estaciones intermedias",
        "Descender en Estación San Miguelito"
      ]
    },
    bus: {
      min: 40,
      fare: 0.25,
      steps: [
        "Abordar MetroBus Transístmica (K100) en la Zona Paga 5 de Mayo",
        "Seguir por Calidonia y la Vía Transístmica rumbo al norte",
        "Bajar en la parada Gran Estación de San Miguelito"
      ]
    }
  },

  // --- Rutas hacia y desde Tocumen ---
  "San Miguelito>Tocumen": {
    metro: {
      min: 28,
      fare: 0.35, // VERIFICAR: Enlace regular L1 a L2 con tarifa integrada estándar de $0.35 (ramal especial al aeropuerto puede requerir validación extra)
      steps: [
        "En Estación San Miguelito, cruzar pasarela elevada de conexión hacia Línea 2",
        "Abordar tren en Línea 2 con dirección a Nuevo Tocumen / Ramal Aeropuerto",
        "Viajar por el viaducto elevado sobre Av. Domingo Díaz y descender en Estación Tocumen"
      ]
    },
    bus: {
      min: 52,
      fare: 0.25,
      steps: [
        "Abordar MetroBus ruta Domingo Díaz / Tocumen (M481) en parada Gran Estación",
        "Continuar por toda la Vía Tocumen pasando Brisas del Golf y Pedregal",
        "Descender en la parada Parque Central de Tocumen / Sixto Pinzón"
      ]
    }
  },

  "Tocumen>San Miguelito": {
    metro: {
      min: 28,
      fare: 0.35, // VERIFICAR
      steps: [
        "Abordar Línea 2 en Estación Tocumen con sentido a San Miguelito",
        "Recorrer las estaciones elevadas sobre Av. Domingo Díaz",
        "Llegar a la estación terminal de transbordo San Miguelito"
      ]
    },
    bus: {
      min: 55,
      fare: 0.25,
      steps: [
        "Tomar MetroBus ruta Vía España o Tumba Muerto desde parada Sixto Pinzón en Tocumen",
        "Avanzar por Av. Domingo Díaz en dirección oeste hacia la ciudad",
        "Bajar en parada Cruce de San Miguelito / Gran Estación"
      ]
    }
  },

  "Tocumen>Albrook": {
    metro: {
      min: 48,
      fare: 0.35, // VERIFICAR: Tarifa unificada del sistema Metro L2 + transbordo a L1 en San Miguelito
      steps: [
        "Tomar Línea 2 en Estación Tocumen hasta Estación San Miguelito (28 min)",
        "Efectuar transbordo hacia Línea 1 en dirección a Albrook",
        "Viajar por Línea 1 (20 min adicionales) hasta llegar a Estación Albrook"
      ]
    },
    bus: {
      min: 35,
      fare: 0.75, // Tarifa Corredor Sur MetroBus $0.75
      steps: [
        "Abordar MetroBus Expreso Corredor Sur (S480 Tocumen - Corredor Sur - Albrook) en parada Parque Tocumen",
        "Ingresar a la autopista de peaje Corredor Sur con tránsito expreso directo",
        "Descender en la plataforma de desembarque de la Terminal de Albrook"
      ]
    }
  },

  "Albrook>Tocumen": {
    metro: {
      min: 48,
      fare: 0.35, // VERIFICAR
      steps: [
        "Abordar Línea 1 en Estación Albrook rumbo a San Isidro hasta Estación San Miguelito",
        "Transferir mediante pasarela a la Línea 2 en dirección a Nuevo Tocumen",
        "Descender en Estación Tocumen"
      ]
    },
    bus: {
      min: 38,
      fare: 0.75, // Tarifa Corredor Sur MetroBus $0.75
      steps: [
        "Abordar MetroBus ruta Corredor Sur Tocumen (S480) en la Bahía Corredor de Albrook",
        "Transitar de manera ininterrumpida por la autopista Corredor Sur",
        "Salir en el intercambiador este y descender en parada principal Tocumen"
      ]
    }
  },

  "Vía España>Tocumen": {
    metro: {
      min: 42,
      fare: 0.35, // VERIFICAR
      steps: [
        "Tomar Línea 1 en Estación Iglesia del Carmen en sentido norte hasta San Miguelito",
        "Realizar transbordo a Línea 2 con dirección a Nuevo Tocumen",
        "Descender en Estación Tocumen"
      ]
    },
    bus: {
      min: 65,
      fare: 0.25, // Troncal regular Vía España V480 ($0.25). Opción corredor desde Marbella/Paitilla cuesta $0.75
      steps: [
        "Tomar MetroBus Troncal Vía España - Tocumen (V480) frente a parada Iglesia del Carmen",
        "Recorrer Vía España hacia Juan Díaz y Av. José Agustín Arango",
        "Continuar por Mañanitas hasta parada central Tocumen"
      ]
    }
  },

  // --- Rutas Marbella ---
  "Marbella>Albrook": {
    metro: {
      min: 22,
      fare: 0.35,
      steps: [
        "Caminar 8 minutos hacia Estación Iglesia del Carmen (Línea 1)",
        "Abordar tren con dirección a Albrook",
        "Descender tras 3 paradas en Estación Albrook"
      ]
    },
    bus: {
      min: 24,
      fare: 0.25,
      steps: [
        "Abordar MetroBus ruta Balboa / Cinta Costera en parada Calle 50 Marbella",
        "Recorrer la Cinta Costera y Av. de los Poetas",
        "Bajar en la Terminal Nacional de Albrook"
      ]
    }
  },

  "Marbella>5 de Mayo": {
    metro: {
      min: 15,
      fare: 0.35,
      steps: [
        "Caminar hacia el acceso de Estación Iglesia del Carmen",
        "Tomar Línea 1 hacia Albrook y viajar 2 estaciones",
        "Descender en Estación 5 de Mayo"
      ]
    },
    bus: {
      min: 16,
      fare: 0.25,
      steps: [
        "Tomar MetroBus en parada Av. Balboa / Calle 50 Marbella",
        "Avanzar bordeando la Cinta Costera hasta el viaducto 3 de Noviembre",
        "Descender en Zona Paga 5 de Mayo"
      ]
    }
  },

  "Marbella>Costa del Este": {
    metro: {
      min: 40,
      fare: 0.35, // VERIFICAR: Requiere Metro L1 + transbordo a L2 hasta Cincuentenario + enlace en bus/taxi
      steps: [
        "Caminar a Estación Iglesia del Carmen y abordar L1 hacia San Miguelito",
        "Transbordar a Línea 2 y viajar hasta Estación Cincuentenario",
        "Tomar taxi o bus alimentador C664 hacia el polígono de Costa del Este"
      ]
    },
    bus: {
      min: 18,
      fare: 0.75, // Tarifa Corredor Sur MetroBus $0.75
      steps: [
        "Abordar MetroBus Corredor Sur (C664 / S662) en parada Multicentro / Marbella",
        "Ingresar al tramo marítimo del Corredor Sur sin semáforos",
        "Bajar en parada Business Park / Av. Principal de Costa del Este"
      ]
    }
  },

  // --- Rutas Costa del Este ---
  "Costa del Este>Albrook": {
    metro: {
      min: 44,
      fare: 0.35, // VERIFICAR: Requiere enlace inicial a Línea 2
      steps: [
        "Tomar transporte de enlace o alimentador hacia Estación Cincuentenario (Línea 2)",
        "Viajar en Metro L2 hasta San Miguelito y transbordar a Línea 1 en dirección Albrook",
        "Descender en la estación terminal Albrook"
      ]
    },
    bus: {
      min: 26,
      fare: 0.75, // Tarifa Corredor Sur MetroBus $0.75
      steps: [
        "Abordar MetroBus Corredor Sur (S662 / C664) en parada TownCenter o Costa del Este",
        "Tomar autopista Corredor Sur a velocidad expresa bordeando la Bahía de Panamá",
        "Descender directamente en la Zona Paga de la Terminal de Albrook"
      ]
    }
  },

  "Albrook>Costa del Este": {
    metro: {
      min: 45,
      fare: 0.35, // VERIFICAR: Sin estación de Metro directa dentro de Costa del Este
      steps: [
        "Abordar Línea 1 en Albrook hasta Estación San Miguelito",
        "Transbordo a Línea 2 hasta Estación Cincuentenario",
        "Completar el último tramo en bus alimentador hacia Costa del Este"
      ]
    },
    bus: {
      min: 28,
      fare: 0.75, // Tarifa Corredor Sur MetroBus $0.75
      steps: [
        "En Bahía Corredor de Albrook, abordar MetroBus ruta Corredor Sur Costa del Este (S662)",
        "Ingresar a la autopista Corredor Sur cruzando el tramo marino",
        "Salir en la rotonda de Costa del Este y bajar en parada TownCenter"
      ]
    }
  },

  "Costa del Este>Tocumen": {
    metro: {
      min: 36,
      fare: 0.35, // VERIFICAR
      steps: [
        "Tomar transporte de enlace a Estación El Crisol o Cincuentenario (Línea 2)",
        "Abordar tren en Línea 2 en sentido hacia Nuevo Tocumen",
        "Bajar en Estación Tocumen"
      ]
    },
    bus: {
      min: 28,
      fare: 0.75, // VERIFICAR: Tramo este Corredor Sur
      steps: [
        "Tomar MetroBus Corredor Sur en sentido este en parada Av. Costa del Sol",
        "Continuar por el Corredor Sur hasta la rampa hacia Tocumen / Mañanitas",
        "Descender en parada de acceso a Tocumen"
      ]
    }
  },

  // --- Rutas Los Andes ---
  "Los Andes>Albrook": {
    metro: {
      min: 24,
      fare: 0.35,
      steps: [
        "Ingresar a Estación Los Andes (Línea 1) en andén hacia Albrook",
        "Viajar de forma directa a través de 12 estaciones (viaducto y tramo subterráneo)",
        "Llegar a la estación terminal Albrook"
      ]
    },
    bus: {
      min: 52,
      fare: 0.25,
      steps: [
        "Abordar MetroBus Transístmica (K100) en la parada frente al Centro Comercial Los Andes",
        "Avanzar por toda la Vía Transístmica pasando San Miguelito y Vista Hermosa",
        "Descender en la plataforma de la Terminal de Albrook"
      ]
    }
  },

  "Los Andes>5 de Mayo": {
    metro: {
      min: 21,
      fare: 0.35,
      steps: [
        "Abordar Línea 1 en Estación Los Andes en dirección sur hacia Albrook",
        "Recorrer 10 estaciones intermedias",
        "Descender en Estación 5 de Mayo"
      ]
    },
    bus: {
      min: 44,
      fare: 0.25,
      steps: [
        "Tomar MetroBus Transístmica o Tumba Muerto en parada Los Andes Mall",
        "Transitar en dirección sur hacia el centro de la ciudad",
        "Bajar en la Zona Paga 5 de Mayo"
      ]
    }
  },

  // --- Rutas Pueblo Nuevo ---
  "Pueblo Nuevo>5 de Mayo": {
    metro: {
      min: 11,
      fare: 0.35,
      steps: [
        "Ingresar a Estación Pueblo Nuevo (Línea 1) con sentido a Albrook",
        "Pasar estaciones El Ingenio, Fernández de Córdoba, Iglesia del Carmen, Santo Tomás y Lotería",
        "Descender en Estación 5 de Mayo"
      ]
    },
    bus: {
      min: 26,
      fare: 0.25,
      steps: [
        "Tomar MetroBus ruta Transístmica en parada Calle 12 de Octubre / Pueblo Nuevo",
        "Seguir por la Vía Transístmica hacia Calidonia",
        "Desembarcar en la Zona Paga 5 de Mayo"
      ]
    }
  },

  "Pueblo Nuevo>Albrook": {
    metro: {
      min: 15,
      fare: 0.35,
      steps: [
        "Tomar Línea 1 en Estación Pueblo Nuevo dirección Albrook",
        "Viajar por 7 paradas directas",
        "Descender en Estación Albrook"
      ]
    },
    bus: {
      min: 32,
      fare: 0.25,
      steps: [
        "Tomar MetroBus Transístmica (K100) en parada Pueblo Nuevo / Vía Fernández de Córdoba",
        "Transitar por Vía Simón Bolívar hacia Curundú",
        "Descender en la Terminal Nacional de Albrook"
      ]
    }
  },

  // --- Rutas San Francisco ---
  "San Francisco>Albrook": {
    metro: {
      min: 25,
      fare: 0.35, // VERIFICAR: Requiere enlace inicial a Línea 1 (Fernández de Córdoba o Iglesia del Carmen)
      steps: [
        "Tomar transporte de enlace o caminar hacia Estación Fernández de Córdoba (L1)",
        "Abordar tren en Línea 1 en dirección sur hacia Albrook",
        "Descender en Estación Albrook"
      ]
    },
    bus: {
      min: 32,
      fare: 0.25, // Regular por Vía Israel / Cinta Costera ($0.25) o Corredor Sur ($0.75)
      steps: [
        "Abordar MetroBus ruta Calle 50 o Vía Porras (C941 / C640) en parada Parque Omar",
        "Continuar por Calle 50, Calidonia y Ancón",
        "Descender en la Terminal de Albrook"
      ]
    }
  },

  // ==========================================
  // ENTRADA DEFAULT (Para pares sin ruta fija)
  // ==========================================
  "default": {
    metro: {
      min: 30, // Estimación promedio de trayecto en red metro con 1 transbordo
      fare: 0.35, // Tarifa general del Metro de Panamá
      steps: [
        "Identificar la estación de Metro más cercana al punto de origen (Línea 1 o Línea 2)",
        "Abordar tren y transferir en Estación San Miguelito en caso de cambio de línea",
        "Completar el último tramo a pie o mediante ruta alimentadora de MiBus hasta el destino"
      ]
    },
    bus: {
      min: 45, // Estimación promedio de trayecto en red de buses
      fare: 0.25, // VERIFICAR: Aplicar $0.25 para rutas Troncales/Transístmica o $0.75 para rutas Expresas por Corredor
      steps: [
        "Localizar la Zona Paga o parada de MetroBus más conveniente en el sector de salida",
        "Abordar la ruta Troncal o Transístmica adecuada hacia el nodo de transferencia más próximo",
        "Descender en la parada o bahía de buses más cercana a la zona de destino"
      ]
    }
  }
};
