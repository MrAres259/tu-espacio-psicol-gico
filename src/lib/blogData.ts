export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "manejar-ansiedad",
    title: "5 Técnicas para Manejar la Ansiedad en tu Día a Día",
    excerpt: "La ansiedad es una respuesta natural del cuerpo, pero cuando se vuelve constante puede afectar tu calidad de vida. Descubre técnicas prácticas para gestionarla.",
    content: `La ansiedad es una emoción que todos experimentamos en algún momento. Es la respuesta natural de nuestro cuerpo ante situaciones que percibimos como amenazantes o desafiantes. Sin embargo, cuando la ansiedad se vuelve crónica, puede interferir significativamente con nuestra vida diaria.\n\n## 1. Respiración diafragmática\n\nLa técnica de respiración 4-7-8 es una de las más efectivas: inhala durante 4 segundos, mantén el aire 7 segundos y exhala lentamente durante 8 segundos.\n\n## 2. Grounding o anclaje\n\nCuando sientas ansiedad, identifica 5 cosas que puedes ver, 4 que puedes tocar, 3 que puedes escuchar, 2 que puedes oler y 1 que puedes saborear.\n\n## 3. Movimiento consciente\n\nEl ejercicio físico regular libera endorfinas que actúan como ansiolíticos naturales. Incluso una caminata de 20 minutos puede hacer la diferencia.\n\n## 4. Diario emocional\n\nEscribir tus pensamientos y emociones te ayuda a procesarlos y a identificar patrones que alimentan tu ansiedad.\n\n## 5. Límites saludables\n\nAprende a decir "no" cuando sea necesario. Establecer límites claros en tus relaciones y responsabilidades es fundamental para tu bienestar.`,
    date: "2026-02-15",
    readTime: "5 min",
    category: "Ansiedad",
  },
  {
    id: "importancia-autoestima",
    title: "La Importancia de Cultivar tu Autoestima",
    excerpt: "Una autoestima saludable es la base del bienestar emocional. Aprende cómo fortalecerla y transformar la relación contigo mismo.",
    content: `La autoestima es la valoración que hacemos de nosotros mismos. Es la percepción que tenemos de nuestras capacidades, cualidades y valor como personas.\n\nUna autoestima saludable no significa ser perfecto o no tener inseguridades. Significa aceptarte tal como eres, reconocer tus fortalezas y trabajar con compasión en tus áreas de mejora.\n\n## ¿Cómo se construye la autoestima?\n\nLa autoestima se forma desde la infancia a través de nuestras experiencias y las relaciones con nuestro entorno. Los mensajes que recibimos de nuestros padres, maestros y compañeros van moldeando la imagen que tenemos de nosotros mismos.\n\n## Señales de baja autoestima\n\n- Dificultad para aceptar cumplidos\n- Comparación constante con los demás\n- Miedo al rechazo\n- Perfeccionismo extremo\n- Dificultad para poner límites\n\n## Pasos para fortalecer tu autoestima\n\n1. **Practica el autoconocimiento**: Identifica tus valores, fortalezas y áreas de mejora.\n2. **Habla con amabilidad**: Cambia el diálogo interno negativo por uno más compasivo.\n3. **Celebra tus logros**: Por pequeños que sean, reconoce tus avances.`,
    date: "2026-02-08",
    readTime: "6 min",
    category: "Autoestima",
  },
  {
    id: "comunicacion-pareja",
    title: "Claves para una Comunicación Efectiva en Pareja",
    excerpt: "La comunicación es el pilar de toda relación. Descubre herramientas para expresar tus necesidades y escuchar activamente a tu pareja.",
    content: `La comunicación efectiva es uno de los pilares fundamentales de una relación saludable. Cuando nos comunicamos bien con nuestra pareja, fortalecemos la confianza, la intimidad y la conexión emocional.\n\n## La escucha activa\n\nEscuchar activamente significa prestar atención plena a lo que tu pareja dice, sin interrumpir, sin juzgar y sin preparar tu respuesta mientras el otro habla.\n\n## El uso de mensajes "yo"\n\nEn lugar de decir "tú siempre...", prueba con "yo me siento... cuando...". Esto reduce la defensividad y abre espacio para el diálogo.\n\n## Elegir el momento adecuado\n\nNo todos los momentos son buenos para tener conversaciones difíciles. Busca un espacio tranquilo donde ambos estén disponibles emocionalmente.\n\n## Validar las emociones del otro\n\nAunque no estés de acuerdo con la perspectiva de tu pareja, validar sus emociones les hace sentirse escuchados y comprendidos.`,
    date: "2026-01-25",
    readTime: "4 min",
    category: "Relaciones",
  },
];
