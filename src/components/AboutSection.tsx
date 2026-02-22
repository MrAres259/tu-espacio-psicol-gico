import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, Heart, Clock } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Maestría en Psicología Clínica" },
  { icon: Award, label: "Especialización en Terapia Cognitivo-Conductual" },
  { icon: Clock, label: "+10 años de experiencia" },
  { icon: Heart, label: "Enfoque humanista e integrativo" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-secondary overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👩‍⚕️</span>
                    </div>
                    <p className="text-sm">Foto de la psicóloga</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/30 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">Sobre Mí</p>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Dra. [Nombre de la Psicóloga]
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy psicóloga clínica con más de 10 años de experiencia acompañando a personas
              en su proceso de autoconocimiento y bienestar emocional. Mi enfoque terapéutico
              combina técnicas cognitivo-conductuales con una perspectiva humanista, creando
              un espacio seguro y cálido para cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Creo firmemente que cada persona tiene la capacidad de transformar su vida.
              Mi rol es ser tu guía en ese camino de despertar interior, brindándote las
              herramientas necesarias para alcanzar tu máximo potencial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <Icon size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
