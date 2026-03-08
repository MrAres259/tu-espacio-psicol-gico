import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, Heart, Clock } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Cursando la Maestría en Hipnosis Clínica" },
  { icon: Award, label: "Especialización en Hipnosis Tradicional e Hipnosis Eriksoniana" },
  { icon: Clock, label: "Más de 15 años de experiencia" },
  { icon: Heart, label: "Enfoque Cognitivo Conductual" },
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
              Dra. Liliana Carpio Torres
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy psicóloga clínica con más de 15 años de experiencia acompañando a personas en su proceso de autoconocimiento y bienestar en todas las esferas de su vida. Mi enfoque terapéutico es el cognitivo conductual combinando herramientas poderosas proveniente de la Hipnosis Clínica con un método único en el mundo que te permiten sanar traumas emocionales y enfermedades físicas para alcanzar tu máximo potencial y éxito en tu vida.
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
