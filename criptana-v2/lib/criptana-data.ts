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
  category: string
  title: string
  badge: string
  icon: string
  description: string
  time: string
  location: string
  insiderTip: string
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
    rule1Badge: string
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
      itineraries: "3 Fines de Semana",
      agenda: "Agenda del Finde",
      gems: "Joyas Locales",
      feedback: "Opinión Viajera",
      stayBtn: "Dormir en Criptana",
    },
    hero: {
      weekendBadge: "Edición Fin de Semana · Tierra de Gigantes",
      sunBadge: "Mejor luz hoy: 19:45h en Sierra de los Molinos",
      title: "Campo de Criptana sin trampas para turistas.",
      description:
        "Hemos eliminado los buscadores interminables y los planificadores complejos. Aquí tienes nuestras 3 rutas de fin de semana cerradas y los secretos reales de los locales: a qué hora subir a los molinos cuando se van los autobuses, dónde pedir el mejor pulpo a la brasa y qué mesa reservar con vistas a la sierra.",
      ctaItinerary: "Ver Itinerarios Cerrados",
      locationTag: "A 90 min de Madrid (Tren / A-4)",
      curatedTag: "Curado por locales",
    },
    itinerariesSelector: {
      badge: "Rule 1 · Cero Decisiones",
      title: "3 Fines de Semana Perfectos (Sin Pensar)",
      subtitle:
        "Elige el plan que mejor encaje con tu escapada. Cada ruta incluye el paso a paso exacto y enlaces directos para reservar alojamiento y mesa.",
    },
    agendaSection: {
      badge: "Actualizado cada jueves",
      title: "Agenda del Fin de Semana",
      subtitle:
        "Lo que pasa en el pueblo estos días: teatro, baloncesto comarcal y los mejores puntos de encuentro.",
      quickUpdateNotice: "Edición Jueves a Domingo",
    },
    gemsSection: {
      badge: "Selección Editorial · Cero Relleno",
      insiderTag: "Voz Insider (Rule 2)",
      title: "Joyas Locales",
      subtitle:
        "Nada de fechas de Wikipedia ni folletos municipales. A qué hora ir para tener la mejor luz, por qué puerta entrar sin colas y con qué vino o tapa empalmar cada parada.",
      allCategories: "Todos",
      readSecret: "Leer secreto",
      planRedondo: "El Plan Redondo (Tip Local):",
      pairingTitle: "Cómo empalmar la parada (Insider Pairing)",
    },
    itinerarySection: {
      timelineTitle: "Hoja de Ruta Curada Minuto a Minuto",
      rule1Badge: "Rule 1 · Sin Planificadores Complejos",
      updatedBadge: "Actualizado para este fin de semana",
      headline: "Curado minuto a minuto, cero incertidumbre",
      accommodationBadge: "Alojamiento Recomendado",
    },
    feedback: {
      badge: "Feedback de Viajeros",
      anonymous: "1 clic · Anónimo",
      title: "¿Te han servido estos itinerarios?",
      subtitle:
        "Ajustamos nuestras rutas cada jueves según lo que realmente os funciona sobre el terreno.",
      yesBtn: "Sí, plan cerrado",
      noBtn: "Me faltó algo",
      thankYou:
        "¡Gracias! Tu respuesta se ha registrado en nuestro panel editorial.",
    },
  },
  en: {
    nav: {
      itineraries: "3 Weekend Plans",
      agenda: "Weekend Agenda",
      gems: "Local Gems",
      feedback: "Traveler Reviews",
      stayBtn: "Stay in Criptana",
    },
    hero: {
      weekendBadge: "Weekend Edition · Land of Giants",
      sunBadge: "Best golden-hour light today: 7:45 PM at the Windmills",
      title: "Campo de Criptana without the tourist traps.",
      description:
        "No endless search matrices or complicated planners. Here are our 3 signature turnkey weekend plans and genuine local knowledge: when to visit the windmills after tour buses leave, where to get grilled octopus, and which table to book for sunset over the plains.",
      ctaItinerary: "View Weekend Plans",
      locationTag: "90 min from Madrid (Direct Train / A-4)",
      curatedTag: "Curated by locals",
    },
    itinerariesSelector: {
      badge: "Rule 1 · Zero Guesswork",
      title: "3 Perfect Weekends (Zero Stress)",
      subtitle:
        "Pick the vibe that matches your getaway. Each route gives you the exact timeline and direct links to book verified boutique stays.",
    },
    agendaSection: {
      badge: "Updated every Thursday",
      title: "This Weekend's Local Agenda",
      subtitle:
        "What's happening in town right now: theater, local sports, and the best sunset viewpoints.",
      quickUpdateNotice: "Thursday through Sunday Edition",
    },
    gemsSection: {
      badge: "Editorial Curation · No Fluff",
      insiderTag: "Insider Voice (Rule 2)",
      title: "Local Gems",
      subtitle:
        "No dry Wikipedia dates or tourist board brochures. Exact times for the best golden light, uncrowded entrances, and which wine or tapa to pair with each stop.",
      allCategories: "All",
      readSecret: "Read insider tip",
      planRedondo: "The Perfect Pairing (Local Tip):",
      pairingTitle: "How to connect this stop (Insider Pairing)",
    },
    itinerarySection: {
      timelineTitle: "Curated Minute-by-Minute Roadmap",
      rule1Badge: "Rule 1 · Zero Cognitive Load",
      updatedBadge: "Updated for this weekend",
      headline: "Minute-by-minute curated flow, zero guesswork",
      accommodationBadge: "Recommended Boutique Stay",
    },
    feedback: {
      badge: "Traveler Feedback",
      anonymous: "1 click · Anonymous",
      title: "Did these weekend itineraries help you?",
      subtitle:
        "We refine our routes every Thursday based on what actually works on the ground.",
      yesBtn: "Yes, trip planned!",
      noBtn: "Missing something",
      thankYou:
        "Thank you! Your feedback has been logged in our editorial dashboard.",
    },
  },
}

export const WEEKEND_AGENDA: Record<Language, AgendaEvent[]> = {
  es: [
    {
      category: "Cultura & Escena",
      title: "Teatro Cervantes: Temporada Cultural",
      badge: "Imprescindible",
      icon: "🎭",
      description:
        "Representación teatral y música en vivo en el emblemático Teatro Cervantes. El punto de encuentro de las noches de sábado.",
      time: "Sábado · 20:00h",
      location: "Teatro Cervantes (Plaza Mayor)",
      insiderTip:
        "Llega 20 minutos antes para tomar un vino rápido en las terrazas de la Plaza Mayor antes de entrar.",
    },
    {
      category: "Deporte Local",
      title: "Baloncesto Comarcal en Casa",
      badge: "Ambiente Local",
      icon: "🏀",
      description:
        "Partido oficial de liga en el Pabellón Municipal. Gran ambiente de grada con familias y aficionados locales.",
      time: "Sábado · 18:30h",
      location: "Pabellón Municipal de Deportes",
      insiderTip:
        "Al salir, cruza hacia Padel Galán para probar sus aclamadas smash burgers informales.",
    },
    {
      category: "Patrimonio & Ocaso",
      title: "El Mejor Atardecer desde los Molinos",
      badge: "Puesta de Sol",
      icon: "🌅",
      description:
        "La hora dorada tiñe de cal blanca y teja árabe la Sierra de los Molinos cuando los gigantes encienden su iluminación nocturna.",
      time: "Sábado & Domingo · 19:45h",
      location: "Sierra de los Molinos (Murete del Infanto)",
      insiderTip:
        "Si hace viento, lleva una chaqueta ligera; la brisa de la llanura siempre refresca en lo alto del cerro.",
    },
  ],
  en: [
    {
      category: "Arts & Culture",
      title: "Teatro Cervantes: Stage Season",
      badge: "Must-See",
      icon: "🎭",
      description:
        "Live stage plays and regional music concerts in the historic Teatro Cervantes right off the Plaza Mayor.",
      time: "Saturday · 8:00 PM",
      location: "Teatro Cervantes (Plaza Mayor)",
      insiderTip:
        "Arrive 20 minutes early for a quick glass of local wine at the open-air Plaza Mayor cafes.",
    },
    {
      category: "Local Sports",
      title: "Home League Basketball Match",
      badge: "Local Spirit",
      icon: "🏀",
      description:
        "Lively regional league basketball game at the Municipal Sports Pavilion with energetic local crowd support.",
      time: "Saturday · 6:30 PM",
      location: "Municipal Sports Complex",
      insiderTip:
        "Head straight to Pádel Galán after the final buzzer for surprisingly great smash burgers.",
    },
    {
      category: "Heritage & Sunset",
      title: "The Signature Golden Hour Sunset",
      badge: "Sunset Postcard",
      icon: "🌅",
      description:
        "Golden-hour light washes over the whitewashed 16th-century windmills right as the floodlights turn on over the plains.",
      time: "Saturday & Sunday · 7:45 PM",
      location: "Sierra de los Molinos (Stone Wall)",
      insiderTip:
        "Bring a light sweater—the plains wind always picks up speed as the sun dips below the horizon.",
    },
  ],
}

export const LOCAL_GEMS: Record<Language, LocalGem[]> = {
  es: [
    {
      id: "spot1",
      name: "Sierra de los Molinos",
      category: "Patrimonio Vivo",
      badge: "Golden Hour Imprescindible",
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
        "Cuando salgas por el gran arco de medio punto a la Plaza del Pósito, estás a tres minutos a pie de las mejores barras del centro para empalmar directamente con el aperitivo y unas tapas en La Pulpe o el Mirasol.",
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
      address: "Calle Convento, 13610 Campo de Criptana (Despacho de Vinos)",
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
        "When you step back out through the grand archway onto Plaza del Pósito, you are a three-minute stroll from the best tapas bars in the center—perfectly timed for a vermouth and grilled octopus at La Pulpe or Mirasol.",
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
      address: "Calle Convento, 13610 Campo de Criptana",
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
            "Pide mesa alta en La Pulpe para su pulpo a la brasa y pásate por el despacho de Bodegas Símbolo para probar su Airén Selección.",
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
          "Spa en cueva subterránea en pleno centro histórico · Cancelación gratuita",
        priceHint: "Últimas habitaciones para este fin de semana",
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
          period: "Aperitivo Tradicional",
          title: "Cocina de producto y trato de toda la vida",
          spotName: "Restaurante Mirasol",
          insiderNote:
            "Pide unas berenjenas de Almagro y raciones de cocina manchega honesta en uno de los comedores más queridos del centro.",
          highlightTag: "Auténtico local",
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
          title: "Smash burgers y cerveza artesana",
          spotName: "Padel Galán",
          insiderNote:
            "El secreto a voces local: hamburguesas gourmet sorprendentemente buenas en un ambiente relajado y cercano.",
          highlightTag: "Secreto juvenil",
        },
      ],
      monetization: {
        ctaLabel: "Reservar Noche Céntrica en Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.es.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-clasicos-weekend",
        recommendedStay: "Alojamientos Céntricos y Apartamentos Turísticos",
        stayHighlight:
          "A pie de la Plaza Mayor y calles encaladas · Mejor precio garantizado",
        priceHint: "Plazas libres para escapadas espontáneas",
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
          "Casas completas con chimenea y barbacoa en la comarca de Criptana",
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
            "Grab high-top tables at La Pulpe for their wood-grilled octopus, then stop by Bodegas Símbolo's historic shop to taste award-winning local Airén white wines.",
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
          "Subterranean cave spa in the historical center · Free cancellation",
        priceHint: "Last rooms available for this weekend",
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
          period: "Traditional Aperitivo",
          title: "Generous Manchego comfort food",
          spotName: "Mirasol Tavern",
          insiderNote:
            "Order marinated Almagro eggplants and seasonal sharing plates in one of the most beloved traditional dining rooms downtown.",
          highlightTag: "Local staple",
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
          spotName: "Padel Galán",
          insiderNote:
            "The town's modern open secret: surprisingly fantastic gourmet smash burgers in a friendly, unpretentious venue.",
          highlightTag: "Insider favorite",
        },
      ],
      monetization: {
        ctaLabel: "Book Historical Center Stays on Booking.com",
        bookingUrl:
          "https://www.booking.com/searchresults.en.html?ss=Campo+de+Criptana&aid=304142&label=criptana360-clasicos-weekend-en",
        recommendedStay: "Town Center Boutique Apartments & Hotels",
        stayHighlight:
          "Steps away from Plaza Mayor and historic whitewashed alleys",
        priceHint: "Best rates for spontaneous getaways",
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
            "Just 10 minutes outside the town center lies a protected steppe lagoon where flamingos and migratory birds feed in peace.",
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
          "Full holiday homes with fireplaces and patios in the Criptana countryside",
        priceHint: "Ideal for family and group bookings",
      },
    },
  ],
}
