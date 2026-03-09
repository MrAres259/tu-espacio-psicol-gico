import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rosa V.",
    text: "Lili preciosa, que importante ha sido tu Terapia, pues el miedo al terremoto del 85, vivido en CMN, me marcó hasta antes de conocerte, tú trato, explicación de la hipnosis, y llevarlo a cabo, me funcionó en breve tiempo. Gracias y que muchos pacientes lo acepten y se maravillaran del resultado.",
    rating: 5,
  },
  {
    name: "Laura M.",
    text: "Inicié mi proceso terapéutico hace casi un año, buscando herramientas para manejar el agotamiento emocional en mi vida cotidiana.\n\nDurante las sesiones presenciales o vía zoom, me he sentido escuchada, comprendida y sobre todo acompañada...inclusive fuera de las sesiones programadas, Lily me ha permitido mantener un canal de comunicación 24/7, lo que favorece la confianza de decirle en el momento, que atravieso algún episodio que me rebasa, retroalimentándome a la brevedad posible.\n\nA lo largo de la terapia, a través de diferentes metodologías, poco a poco he aprendido a poner orden en mi vida, reconocer mis emociones y a darles un lugar sin juzgarme; he aplicado la observación a conductas repetitivas y hábitos recurrentes dañinos a lo largo de mi vida, así como a reflexionar en los pensamientos que me resultan negativos.\n\nHe reconocido mi valía y la importancia de amarme y cuidarme poniendo límites que, aunque me son aún difíciles de establecer, siento he tenido avances en fijarme límites a mí misma.\n\nLa forma en que mi psicoterapeuta me acompaña es cálida, solidaria, humana, sumamente paciente y clara, lo cual me ha brindado la confianza para abrirme y trabajar aspectos que antaño evitaba.\n\nEste proceso ha sido transformador, considero que tengo más consciencia y más herramientas para enfrentar mis retos. Para mí la terapia es como un bálsamo!. Estoy agradecida por el acompañamiento recibido.",
    rating: 5,
  },
  {
    name: "Betzabé M.",
    text: "El acompañamiento terapéutico es extraordinario, he encontrado a la especialista correcta, sumamente profesional, empática, cálida, respetuosa y con el conocimiento y experiencia necesaria para contener, apoyar y atender de manera inmediata cualquier situación por difícil que sea. Cada una de las sesiones me ha permitido identificar temas a trabajar, me ha ofrecido la posibilidad de construir herramientas y encontrar soluciones a diversas situaciones personales.",
    rating: 5,
  },
];

const PREVIEW_LENGTH = 160;

const TestimonialCard = ({
  name,
  text,
  rating,
  animClass,
  delay,
}: {
  name: string;
  text: string;
  rating: number;
  animClass: string;
  delay: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > PREVIEW_LENGTH;
  const displayText = expanded || !isLong ? text : text.slice(0, PREVIEW_LENGTH).trimEnd() + "…";

  return (
    <Card
      className={`border-border/50 bg-secondary/30 flex flex-col ${animClass}`}
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-8 flex flex-col flex-1">
        <Quote size={28} className="text-accent/30 mb-4 shrink-0" />
        <p className="text-foreground/80 leading-relaxed mb-4 italic whitespace-pre-line flex-1">
          &ldquo;{displayText}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent text-sm font-medium hover:underline text-left mb-4 transition-colors"
          >
            {expanded ? "Leer menos" : "Leer más"}
          </button>
        )}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: rating }).map((_, j) => (
            <Star key={j} size={14} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="font-semibold text-foreground text-sm">{name}</p>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">Testimonios</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Lo que dicen mis pacientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ name, text, rating }, i) => (
            <TestimonialCard
              key={i}
              name={name}
              text={text}
              rating={rating}
              animClass={isVisible ? "animate-fade-in-up" : "opacity-0"}
              delay={`${i * 150}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
