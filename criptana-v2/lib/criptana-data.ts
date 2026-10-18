export type Language = "es" | "en"

export interface LocalGem {
  id: string
  name: string
  category: "Patrimonio Vivo" | "Arquitectura & Vermut" | "Gastronomía" | "Bodegas & Vino"
  badge: string
  insiderTiming: string
  excerpt: string
  fullDescription: string[]
  insiderPairing: string
  address: string
  hours: string
  price: string
  image: string
  featured?: boolean
}

export interface ItineraryStop {
  time: string
  period: string
  title: string
  spotName: string
  insiderNote: string
  highlightTag: string
}

export interface CuratedItinerary {
  id: string
  title: string
  subtitle: string
  badge: string
  duration: string
  vibe: string
  heroImage: string
  editorialIntro: string
  stops: ItineraryStop[]
  monetization: {
    ctaLabel: string
    bookingUrl: string
    recommendedStay: string
    stayHighlight: string
    priceHint: string
  }
}

export interface AgendaEvent {
  id: string
  category: string
  title: string
  badge: string
  icon: string
  description: string
  time: string
  location: string
  insiderTip: string
  actionLabel?: string
  actionUrl?: string
  // Dynamic Weekly Status & Rich Preview Details
  statusBadge?: string
  statusType?: "home" | "away" | "cultural" | "outdoor"
  subheading?: string
  admission?: string
  synopsis?: string
  pairing?: {
    title: string
    description: string
    ctaText: string
    ctaUrl: string
  }
}

export interface EditorialDictionary {
  nav: {
    itineraries: string
    agenda: string
    gems: string
    feedback: string
    stayBtn: string
  }
  hero: {
    weekendBadge: string
    sunBadge: string
    title: string
    description: string
    ctaItinerary: string
    locationTag: string
    curatedTag: string
  }
  itinerariesSelector: {
    badge: string
    title: string
    subtitle: string
  }
  agendaSection: {
    badge: string
    title: string
    subtitle: string
    quickUpdateNotice: string
    clickToExpand: string
    viewDetails: string
    admissionLabel: string
    pairingLabel: string
    closeLabel: string
  }
  gemsSection: {
    badge: string
    insiderTag: string
    title: string
    subtitle: string
    allCategories: string
    readSecret: string
    planRedondo: string
    pairingTitle: string
  }
  itinerarySection: {
    timelineTitle: string
    routeBadge: string
    updatedBadge: string
    headline: string
    accommodationBadge: string
  }
  feedback: {
    badge: string
    anonymous: string
    title: string
    subtitle: string
    yesBtn: string
    noBtn: string
    thankYou: string
  }
}

export const DICTIONARY: Record<Language, EditorialDictionary> = {
  es: {
    nav: {
      itineraries: "Rutas de Fin de Semana",
      agenda: "Agenda del Finde",
      gems: "Joyas Locales",
      feedback: "Opinión Viajera",
      stayBtn: "Dormir en Criptana",
    },
    hero: {
      weekendBadge: "Guía Local · Tierra de Gigantes",
      sunBadge: "Puesta de sol hoy: ~19:32h en Sierra de los Molinos",
      title: "Campo de Criptana con mirada local.",
      description:
        "Tres rutas de fin de semana diseñadas paso a paso por locales: a qué hora subir a los molinos cuando se van los autobuses, dónde pedir el mejor pulpo a la brasa y qué mesa reservar al atardecer con vistas a la sierra.",
      ctaItinerary: "Ver Rutas de Fin de Semana",
      locationTag: "A 90 min de Madrid (Tren / A-4)",
      curatedTag: "Recomendado por locales",
    },
    itinerariesSelector: {
      badge: "Rutas de Fin de Semana",
      title: "3 Planes Perfectos en Criptana",
      subtitle:
        "Elige el plan que mejor encaje con tu escapada. Cada ruta incluye el recorrido hora a hora y enlaces directos para reservar alojamiento y mesa.",
    },
    agendaSection: {
      badge: "Actualizado cada jueves",
      title: "Agenda del Fin de Semana",
      subtitle:
        "Lo que pasa en el pueblo estos días: teatro, deporte local y los mejores miradores al atardecer.",
      quickUpdateNotice: "Jueves a Domingo",
      clickToExpand: "Toca para ver horarios y detalles",
      viewDetails: "Ver horarios y detalles",
      admissionLabel: "Entradas y Acceso",
      pairingLabel: "Plan recomendado antes o después",
      closeLabel: "Cerrar",
    },
    gemsSection: {
      badge: "Imprescindibles del Pueblo",
      insiderTag: "Consejo de Local",
      title: "Joyas Locales",
      subtitle:
        "A qué hora ir para tener la mejor luz, cómo evitar las horas punta y con qué vino o tapa acompañar cada parada.",
      allCategories: "Todos",
      readSecret: "Ver detalles",
      planRedondo: "El Plan Redondo:",
      pairingTitle: "Cómo completar la visita",
    },
    itinerarySection: {
      timelineTitle: "Hoja de Ruta Paso a Paso",
      routeBadge: "Ruta Recomendada",
      updatedBadge: "Edición de este fin de semana",
      headline: "El recorrido ideal, hora a hora",
      accommodationBadge: "Alojamiento Recomendado",
    },
    feedback: {
      badge: "Tu Opinión",
      anonymous: "Respuesta rápida",
      title: "¿Te han servido estos itinerarios?",
      subtitle:
        "Actualizamos nuestras rutas cada semana según vuestra experiencia en el pueblo.",
      yesBtn: "Sí, muy útil",
      noBtn: "Me ha faltado algo",
      thankYou:
        "¡Gracias! Tu opinión nos ayuda a seguir mejorando la guía cada semana.",
    },
  },
  en: {
    nav: {
      itineraries: "Weekend Plans",
      agenda: "Weekend Agenda",
      gems: "Local Gems",
      feedback: "Traveler Feedback",
      stayBtn: "Stay in Criptana",
    },
    hero: {
      weekendBadge: "Local Guide · Land of Giants",
      sunBadge: "Sunset today: ~7:32 PM at Sierra de los Molinos",
      title: "Experience Campo de Criptana like a local.",
      description:
        "Three weekend itineraries designed step-by-step by locals: when to climb up to the windmills after the tour buses leave, where to order wood-grilled octopus, and which terrace table to book for sunset over the plains.",
      ctaItinerary: "Explore Weekend Plans",
      locationTag: "90 min from Madrid (Direct Train / A-4)",
      curatedTag: "Recommended by locals",
    },
    itinerariesSelector: {
      badge: "Weekend Itineraries",
      title: "3 Curated Weekend Plans",
      subtitle:
        "Pick the plan that matches your trip. Each route gives you an hour-by-hour timeline and direct links to book charming local stays.",
    },
    agendaSection: {
      badge: "Updated every Thursday",
      title: "This Weekend's Local Agenda",
      subtitle:
        "What's happening in town right now: theater, local sports, and the best sunset viewpoints.",
      quickUpdateNotice: "Thursday through Sunday",
      clickToExpand: "Tap to view schedule & details",
      viewDetails: "View schedule & details",
      admissionLabel: "Admission & Tickets",
      pairingLabel: "Recommended Pre/Post Plan",
      closeLabel: "Close",
    },
    gemsSection: {
      badge: "Town Essentials",
      insiderTag: "Local Tips",
      title: "Local Gems",
      subtitle:
        "Exact times for the best golden-hour light, quiet entrances, and which local wine or tapa to pair with each stop.",
      allCategories: "All",
      readSecret: "View details",
      planRedondo: "The Perfect Pairing:",
      pairingTitle: "How to pair this stop",
    },
    itinerarySection: {
      timelineTitle: "Step-by-Step Itinerary",
      routeBadge: "Curated Route",
      updatedBadge: "This weekend's edition",
      headline: "The ideal route, hour by hour",
      accommodationBadge: "Recommended Boutique Stay",
    },
    feedback: {
      badge: "Your Feedback",
      anonymous: "Quick response",
      title: "Did these weekend itineraries help you?",
      subtitle:
        "We update our routes every week based on real traveler experiences.",
      yesBtn: "Yes, very helpful",
      noBtn: "Missing something",
      thankYou:
        "Thank you! Your feedback helps us improve the guide every week.",
    },
  },
}

export const WEEKEND_AGENDA: Record<Language, AgendaEvent[]> = {
  es: [
    {
      id: "teatro-cervantes",
      category: "Cultura & Escena",
      title: "Teatro Cervantes: Temporada Cultural",
      badge: "Artes Escénicas",
      statusBadge: "🎟️ Consulta Funciones en Globalentradas",
      statusType: "cultural",
      subheading: "Teatro, Conciertos y Danza en la Plaza Mayor",
      icon: "🎭",
      description:
        "Programación cultural en el emblemático Teatro Cervantes. El referente de las artes escénicas de Campo de Criptana.",
      synopsis:
        "El histórico Teatro Cervantes de la Plaza Mayor ofrece representaciones teatrales, música en vivo y espectáculos a lo largo de la temporada. Para consultar la obra confirmada de este fin de semana, horarios exactos y venta anticipada de butacas, revisa la cartelera oficial en Globalentradas o en la taquilla municipal.",
      time: "Fines de semana (según cartelera oficial)",
      location: "Teatro Cervantes (Plaza Mayor)",
      admission: "Entradas en taquilla municipal y venta online oficial en Globalentradas",
      insiderTip:
        "Si asistes a una función, llega con antelación para tomar un vino previo en las terrazas de la Plaza Mayor antes de entrar.",
      actionLabel: "Ver Cartelera en Globalentradas",
      actionUrl: "https://www.globalentradas.com",
      pairing: {
        title: "Cena maridaje post-función",
        description:
          "Al salir del teatro, sube 4 minutos en coche a la Sierra de los Molinos para cenar en Las Musas contemplando los molinos iluminados.",
        ctaText: "Ver Mesa en Las Musas",
        ctaUrl: "#joyas-locales",
      },
    },
    {
      id: "baloncesto-criptana",
      category: "Baloncesto Comarcal",
      title: "Club Baloncesto Criptana",
      badge: "Masculino · Femenino · Cantera",
      statusBadge: "🏀 Horarios en Web Oficial CB Criptana",
      statusType: "home",
      subheading: "Partidos de liga en el Pabellón Municipal (desde 1979)",
      icon: "🏀",
      description:
        "Jornadas de baloncesto durante todo el fin de semana: sénior masculino y femenino, júnior y cantera en el Pabellón Municipal.",
      synopsis:
        "Fundado en 1979, el Club Baloncesto Criptana llena de vida el Pabellón Municipal cada fin de semana con partidos de todas las categorías: 1ª Nacional y autonómica masculina y femenina, júnior y escuelas deportivas. La web oficial del club publica semanalmente la cartelera completa con todos los encuentros, pistas y horarios de juego.",
      time: "Sábados y Domingos (consultar cartelera de partidos de la semana)",
      location: "Pabellón Municipal de Deportes (C/ Lope de Vega)",
      admission: "Entrada libre y gratuita hasta completar aforo",
      insiderTip:
        "Para cenar tras el partido, desplázate 4 minutos en coche al Polígono Pozo Hondo: la cafetería de Pádel Galán prepara unas smash burgers espectaculares.",
      actionLabel: "Ver Partidos y Horarios (Web Oficial)",
      actionUrl: "https://clubbaloncestocriptana.com/",
      pairing: {
        title: "Cena informal con smash burger",
        description:
          "Tras el partido, coge el coche (4 min hacia el Polígono Pozo Hondo en Av. Comunidad Valenciana): en Pádel Galán encuentras hamburguesas smash gourmet y cañas frías.",
        ctaText: "Cómo llegar a Pádel Galán (4 min en coche)",
        ctaUrl: "https://maps.google.com/?q=Padel+Galan+Campo+de+Criptana",
      },
    },
    {
      id: "criptanense-futbol",
      category: "Fútbol Regional",
      title: "C.D. Unión Criptanense Tierra de Gigantes",
      badge: "Jornadas Dominicales",
      statusBadge: "⚽ Consulta Horario Oficial en BeSoccer",
      statusType: "home",
      subheading: "Partidos oficiales en el Estadio Agustín de la Fuente",
      icon: "⚽",
      description:
        "El histórico C.D. Unión Criptanense defiende su feudo de césped natural en sus compromisos ligueros dominicales.",
      synopsis:
        "Fundado en 1925, el club compite en el Agustín de la Fuente. En las categorías regionales, la fecha de la jornada está fijada pero la hora exacta del pitido inicial se confirma oficialmente entre 24 y 48 horas antes del partido. Consulta el seguimiento actualizado de la jornada en BeSoccer antes de acudir.",
      time: "Domingos tarde (hora oficial confirmada 24-48h antes en BeSoccer)",
      location: "Campo Municipal Agustín de la Fuente (C/ Antonio Espín)",
      admission: "Entrada en taquilla del estadio los días de partido en casa (socios gratis)",
      insiderTip:
        "El plan clásico de domingo: café y copa en los bares de alrededor del polideportivo antes del pitido inicial.",
      actionLabel: "Ver Calendario y Horas en BeSoccer",
      actionUrl: "https://www.besoccer.es/equipo/partidos/u-criptanense",
      pairing: {
        title: "El aperitivo dominguero previo",
        description:
          "Queda antes en los bares cercanos al complejo deportivo para tomar el aperitivo local y entrar con tiempo a la grada.",
        ctaText: "Cómo llegar al Agustín de la Fuente",
        ctaUrl: "https://maps.google.com/?q=Campo+de+Futbol+Agustin+de+la+Fuente+Campo+de+Criptana",
      },
    },
    {
      id: "atardecer-molinos",
      category: "Patrimonio & Ocaso",
      title: "Puesta de Sol en los Molinos",
      badge: "Todos los días",
      statusBadge: "🌅 Puesta de sol hoy: ~19:32h",
      statusType: "outdoor",
      subheading: "Luz dorada 19:00h - 19:35h · Sierra de los Molinos",
      icon: "🌅",
      description:
        "La hora dorada tiñe de cal blanca y teja árabe la Sierra de los Molinos cuando los gigantes encienden su iluminación nocturna.",
      synopsis:
        "El espectáculo visual definitivo de Campo de Criptana. La puesta de sol astronómica de hoy es sobre las 19:32h. Sube al cerro unos 30 minutos antes para coger sitio en el Murete del Infanto y ver encenderse los focos sobre los molinos.",
      time: "Diario · Ocaso astronómico a las ~19:32h (Llegar hacia las 19:00h)",
      location: "Sierra de los Molinos (Murete del Infanto)",
      admission: "Acceso libre y público",
      insiderTip:
        "Si hace viento, lleva una chaqueta ligera; la brisa de la llanura siempre refresca en lo alto del cerro.",
      actionLabel: "Ver en Joyas Locales",
      actionUrl: "#joyas-locales",
      pairing: {
        title: "Cata de vino local en el mirador",
        description:
          "Pide un vino joven de Bodegas Símbolo en la terraza de la sierra para ver la puesta de sol con copa en mano.",
        ctaText: "Ver Bodegas Símbolo",
        ctaUrl: "#joyas-locales",
      },
    },
  ],
  en: [
    {
      id: "teatro-cervantes",
      category: "Arts & Culture",
      title: "Teatro Cervantes: Cultural Season",
      badge: "Performing Arts",
      statusBadge: "🎟️ Check Official Tickets on Globalentradas",
      statusType: "cultural",
      subheading: "Theater, Concerts & Dance at Plaza Mayor",
      icon: "🎭",
      description:
        "Season stage productions and concerts at the historic Teatro Cervantes right off the Plaza Mayor.",
      synopsis:
        "The municipal theater offers an ongoing calendar of theater, live music, and regional arts festivals. To verify the exact production on stage for this weekend, performance times, and advance ticket sales, check the official ticketing portal on Globalentradas or the town hall box office.",
      time: "Weekends (per official cultural calendar)",
      location: "Teatro Cervantes (Plaza Mayor)",
      admission: "Tickets at municipal box office & advance online sales on Globalentradas",
      insiderTip:
        "If you attend an evening performance, arrive early for a relaxed glass of local wine at the open-air Plaza Mayor cafes.",
      actionLabel: "View Schedule on Globalentradas",
      actionUrl: "https://www.globalentradas.com",
      pairing: {
        title: "Post-theater wine & dining",
        description:
          "Head up 4 minutes by car to Las Musas terrace right after the curtain closes for local tapas and illuminated windmill views.",
        ctaText: "View Las Musas Details",
        ctaUrl: "#joyas-locales",
      },
    },
    {
      id: "baloncesto-criptana",
      category: "Local Basketball",
      title: "Club Baloncesto Criptana",
      badge: "Men's · Women's · Youth",
      statusBadge: "🏀 Game Schedule on Official CB Criptana",
      statusType: "home",
      subheading: "League matches at Municipal Sports Pavilion (Est. 1979)",
      icon: "🏀",
      description:
        "Full weekend of basketball action: senior men's and women's teams, junior leagues, and youth squads at the Municipal Pavilion.",
      synopsis:
        "Founded in 1979, Club Baloncesto Criptana fills the Municipal Pavilion with grassroots basketball all weekend across all divisions: senior men's and women's leagues, juniors, and youth academy squads. The club's official website publishes the full weekly fixture slate, tip-off times, and court assignments.",
      time: "Saturdays & Sundays (check weekly match schedule)",
      location: "Municipal Sports Complex (C/ Lope de Vega)",
      admission: "Free admission to the Municipal Pavilion",
      insiderTip:
        "For dinner after evening games, take a 4-minute drive over to Polígono Pozo Hondo for acclaimed gourmet smash burgers at Pádel Galán.",
      actionLabel: "View Fixtures & Times (Official Site)",
      actionUrl: "https://clubbaloncestocriptana.com/",
      pairing: {
        title: "Casual post-match smash burger dinner",
        description:
          "Take a 4-minute drive to the Pozo Hondo industrial area (Av. Comunidad Valenciana): Pádel Galán serves top-notch smash burgers and cold craft draft beer.",
        ctaText: "Directions to Pádel Galán (4 min drive)",
        ctaUrl: "https://maps.google.com/?q=Padel+Galan+Campo+de+Criptana",
      },
    },
    {
      id: "criptanense-futbol",
      category: "Regional Football",
      title: "C.D. Unión Criptanense Tierra de Gigantes",
      badge: "Sunday Matchdays",
      statusBadge: "⚽ Check Live Kickoff on BeSoccer",
      statusType: "home",
      subheading: "Official matches at Agustín de la Fuente Stadium",
      icon: "⚽",
      description:
        "Historic C.D. Unión Criptanense defends their home natural grass pitch on Sunday matchdays.",
      synopsis:
        "Founded in 1925, the club plays their league matches at Agustín de la Fuente. In regional divisions, fixture dates are set in advance, but exact kickoff times are officially finalized 24 to 48 hours prior to the match. Check BeSoccer's live fixture tracker before heading to the grounds.",
      time: "Sunday afternoons (official kickoff confirmed 24-48h prior on BeSoccer)",
      location: "Agustín de la Fuente Municipal Stadium (C/ Antonio Espín)",
      admission: "Tickets sold at the stadium gates on home matchdays (members free)",
      insiderTip:
        "The local Sunday tradition: coffee and aperitivo at nearby bars before heading to the stands.",
      actionLabel: "View Fixtures & Hours on BeSoccer",
      actionUrl: "https://www.besoccer.es/equipo/partidos/u-criptanense",
      pairing: {
        title: "Pre-match Sunday aperitivo",
        description:
          "Meet up at cafes near the sports complex for vermouth and local tapas before entering the stands.",
        ctaText: "Directions to Stadium",
        ctaUrl: "https://maps.google.com/?q=Campo+de+Futbol+Agustin+de+la+Fuente+Campo+de+Criptana",
      },
    },
    {
      id: "atardecer-molinos",
      category: "Heritage & Sunset",
      title: "Sunset at the Windmills",
      badge: "Every Evening",
      statusBadge: "🌅 Sunset today: ~7:32 PM",
      statusType: "outdoor",
      subheading: "Golden hour 7:00 PM - 7:35 PM · Windmill Hill",
      icon: "🌅",
      description:
        "Golden-hour light washes over the whitewashed 16th-century windmills right as the floodlights turn on over the plains.",
      synopsis:
        "The signature moment of any visit. Today's astronomical sunset is approximately 7:32 PM. Head up to the ridge ~30 minutes prior to claim a spot on the stone wall and watch the illumination turn on.",
      time: "Daily · Astronomical sunset at ~7:32 PM (Arrive ~7:00 PM)",
      location: "Sierra de los Molinos (Stone Wall)",
      admission: "Free and open to the public",
      insiderTip:
        "Bring a light sweater—the plains wind always picks up speed as the sun dips below the horizon.",
      actionLabel: "View in Local Gems",
      actionUrl: "#joyas-locales",
      pairing: {
        title: "Sunset wine toast on the ridge",
        description:
          "Order a glass of chilled Bodegas Símbolo Airén wine on the hilltop terrace to toast the sun dipping beneath the horizon.",
        ctaText: "View Bodegas Símbolo",
        ctaUrl: "#joyas-locales",
      },
    },
  ],
}

export const LOCAL_GEMS: Record<Language, LocalGem[]> = {
  es: [
    {
      id: "spot1",
      name: "Sierra de los Molinos",
      category: "Patrimonio Vivo",
      badge: "Hora Dorada Imprescindible",
      insiderTiming: "45 min antes del atardecer",
      excerpt:
        "Olvida la postal turística de mediodía: sube media hora antes del atardecer, cuando la cal se tiñe de oro viejo y las aspas cortan el silencio de la llanura.",
      fullDescription: [
        "Todo el mundo viene por Cervantes, pero los locales subimos por la luz de última hora. El truco de experto: evita el sol vertical de las doce y aparca detrás del Cerro de la Paz unos 45 minutos antes de la puesta de sol. Camina entre el Burleta, el Infanto y el Sardinero (los tres gigantes del siglo XVI que aún conservan su engranaje original de madera de encina) cuando los autobuses ya se han marchado.",
        "Si consigues entrar cuando el molinero suelta el freno y la piedra empieza a crujir con el viento, entenderás por qué don Quijote vio gigantes.",
      ],
      insiderPairing:
        "El plan redondo: quédate en el murete de piedra viendo cómo se encienden los focos sobre la cal blanca y baja directo a la terraza de Las Musas, situada al pie de los molinos, para un vino Airén bien frío.",
      address: "Sierra de los Molinos, s/n, 13610 Campo de Criptana",
      hours: "Lunes a Domingo: 10:00 - 14:00 & 16:00 - 19:00",
      price: "Acceso Libre",
      image: "/images/attraction_windmills.webp",
      featured: true,
    },
    {
      id: "spot_posito",
      name: "Pósito Real",
      category: "Arquitectura & Vermut",
      badge: "Secreto del Centro",
      insiderTiming: "Sábado a las 12:30h (pre-vermut)",
      excerpt:
        "Un antiguo banco de trigo del siglo XVI reconvertido en el refugio cultural más fotogénico (y fresco) del centro antes de la hora del vermut.",
      fullDescription: [
        "Por fuera parece un palacio renacentista severo con el escudo imperial de Carlos V en piedra, pero en realidad era el «banco de trigo» donde el pueblo guardaba el grano en tiempos de Felipe II. Hoy es el secreto mejor guardado para escapar del calor del mediodía o arrancar la tarde del sábado con calma.",
        "Cómo vivirlo como un local: entra gratis sobre las 12:30h para admirar sus descomunales arcos de piedra y el artesonado de madera noble en silencio absoluto (casi nunca hay colas).",
      ],
      insiderPairing:
        "Cuando salgas por el gran arco de medio punto a la Plaza del Pósito, estás a 2 minutos a pie de la Plaza Mayor para el aperitivo tradicional en las terrazas del casco histórico. Si buscas pulpo a la brasa, camina 10 min hacia La Pulpe (en Calle República Argentina), o desplázate 4 minutos en coche hacia la salida de Pedro Muñoz para comer en Restaurante Mirasol junto a Bodegas Símbolo.",
      address: "Plaza del Pósito, 1, 13610 Campo de Criptana",
      hours: "Mar–Sáb: 11:30 - 14:00 & 18:30 - 21:00 | Dom: 11:30 - 14:00",
      price: "Entrada Gratuita",
      image: "/images/real_posito_real.webp",
      featured: true,
    },
    {
      id: "spot_albaicin",
      name: "Barrio del Albaicín",
      category: "Patrimonio Vivo",
      badge: "Cal y Azul Añil",
      insiderTiming: "18:30h subiendo por Fuente del Caño",
      excerpt:
        "El laberinto histórico de calles empinadas pintadas de blanco cal y zócalos de añil cobalto que trepa hacia los molinos.",
      fullDescription: [
        "No subas a la sierra en coche: hazlo a pie serpenteando por las cuestas empedradas del Albaicín. Cuando el sol empieza a caer, los zócalos pintados en azul añil (cobalto intenso) vibran contra la cal blanca sin un solo coche a la vista.",
      ],
      insiderPairing:
        "Haz una parada a mitad de cuesta en la plazuela del Cerro de la Paz para fotografiar los tejados de teja árabe antes de coronar los molinos.",
      address: "Barrio del Albaicín, 13610 Campo de Criptana",
      hours: "Abierto 24 horas · Paseo peatonal",
      price: "Gratuito",
      image: "/images/real_barrio_albaicin.webp",
    },
    {
      id: "spot7",
      name: "La Pulpe (La Pulpería)",
      category: "Gastronomía",
      badge: "Favorito Local",
      insiderTiming: "13:30h en barra alta",
      excerpt:
        "El punto de encuentro indiscutible de los criptanenses para el aperitivo moderno: pulpo a la brasa, marisco fresco y D.O. La Mancha por copas.",
      fullDescription: [
        "Quién diría que en mitad de la llanura manchega encontrarías uno de los mejores pulpos a la brasa de la provincia. Ambiente vibrante de fin de semana, tostas creativas y producto de lonja que vuela.",
      ],
      insiderPairing:
        "Pide la pata de pulpo a la brasa sobre parmentier y marídala con un blanco Airén fermentado en barrica de una bodega local.",
      address: "Calle República Argentina, 9, 13610 Campo de Criptana",
      hours: "Martes a Domingo: 12:30 - 16:00 & 20:00 - 23:30",
      price: "Tapeo Gourmet €€",
      image: "/images/real_lapulpe.webp",
    },
    {
      id: "spot_las_musas",
      name: "Restaurante Las Musas",
      category: "Gastronomía",
      badge: "Atardecer & Mesa de Vanguardia",
      insiderTiming: "20:45h (reserva en terraza panorámica)",
      excerpt:
        "El restaurante de referencia sobre la colina de los molinos: cocina manchega contemporánea, cócteles y la panorámica más codiciada.",
      fullDescription: [
        "Las Musas es el restaurante imprescindible para cenar contemplando cómo cae la noche sobre la llanura. Famoso por su terraza con vistas directas a los gigantes de viento iluminados, su carta reinterpreta con elegancia el recetario de la comarca.",
      ],
      insiderPairing:
        "Reserva con antelación en su terraza alta: arranca con su milhoja de foie y queso manchego maridada con un blanco local bien fresco.",
      address: "Subida a la Sierra de los Molinos, 13610 Campo de Criptana",
      hours: "Miércoles a Domingo: 13:00 - 16:30 & 20:30 - 00:00",
      price: "Cocina de Autor €€€",
      image: "/images/real_las_musas.webp",
    },
    {
      id: "spot_simbolo",
      name: "Bodegas Símbolo (Cooperativa Ntra. Sra. de Criptana)",
      category: "Bodegas & Vino",
      badge: "Icono Vitivinícola",
      insiderTiming: "Sábado mañana (Despacho de vinos abierto)",
      excerpt:
        "El templo del vino cooperativo criptanense. Pásate por su clásico despacho de vinos y tienda gourmet para catar el auténtico Airén y Tempranillo local.",
      fullDescription: [
        "Fundada en 1954, Bodegas Símbolo representa el alma del campo de Criptana. Su emblemática fachada blanca y zócalo granate alberga el Despacho de Vinos oficial y Tienda Gourmet, donde locales y viajeros cargan cajas de su galardonado Símbolo Airén y tintos de crianza directos de la prensa.",
        "Un trato directo, sin artificios y con los precios más honestos de toda la comarca vinícola.",
      ],
      insiderPairing:
        "Entra al despacho de vinos antes de comer para probar el Símbolo Airén Selección y llévate unas botellas para acompañar el tapeo del fin de semana.",
      address: "Calle Concepción, 135, 13610 Campo de Criptana (Despacho de Vinos)",
      hours: "Lunes a Sábado: 09:30 - 13:30 & 16:30 - 19:30",
      price: "Vinos D.O. desde 4€ / botella",
      image: "/images/bodegas_simbolo.png",
      featured: true,
    },
  ],
  en: [
    {
      id: "spot1",
      name: "Sierra de los Molinos (Windmills)",
      category: "Patrimonio Vivo",
      badge: "Essential Golden Hour",
      insiderTiming: "45 min before sunset",
      excerpt:
        "Skip the midday tourist postcard: head up 30 minutes before sunset when the whitewashed walls turn burnished gold and the sails cut through the silent plains.",
      fullDescription: [
        "Everyone comes for Cervantes, but locals climb the ridge for the golden-hour light. The insider move: avoid the harsh noon glare and park behind Cerro de la Paz about 45 minutes before sundown. Wander between Burleta, Infanto, and Sardinero—the three 16th-century giants that still house their original holm-oak gearboxes—once the tour buses have cleared out.",
        "If you step inside just as the miller releases the brake and the massive millstone begins to groan against the wind, you will immediately understand why Don Quixote saw giants.",
      ],
      insiderPairing:
        "The perfect pairing: grab a spot on the low stone wall as the floodlights flicker onto the white lime, then stroll right down to the outdoor terrace at Las Musas for a chilled glass of local Airén white wine.",
      address: "Sierra de los Molinos, s/n, 13610 Campo de Criptana",
      hours: "Monday to Sunday: 10:00 AM - 2:00 PM & 4:00 PM - 7:00 PM",
      price: "Free Access",
      image: "/images/attraction_windmills.webp",
      featured: true,
    },
    {
      id: "spot_posito",
      name: "Pósito Real (Royal Granary)",
      category: "Arquitectura & Vermut",
      badge: "Downtown Secret",
      insiderTiming: "Saturday at 12:30 PM (pre-vermouth)",
      excerpt:
        "A 16th-century royal wheat bank turned into the coolest, most photogenic cultural hideout in town right before vermouth hour.",
      fullDescription: [
        "From the outside, it looks like an austere Renaissance palace crowned by the stone Imperial Coat of Arms of Charles V, but it actually served as the town's communal wheat bank under King Philip II. Today, its thick stone walls make it the best-kept secret for escaping the midday heat.",
        "How to do it like a local: duck in for free around 12:30 PM to take in the soaring stone arches and antique timber beams in total quiet (there is almost never a line).",
      ],
      insiderPairing:
        "When you step back out through the grand archway onto Plaza del Pósito, you are just a 2-minute stroll from Plaza Mayor for a classic local vermouth in the historic center. For grilled octopus, walk 10 minutes to La Pulpe (Calle República Argentina), or take a 4-minute drive toward the Pedro Muñoz exit to dine at Restaurante Mirasol next to Bodegas Símbolo.",
      address: "Plaza del Pósito, 1, 13610 Campo de Criptana",
      hours: "Tue–Sat: 11:30 AM - 2:00 PM & 6:30 PM - 9:00 PM | Sun: 11:30 AM - 2:00 PM",
      price: "Free Entry",
      image: "/images/real_posito_real.webp",
      featured: true,
    },
    {
      id: "spot_albaicin",
      name: "Albaicín Quarter",
      category: "Patrimonio Vivo",
      badge: "Cobalt & Whitewash",
      insiderTiming: "6:30 PM climbing up Fuente del Caño",
      excerpt:
        "The historic labyrinth of steep cobblestone steps and vibrant cobalt indigo baseboards winding up toward the windmills.",
      fullDescription: [
        "Never drive up to the windmill ridge: walk up through the quiet slopes of the Albaicín instead. As the sun sinks, the cobalt-indigo borders set against chalk-white walls create an unforgettable Mediterranean-Castilian panorama without a single car.",
      ],
      insiderPairing:
        "Pause halfway up at the Cerro de la Paz lookout to photograph the terracotta rooftops before reaching the windmills.",
      address: "Albaicín Quarter, 13610 Campo de Criptana",
      hours: "Open 24 hours · Pedestrian trail",
      price: "Free",
      image: "/images/real_barrio_albaicin.webp",
    },
    {
      id: "spot7",
      name: "La Pulpe (Seafood & Tapas)",
      category: "Gastronomía",
      badge: "Local Favorite",
      insiderTiming: "1:30 PM at the high bar tables",
      excerpt:
        "The town's undisputed weekend gathering point: wood-grilled octopus, fresh coastal seafood, and crisp D.O. La Mancha whites by the glass.",
      fullDescription: [
        "Few expect to find exceptional Galician-style grilled octopus in the middle of La Mancha, but La Pulpe nails it with vibrant weekend energy and high-grade seasonal seafood.",
      ],
      insiderPairing:
        "Order the grilled octopus over potato cream paired with an oak-aged local Airén white wine.",
      address: "Calle República Argentina, 9, 13610 Campo de Criptana",
      hours: "Tuesday to Sunday: 12:30 PM - 4:00 PM & 8:00 PM - 11:30 PM",
      price: "Gourmet Tapas €€",
      image: "/images/real_lapulpe.webp",
    },
    {
      id: "spot_las_musas",
      name: "Las Musas Restaurant",
      category: "Gastronomía",
      badge: "Sunset Dining Landmark",
      insiderTiming: "8:45 PM (reserve a panoramic terrace table)",
      excerpt:
        "The quintessential windmill-ridge dining destination: elevated Manchego gastronomy, craft cocktails, and the most coveted sunset view in town.",
      fullDescription: [
        "Las Musas is Criptana's premier hilltop restaurant for relaxed dinners watching the sunset fade over the endless horizon. Known for its open-air terrace facing the illuminated windmill sails, the kitchen crafts contemporary takes on regional heritage dishes.",
      ],
      insiderPairing:
        "Book well ahead for the upper outdoor terrace: start with their Manchego cheese and foie mille-feuille paired with a chilled local white.",
      address: "Subida a la Sierra de los Molinos, 13610 Campo de Criptana",
      hours: "Wednesday to Sunday: 1:00 PM - 4:30 PM & 8:30 PM - 12:00 AM",
      price: "Signature Dining €€€",
      image: "/images/real_las_musas.webp",
    },
    {
      id: "spot_simbolo",
      name: "Bodegas Símbolo (Criptana Winery & Cellar Door)",
      category: "Bodegas & Vino",
      badge: "Wine Heritage Pillar",
      insiderTiming: "Saturday morning (Cellar door open)",
      excerpt:
        "The historic cooperative winery of Campo de Criptana. Stop by the traditional cellar door and gourmet shop to taste genuine Airén and Tempranillo wines.",
      fullDescription: [
        "Founded in 1954, Bodegas Símbolo represents the winemaking heart of Campo de Criptana. Its iconic white facade with garnet plinths houses the official cellar door (Despacho de Vinos) and gourmet store, where locals pick up award-winning Símbolo Airén and barrel-aged reds straight from the winery.",
        "Honest, authentic, and offered at cellar-door direct prices.",
      ],
      insiderPairing:
        "Drop by the cellar door before lunch to sample the award-winning Símbolo Airén Selección and take a couple of bottles for your weekend tapas.",
      address: "Calle Concepción, 135, 13610 Campo de Criptana (Wine Shop)",
      hours: "Monday to Saturday: 9:30 AM - 1:30 PM & 4:30 PM - 7:30 PM",
      price: "D.O. Wines from 4€ / bottle",
      image: "/images/bodegas_simbolo.png",
      featured: true,
    },
  ],
}

export const ALL_ITINERARIES: Record<Language, CuratedItinerary[]> = {
  es: [
    {
      id: "el-fin-de-semana-hedonista",
      title: "El Fin de Semana Hedonista",
      subtitle:
        "Vino de Bodegas Símbolo, mesa con vistas en Las Musas y el mejor atardecer de La Mancha",
      badge: "Itinerario 1 · Parejas & Enoturismo",
      duration: "Sábado & Domingo (48 Horas)",
      vibe: "Enoturismo · Gastronomía & Paisaje",
      heroImage: "/images/attraction_windmills.webp",
      editorialIntro:
        "Diseñado para que no tengas que abrir diez pestañas ni configurar rutas. Llegas el sábado a media mañana, aparcas el coche y sigues el ritmo exacto de los locales: arquitectura fresca a mediodía, barra de altura a la hora del vermut, molinos dorados al caer el sol y mesa reservada en Las Musas.",
      stops: [
        {
          time: "SÁB · 12:15h",
          period: "Mañana Renacentista",
          title: "Refugio de piedra y silencio antes del bullicio",
          spotName: "Pósito Real",
          insiderNote:
            "Entra gratis al antiguo banco de trigo de Felipe II cuando aún no hay nadie. Cruza sus arcos de piedra y sal directo por la Plaza del Pósito hacia la zona de vinos.",
          highlightTag: "Cultura sin colas",
        },
        {
          time: "SÁB · 13:45h",
          period: "La Hora del Aperitivo",
          title: "Pulpo a la brasa y despacho de Bodegas Símbolo",
          spotName: "La Pulpe & Bodegas Símbolo",
          insiderNote:
            "Pide mesa alta en La Pulpe (C/ República Argentina) para su pulpo a la brasa y acércate después en coche o paseo al despacho de Bodegas Símbolo (C/ Concepción) para probar su Airén Selección.",
          highlightTag: "Favorito local",
        },
        {
          time: "SÁB · 18:45h",
          period: "Golden Hour Mágica",
          title: "Subida por el Albaicín y los 3 gigantes del siglo XVI",
          spotName: "Sierra de los Molinos (Burleta, Infanto y Sardinero)",
          insiderNote:
            "Sube a pie entre los zócalos azul añil del Albaicín 45 minutos antes del ocaso. Verás cómo la cal blanca se tiñe de oro viejo cuando los autobuses ya se han ido.",
          highlightTag: "La foto perfecta",
        },
        {
          time: "SÁB · 21:00h",
          period: "Cena & Relax Boutique",
          title: "Mesa con vistas en Las Musas y descanso con encanto",
          spotName: "Restaurante Las Musas & Hotel Boutique Casa Treviño",
          insiderNote:
            "Baja desde el murete de los molinos directamente a la terraza de Las Musas para cenar contemplando las aspas iluminadas, y termina la noche en Hotel Boutique Casa Treviño.",
          highlightTag: "Experiencia única",
        },
      ],
      monetization: {
        ctaLabel: "Ver Disponibilidad en Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.es.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-hedonista-weekend",
        recommendedStay: "Hotel Boutique Casa Treviño & Alojamientos con Encanto",
        stayHighlight:
          "Alojamiento boutique en el centro histórico · Revisa las condiciones de cancelación al reservar",
        priceHint: "Consulta la disponibilidad de este fin de semana",
      },
    },
    {
      id: "clasicos-sin-turistas",
      title: "Clásicos sin Turistas (Plan 24 Horas)",
      subtitle:
        "El secreto para ver los molinos en soledad, tapear como un local y dormir en el centro histórico",
      badge: "Itinerario 2 · Primera Vez en Criptana",
      duration: "Sábado a Domingo (24 Horas)",
      vibe: "Fotografía · Historia Viva & Tapas",
      heroImage: "/images/real_barrio_albaicin.webp",
      editorialIntro:
        "La mayoría de viajeros llega en excursiones exprés y se pierde la verdadera magia de la villa. Este itinerario invierte los horarios del turismo de masas: mañanas de arquitectura tranquila, vermut con vecinos y amanecer en la sierra.",
      stops: [
        {
          time: "SÁB · 11:30h",
          period: "Casas Excavadas",
          title: "La vida subterránea en el Cerro de la Paz",
          spotName: "Casa-Cueva de la Pastora Marcela",
          insiderNote:
            "Conoce cómo las familias campesinas excavaban sus hogares a mano en la roca caliza manteniendo 18 °C todo el año.",
          highlightTag: "Patrimonio troglodita",
        },
        {
          time: "SÁB · 13:30h",
          period: "Cocina Manchega Tradicional",
          title: "Platos típicos manchegos y comida casera",
          spotName: "Restaurante Mirasol",
          insiderNote:
            "Desplázate 4 min en coche hacia la salida de Pedro Muñoz (Calle Concepción, junto a la gasolinera Repsol): pide berenjenas de Almagro y guisos tradicionales en este mítico restaurante de acceso a la villa.",
          highlightTag: "Tradición manchega",
        },
        {
          time: "SÁB · 19:15h",
          period: "Muro Silencioso",
          title: "El espectáculo del Infanto sin aglomeraciones",
          spotName: "Molino Infanto & Cerro de la Paz",
          insiderNote:
            "A esta hora los grupos organizados han salido hacia la autovía. El cerro queda en silencio absoluto con vistas infinitas.",
          highlightTag: "Silencio manchego",
        },
        {
          time: "SÁB · 21:30h",
          period: "Cena Casual & Burgers",
          title: "Smash burgers gourmet y cañas frías",
          spotName: "Pádel Galán (Polígono Pozo Hondo)",
          insiderNote:
            "Coge el coche 4 minutos hacia el Polígono Industrial Pozo Hondo: la cafetería de Pádel Galán es el secreto a voces local para una cena informal con hamburguesas smash espectaculares.",
          highlightTag: "Cena informal (en coche)",
        },
      ],
      monetization: {
        ctaLabel: "Reservar Noche Céntrica en Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.es.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-clasicos-weekend",
        recommendedStay: "Alojamientos Céntricos y Apartamentos Turísticos",
        stayHighlight:
          "Cerca de la Plaza Mayor y de las calles encaladas del centro",
        priceHint: "Ideal para escapadas de última hora",
      },
    },
    {
      id: "escapada-en-familia",
      title: "Escapada en Familia o Grupo",
      subtitle:
        "Gigantes de viento interactivos, casas rurales con patio y comida manchega a compartir",
      badge: "Itinerario 3 · Grupos & Familias",
      duration: "Fin de Semana Completo (Viernes a Domingo)",
      vibe: "Niños · Casas Rurales & Tradición",
      heroImage: "/images/real_ci_molinos.webp",
      editorialIntro:
        "Pensado para grupos y familias que buscan espacio, desconexión y planes donde grandes y pequeños disfrutan por igual. Descubre la física de los molinos de viento, pasea por humedales protegidos y comparte una mesa con asados a la leña.",
      stops: [
        {
          time: "SÁB · 11:00h",
          period: "Ingeniería Renacentista",
          title: "Maquetas interactivas y secretos mecánicos",
          spotName: "Centro de Interpretación del Molino de Viento",
          insiderNote:
            "Los niños descubren con simulaciones 3D cómo los engranajes de madera mueven piedras de 3.000 kg gracias al viento.",
          highlightTag: "Didáctico y visual",
        },
        {
          time: "SÁB · 13:45h",
          period: "Comida en Grupo",
          title: "Gachas, migas y cordero para compartir",
          spotName: "Mesones y Terrazas de Criptana",
          insiderNote:
            "Mesas amplias, raciones generosas para el centro y platos de cuchara que gustan a todas las edades.",
          highlightTag: "Brasas & Mesa larga",
        },
        {
          time: "SÁB · 17:30h",
          period: "Naturaleza & Aves",
          title: "Paseo ornitológico junto a la laguna salina",
          spotName: "Reserva Natural Laguna de Salicor",
          insiderNote:
            "A pocos minutos del casco urbano, un humedal estepario protegido para avistar flamencos y aves migratorias en libertad.",
          highlightTag: "Reserva de la Biosfera",
        },
        {
          time: "DOM · 11:30h",
          period: "Dulces Típicos",
          title: "Tortas en sartén y repostería artesana",
          spotName: "Hornos Tradicionales de Criptana",
          insiderNote:
            "Pásate antes de volver a casa por los obradores del pueblo para llevarte mantecados y dulces típicos recién horneados.",
          highlightTag: "Sabor de recuerdo",
        },
      ],
      monetization: {
        ctaLabel: "Buscar Casas Rurales para Grupos en Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.es.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-familia-weekend&group_adults=4",
        recommendedStay: "Casas Rurales con Patio y Capacidad Familiar",
        stayHighlight:
          "Casas rurales completas para grupos en la comarca de Criptana",
        priceHint: "Ideales para escapadas en grupo",
      },
    },
  ],
  en: [
    {
      id: "the-hedonist-weekend",
      title: "The Hedonist Weekend",
      subtitle:
        "Bodegas Símbolo wines, sunset dining at Las Musas, and golden-hour windmills",
      badge: "Itinerary 1 · Couples & Wine Lovers",
      duration: "Saturday & Sunday (48 Hours)",
      vibe: "Wine Culture · Dining & Views",
      heroImage: "/images/attraction_windmills.webp",
      editorialIntro:
        "Engineered so you never have to open ten tabs or configure complex apps. Arrive Saturday morning, park your car, and embrace the genuine local rhythm: cool Renaissance architecture before noon, lively aperitivo bars, sunset atop the ridge, and a reserved terrace table at Las Musas.",
      stops: [
        {
          time: "SAT · 12:15 PM",
          period: "Renaissance Morning",
          title: "Stone refuge and quiet history before the lunch rush",
          spotName: "Pósito Real (Royal Granary)",
          insiderNote:
            "Step into Philip II's ancient wheat bank with zero lines. Admire the soaring stone arches before walking straight out to Plaza del Pósito for aperitivo hour.",
          highlightTag: "Zero crowds",
        },
        {
          time: "SAT · 1:45 PM",
          period: "The Vermouth Hour",
          title: "Grilled octopus and wine cellar door tasting",
          spotName: "La Pulpe & Bodegas Símbolo",
          insiderNote:
            "Grab high-top tables at La Pulpe (Calle República Argentina) for wood-grilled octopus, then take a quick drive to Calle Concepción to visit Bodegas Símbolo's winery shop for award-winning Airén white wines.",
          highlightTag: "Local favorite",
        },
        {
          time: "SAT · 6:45 PM",
          period: "Magical Golden Hour",
          title: "Walk through the Albaicín to the 16th-century giants",
          spotName: "Sierra de los Molinos (Burleta, Infanto & Sardinero)",
          insiderNote:
            "Climb through the whitewashed and cobalt blue streets 45 minutes before sundown. The walls turn burnished gold just as the tour buses depart.",
          highlightTag: "The postcard view",
        },
        {
          time: "SAT · 9:00 PM",
          period: "Sunset Dining & Boutique Rest",
          title: "Hilltop dining at Las Musas and a boutique stay",
          spotName: "Las Musas Restaurant & Casa Treviño Boutique Hotel",
          insiderNote:
            "Walk right down from the windmill viewpoint onto Las Musas' panoramic terrace for modern Manchego dining under illuminated sails, followed by a boutique hotel stay.",
          highlightTag: "Unmatched evening",
        },
      ],
      monetization: {
        ctaLabel: "Check Availability on Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.en.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-hedonista-weekend-en",
        recommendedStay: "Casa Treviño Boutique Hotel & Charming Stays",
        stayHighlight:
          "Boutique stay in the historic center · Check cancellation terms when booking",
        priceHint: "Check availability for this weekend",
      },
    },
    {
      id: "classics-without-crowds",
      title: "Classics Without Crowds (24h Plan)",
      subtitle:
        "The insider blueprint to see the windmills in peaceful solitude and dine where locals eat",
      badge: "Itinerary 2 · First Timers & Day Trippers",
      duration: "Saturday to Sunday (24 Hours)",
      vibe: "Photography · Living History & Tapas",
      heroImage: "/images/real_barrio_albaicin.webp",
      editorialIntro:
        "Tour buses rush in at peak hours and leave right before the town reveals its quiet Mediterranean-Castilian soul. This itinerary flips the script: quiet morning architecture, tapas alongside residents, and silent evening walks.",
      stops: [
        {
          time: "SAT · 11:30 AM",
          period: "Subterranean Life",
          title: "Living in the cliffside rock at Cerro de la Paz",
          spotName: "Pastora Marcela Cave House",
          insiderNote:
            "Discover how 19th-century shepherd families hand-carved living quarters out of limestone, naturally locked at 18 °C year-round.",
          highlightTag: "Troglodyte heritage",
        },
        {
          time: "SAT · 1:30 PM",
          period: "Traditional Manchego Cooking",
          title: "Hearty Manchego recipes and roadside comfort food",
          spotName: "Restaurante Mirasol",
          insiderNote:
            "Take a 4-minute drive toward the Pedro Muñoz exit (Calle Concepción, next to the Repsol station): order marinated Almagro eggplants and traditional Manchego dishes at this historic roadside dining landmark.",
          highlightTag: "Manchego tradition (drive)",
        },
        {
          time: "SAT · 7:15 PM",
          period: "Silent Ridge",
          title: "Watching the Infanto windmill once tour buses depart",
          spotName: "Infanto Windmill & Cerro Lookout",
          insiderNote:
            "At this hour, the tourist groups have left for the highway. The ridge is peaceful, with 360-degree views across La Mancha.",
          highlightTag: "Pure tranquility",
        },
        {
          time: "SAT · 9:30 PM",
          period: "Casual Dining & Beers",
          title: "Locally famous smash burgers",
          spotName: "Pádel Galán (Pozo Hondo Park)",
          insiderNote:
            "Take a 4-minute drive over to the Pozo Hondo industrial area: the cafe at Pádel Galán is the local open secret for top-tier gourmet smash burgers.",
          highlightTag: "Casual dining (drive)",
        },
      ],
      monetization: {
        ctaLabel: "Book Historical Center Stays on Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.en.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-clasicos-weekend-en",
        recommendedStay: "Town Center Boutique Apartments & Hotels",
        stayHighlight:
          "Close to Plaza Mayor and the whitewashed streets of the old town",
        priceHint: "Great for last-minute getaways",
      },
    },
    {
      id: "family-and-friends-getaway",
      title: "Family & Friends Countryside Escape",
      subtitle:
        "Hands-on windmill physics, spacious rural holiday homes, and hearty wood-fired food",
      badge: "Itinerary 3 · Families & Small Groups",
      duration: "Full Weekend (Friday to Sunday)",
      vibe: "Kids · Rural Houses & Heritage",
      heroImage: "/images/real_ci_molinos.webp",
      editorialIntro:
        "Designed for groups and traveling families who want relaxed space, fresh air, and activities that captivate both children and adults. Unravel the mechanical physics of Cervantes' windmills, spot flamingos at a protected wetland, and share generous countryside lunches.",
      stops: [
        {
          time: "SAT · 11:00 AM",
          period: "Renaissance Engineering",
          title: "Interactive scale models and gear mechanics",
          spotName: "Windmill Interpretation Center",
          insiderNote:
            "Kids and adults explore 3D displays showing how timber gears convert wind power into stone friction to grind wheat into flour.",
          highlightTag: "Interactive & visual",
        },
        {
          time: "SAT · 1:45 PM",
          period: "Group Feast",
          title: "Generous regional sharing platters",
          spotName: "Traditional Criptana Taverns",
          insiderNote:
            "Spacious tables, hearty Manchego migas, and roasted lamb plates designed for lingering family meals.",
          highlightTag: "Wood-fired comfort",
        },
        {
          time: "SAT · 5:30 PM",
          period: "Nature & Birdwatching",
          title: "Flamingo sightings at a protected saline wetland",
          spotName: "Salicor Lagoon Nature Reserve",
          insiderNote:
            "A short drive from the town center lies a protected steppe lagoon where flamingos and migratory birds feed in peace.",
          highlightTag: "Biosphere Reserve",
        },
        {
          time: "SUN · 11:30 AM",
          period: "Artisanal Pastries",
          title: "Traditional bakery specialties before heading home",
          spotName: "Heritage Bakeries of Criptana",
          insiderNote:
            "Stop by local family-owned bakeries for warm *tortas en sartén* and traditional almond pastries to bring home.",
          highlightTag: "Authentic souvenir",
        },
      ],
      monetization: {
        ctaLabel: "Find Family Rural Houses on Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.en.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-familia-weekend-en&group_adults=4",
        recommendedStay: "Country Houses with Private Patios & Group Capacity",
        stayHighlight:
          "Entire rural houses for groups in the Criptana countryside",
        priceHint: "Ideal for family and group bookings",
      },
    },
  ],
}
