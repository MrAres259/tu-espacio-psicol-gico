import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Users, Monitor, Brain, Baby, Flower2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: User,
    title: "Terapia Individual",
    description: "Sesiones personalizadas enfocadas en tu bienestar emocional, autoconocimiento y crecimiento personal.",
    showExpertiseStar: true,
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description: "Fortalece tu relación a través de una comunicación más efectiva y la resolución de conflictos.",
  },
  {
    icon: Monitor,
    title: "Terapia Online",
    description: "Sesiones desde la comodidad de tu hogar con la misma calidad y profesionalismo.",
  },
   {
     icon: Brain,
     title: "Adiós a la Ansiedad y el Insomnio",
     description: "Descubre estrategias probadas para superar estas problemáticas y retomar el control de tu vida.",
   },
  {
    icon: Baby,
    title: "Terapia Infantil",
    description: "Acompañamiento especializado para el desarrollo emocional saludable de los más pequeños.",
  },
  {
    icon: Flower2,
    title: "Hipnosis Clínica",
    description: "Neurociencias aplicadas para liberarte tanto de heridas emocionales y traumas como de enfermedades importantes como cáncer, diabetes y problemas de tiroides.",
    showExpertiseStar: true,
  },
];
const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">Servicios</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de atención adaptadas a tus necesidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, showExpertiseStar }, i) => (
            <Card
              key={title}
              className={`group relative border-border/50 hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-background ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {showExpertiseStar && (
                <div className="absolute top-4 right-4">
                  <Star size={18} className="text-primary fill-primary" />
                </div>
              )}
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
