import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(35 30% 96%), hsl(35 28% 90%), hsl(38 35% 82%))",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="animate-fade-in-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Sparkles size={16} />
            Consultorio Psicológico
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
            Tu despertar{" "}
            <span className="text-primary italic">comienza</span>{" "}
            aquí
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            En Lumina Despertar te acompañamos en tu camino hacia el <span className="font-bold text-primary">BIENESTAR</span> en todas las áreas vitales, con calidez, profesionalismo y un enfoque centrado en ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 text-base shadow-lg hover:shadow-xl transition-shadow">
                Agendar Cita
              </Button>
            </a>
            <button
              onClick={() => document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Button variant="outline" size="lg" className="rounded-full px-10 text-base">
                Conóceme
              </Button>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z"
            fill="hsl(35 30% 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
