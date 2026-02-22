import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María G.",
    text: "Gracias a la Dra. encontré un espacio seguro donde pude trabajar mis miedos y ansiedades. Hoy me siento mucho más fuerte y en paz conmigo misma.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "La terapia de pareja nos ayudó enormemente a mi esposa y a mí. Aprendimos a comunicarnos mejor y a fortalecer nuestra relación.",
    rating: 5,
  },
  {
    name: "Ana L.",
    text: "Las sesiones online son igual de efectivas. La flexibilidad que ofrece me permitió no dejar mi proceso terapéutico a pesar de mi agenda ocupada.",
    rating: 5,
  },
];

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
            <Card
              key={name}
              className={`border-border/50 bg-secondary/30 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <CardContent className="p-8">
                <Quote size={28} className="text-accent/30 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm">{name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
