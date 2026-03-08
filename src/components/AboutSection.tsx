import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, Heart, Clock } from "lucide-react";
import diplomaImage from "@/assets/liliana-diploma.jpg";

const highlights = [
  { icon: GraduationCap, label: "Licenciada en Psicología por la Universidad Nacional Autónoma de México" },
  { icon: GraduationCap, label: "Cursando la Maestría en Hipnosis Clínica" },
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
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary p-8">
                  <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[280px]">
                    {/* Head silhouette */}
                    <ellipse cx="150" cy="140" rx="65" ry="75" className="fill-primary/10 stroke-primary/30" strokeWidth="1.5" />
                    
                    {/* Brain flowing lines */}
                    <path d="M120 110 Q135 95 150 110 Q165 125 150 140" className="stroke-accent" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M130 120 Q145 105 160 120 Q175 135 160 150" className="stroke-accent/70" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M115 130 Q130 115 145 130 Q160 145 145 160" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    
                    {/* Gentle waves emanating from head */}
                    <path d="M80 140 Q65 120 80 100" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M70 150 Q50 125 70 95" className="stroke-accent/20" strokeWidth="1" strokeLinecap="round" fill="none" />
                    <path d="M220 140 Q235 120 220 100" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M230 150 Q250 125 230 95" className="stroke-accent/20" strokeWidth="1" strokeLinecap="round" fill="none" />

                    {/* Lotus flower */}
                    <g transform="translate(150, 290)">
                      {/* Center petal */}
                      <path d="M0 -30 Q15 -20 0 0 Q-15 -20 0 -30Z" className="fill-accent/40 stroke-accent/60" strokeWidth="1" />
                      {/* Left petals */}
                      <path d="M0 0 Q-25 -25 -15 -40 Q-5 -30 0 0Z" className="fill-primary/30 stroke-primary/40" strokeWidth="1" />
                      <path d="M0 0 Q-35 -15 -30 -35 Q-15 -25 0 0Z" className="fill-accent/25 stroke-accent/40" strokeWidth="1" />
                      {/* Right petals */}
                      <path d="M0 0 Q25 -25 15 -40 Q5 -30 0 0Z" className="fill-primary/30 stroke-primary/40" strokeWidth="1" />
                      <path d="M0 0 Q35 -15 30 -35 Q15 -25 0 0Z" className="fill-accent/25 stroke-accent/40" strokeWidth="1" />
                      {/* Center dot */}
                      <circle cx="0" cy="-12" r="3" className="fill-accent" />
                    </g>

                    {/* Connecting stem */}
                    <path d="M150 215 Q148 240 150 260" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    
                    {/* Leaves on stem */}
                    <path d="M150 235 Q135 225 130 240 Q140 235 150 235Z" className="fill-accent/30" />
                    <path d="M150 245 Q165 235 170 250 Q160 245 150 245Z" className="fill-primary/25" />

                    {/* Floating dots / sparkles */}
                    <circle cx="95" cy="80" r="2.5" className="fill-accent/40" />
                    <circle cx="210" cy="75" r="2" className="fill-primary/35" />
                    <circle cx="80" cy="200" r="2" className="fill-accent/30" />
                    <circle cx="225" cy="195" r="2.5" className="fill-primary/30" />
                    <circle cx="105" cy="260" r="1.5" className="fill-accent/25" />
                    <circle cx="200" cy="270" r="2" className="fill-primary/25" />
                    
                    {/* Abstract butterfly wings near head */}
                    <path d="M100 175 Q80 155 90 135 Q105 155 100 175Z" className="fill-accent/20 stroke-accent/30" strokeWidth="0.5" />
                    <path d="M200 175 Q220 155 210 135 Q195 155 200 175Z" className="fill-primary/20 stroke-primary/30" strokeWidth="0.5" />
                  </svg>
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
