export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "transformando-tu-mente",
    title: "Transformando tu Mente: El Poder de la Terapia Cognitivo Conductual y la Hipnosis Clínica",
    excerpt: "Descubre dos de los enfoques terapéuticos más efectivos y científicamente comprobados para recuperar tu equilibrio emocional.",
    content: `A veces, lidiar con nuestras emociones y pensamientos puede sentirse como caminar por un laberinto sin salida. Si estás buscando herramientas efectivas para recuperar tu equilibrio emocional, existen enfoques terapéuticos con un alto respaldo científico diseñados para ayudarte a tomar el control de tu vida. Aquí te explicamos dos de los más efectivos:\n\n## ¿Qué es la Terapia Psicológica con Enfoque Cognitivo Conductual?\n\nLa Terapia Cognitivo Conductual (TCC) es uno de los enfoques psicológicos más investigados y eficaces para tratar diversos problemas emocionales en la actualidad.\n\nSu premisa es sencilla pero poderosa: nuestros pensamientos influyen directamente en nuestras emociones y comportamientos. No siempre podemos cambiar las situaciones que nos ocurren, pero sí podemos cambiar cómo las interpretamos. Al aprender a identificar y modificar esos pensamientos negativos o distorsionados que nos limitan, podemos mejorar significativamente nuestro bienestar psicológico y recuperar nuestra paz mental.\n\n## Esta terapia es altamente efectiva para trabajar:\n\n- Ansiedad y ataques de pánico.\n- Depresión y estados de ánimo bajos.\n- Estrés crónico y cotidiano.\n- Problemas de autoestima y autoimagen.\n- Dificultades en las relaciones interpersonales.`,
    date: "2026-03-08",
    readTime: "5 min",
    category: "Terapia",
    image: "/src/assets/psychology.jpg",
  },
  {
    id: "hipnosis-clinica",
    title: "¿Qué es la Hipnosis Clínica?",
    excerpt: "Es común tener ideas equivocadas sobre la hipnosis. Descubre cómo la hipnosis clínica es una herramienta profundamente sanadora en la práctica psicológica.",
    content: `## ¿Qué es la Hipnosis Clínica?\n\nEs común tener ideas equivocadas sobre la hipnosis debido a lo que vemos en las películas, pero en la práctica psicológica, es una herramienta profundamente sanadora.\n\nLa hipnosis clínica es un procedimiento terapéutico que utiliza estados de relajación profunda para facilitar cambios positivos en patrones emocionales y conductuales. Durante la sesión, siempre permaneces consciente y en total control de ti mismo, pero tu mente entra en un estado de mayor enfoque, volviéndose mucho más receptiva a nuevas ideas, perspectivas y a tus propios recursos internos para sanar.\n\n## Beneficios principales de la Hipnosis Clínica:\n\n- Reducción significativa de la ansiedad.\n- Superación de miedos y fobias.\n- Control y manejo eficaz del estrés.\n- Fortalecimiento de la autoestima.\n- Facilitación en el cambio de hábitos (como dejar de fumar o mejorar la alimentación).`,
    date: "2026-03-01",
    readTime: "4 min",
    category: "Hipnosis Clínica",
    image: "/src/assets/hypnosis.jpg",
  },
  {
    id: "date-oportunidad-crecer",
    title: "Date la Oportunidad de Crecer: El Primer Paso hacia tu Mejor Versión",
    excerpt: "Tomar la decisión de ir a terapia es un acto de valentía y amor propio. Descubre por qué no tienes que esperar a que los problemas te sobrepasen.",
    content: `## Date la oportunidad de crecer\n\nTomar la decisión de ir a terapia es, ante todo, un acto de valentía y amor propio. No tienes que esperar a que los problemas te sobrepasen para buscar apoyo; la terapia es también un espacio para el autodescubrimiento, el crecimiento personal y la construcción de una vida más plena.\n\nSi sientes que es el momento de soltar lo que ya no te sirve y aprender nuevas formas de relacionarte contigo mismo y con el mundo, date la oportunidad de intentarlo. El primer paso puede dar un poco de miedo, pero es el inicio del camino hacia tu mejor versión.\n\n## ¿Cómo combinar la TCC y la Hipnosis Clínica?\n\nCuando se combinan la Terapia Cognitivo Conductual con la Hipnosis Clínica, se crea un método poderoso y único que te permite sanar traumas emocionales y enfermedades físicas para alcanzar tu máximo potencial y éxito en tu vida.\n\nLa TCC te ayuda a identificar y modificar los pensamientos que te limitan, mientras que la hipnosis clínica facilita el acceso a recursos internos profundos para acelerar el proceso de sanación.\n\nEstamos aquí para acompañarte en cada etapa de tu proceso.`,
    date: "2026-02-22",
    readTime: "3 min",
    category: "Crecimiento Personal",
  },
];
