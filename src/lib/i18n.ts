export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  es: {
    htmlLang: 'es-UY',
    title: 'noRoof development — Software para problemas reales',
    description:
      'Consultora de software en Montevideo. Diseñamos, construimos y operamos productos junto a nuestros socios, y también los nuestros: noRoof Biz, noRoof Sport Club y Coolturus.',
    skip: 'Saltar al contenido',
    nav: {
      label: 'Secciones',
      projects: 'Productos',
      process: 'Cómo trabajamos',
      experience: 'Experiencia',
      why: 'Por qué noRoof',
      contact: 'Hablemos',
      langLabel: 'Idioma',
    },
    hero: {
      title: ['Software', 'para problemas', 'reales.', 'Construido con vos.'],
      lead: 'Somos una consultora de software de Montevideo. Diseñamos, construimos y operamos productos junto a nuestros socios — y también los nuestros.',
      billTitle: 'Conocimiento de embarque',
      rows: {
        from: ['Embarcador', 'noRoof · Montevideo, UY'],
        to: ['Consignatario', 'socios'],
        toStruck: 'clientes',
        method: ['Método', 'Ingeniería de software con IA'],
        cargo: ['Carga', 'Front-end · Back-end · Cloud · Datos'],
      },
      primary: 'Hablemos',
      secondary: 'Ver productos',
      strip: 'Nuestros productos',
    },
    projects: {
      title: 'Lo que ya despachamos',
      intro:
        'Además de trabajar con nuestros socios, construimos y operamos productos propios. Abrí cada contenedor para ver qué lleva.',
      status: { live: 'En producción', development: 'En desarrollo', paused: 'En pausa' },
      open: 'Abrir puertas',
      close: 'Cerrar puertas',
      cargo: 'Carga',
      noShot: 'Captura disponible cuando se lance.',
    },
    process: {
      title: 'Cómo trabajamos',
      quote: 'No trabajamos para vos. Trabajamos con vos.',
      intro:
        'Vos conocés tu negocio, sus dolores y sus problemas. A nosotros nos apasiona la tecnología y usarla para resolverlos. La comunicación y la cooperación son las que llevan buenos productos al mercado.',
      gantry: 'Ingeniería de software con IA en toda la línea',
      stationLabel: 'Estación',
    },
    experience: {
      title: 'Manifiesto de experiencia',
      intro:
        'Años de trabajo en proyectos de distintas industrias nos dieron el oficio que hoy ponemos en cada producto.',
      cols: { item: 'Ítem', industry: 'Industria', work: 'Trabajo', stack: 'Tecnologías' },
      origin: 'Origen: Montevideo, UY',
    },
    why: {
      title: 'Por qué noRoof',
      intro:
        'Creemos en romper límites y crear posibilidades sin techo. Por eso nos llamamos así.',
      inspection: 'Inspeccionado en cada entrega',
      checks: ['Seguridad', 'Experiencia de usuario', 'Performance', 'Calidad'],
    },
    contact: {
      title: 'Hablemos',
      intro:
        'Si querés conversar sobre alguno de nuestros productos o necesitás ayuda con un problema de tu negocio, escribinos.',
      emailLead: 'También podés escribirnos a',
      fields: { name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje' },
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      required: 'Obligatorio',
    },
    footer: {
      line: 'Consultora de software · Montevideo, Uruguay',
      products: 'Productos',
      rights: 'noRoof development',
    },
    thanks: {
      title: 'Mensaje recibido',
      body: 'Gracias por escribirnos. Te respondemos lo antes posible.',
      stamp: 'Recibido',
      back: 'Volver al inicio',
    },
    notFound: {
      title: 'Contenedor no encontrado',
      body: 'La página que buscás no está en este patio.',
      back: 'Volver al inicio',
    },
  },
  en: {
    htmlLang: 'en',
    title: 'noRoof development — Software for real problems',
    description:
      'Software consultancy in Montevideo, Uruguay. We design, build and run products alongside our partners — and our own: noRoof Biz, noRoof Sport Club and Coolturus.',
    skip: 'Skip to content',
    nav: {
      label: 'Sections',
      projects: 'Products',
      process: 'How we work',
      experience: 'Experience',
      why: 'Why noRoof',
      contact: "Let's talk",
      langLabel: 'Language',
    },
    hero: {
      title: ['Software', 'for real', 'problems.', 'Built with you.'],
      lead: "We're a software consultancy from Montevideo. We design, build and run products alongside our partners — and our own.",
      billTitle: 'Bill of lading',
      rows: {
        from: ['Shipper', 'noRoof · Montevideo, UY'],
        to: ['Consignee', 'partners'],
        toStruck: 'clients',
        method: ['Method', 'AI-driven software engineering'],
        cargo: ['Cargo', 'Front-end · Back-end · Cloud · Data'],
      },
      primary: "Let's talk",
      secondary: 'See products',
      strip: 'Our products',
    },
    projects: {
      title: 'What we already ship',
      intro:
        'Besides working with our partners, we build and run products of our own. Open each container to see what it carries.',
      status: { live: 'Live', development: 'In development', paused: 'On hold' },
      open: 'Open doors',
      close: 'Close doors',
      cargo: 'Cargo',
      noShot: 'Screenshot available at launch.',
    },
    process: {
      title: 'How we work',
      quote: "We don't just work for you. We work with you.",
      intro:
        'You know your business, its pains and its problems. We love technology and using it to solve them. Communication and cooperation are what bring great products to market.',
      gantry: 'AI-driven software engineering across the whole line',
      stationLabel: 'Station',
    },
    experience: {
      title: 'Experience manifest',
      intro:
        'Years of work on projects across many industries gave us the craft we now put into every product.',
      cols: { item: 'Item', industry: 'Industry', work: 'Work', stack: 'Technologies' },
      origin: 'Origin: Montevideo, UY',
    },
    why: {
      title: 'Why noRoof',
      intro: "We believe in breaking boundaries and building possibilities with no ceiling. That's where our name comes from.",
      inspection: 'Inspected on every delivery',
      checks: ['Security', 'User experience', 'Performance', 'Quality'],
    },
    contact: {
      title: "Let's talk",
      intro:
        "If you'd like to talk about one of our products, or you need help with a business problem, write to us.",
      emailLead: 'You can also email us at',
      fields: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
      submit: 'Send message',
      sending: 'Sending…',
      required: 'Required',
    },
    footer: {
      line: 'Software consultancy · Montevideo, Uruguay',
      products: 'Products',
      rights: 'noRoof development',
    },
    thanks: {
      title: 'Message received',
      body: "Thanks for writing to us. We'll get back to you as soon as we can.",
      stamp: 'Received',
      back: 'Back to home',
    },
    notFound: {
      title: 'Container not found',
      body: "The page you're looking for isn't in this yard.",
      back: 'Back to home',
    },
  },
} as const;

export type UI = (typeof ui)[Locale];

export const homePath = (locale: Locale) => (locale === 'es' ? '/' : '/en/');
export const thanksPath = (locale: Locale) => (locale === 'es' ? '/thanks.html' : '/en/thanks.html');
