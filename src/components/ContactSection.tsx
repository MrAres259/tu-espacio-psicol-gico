import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+1 234 567 890" },
  { icon: Mail, label: "Email", value: "contacto@luminadespertar.com" },
  { icon: MapPin, label: "Dirección", value: "Col. Agricultura, Ciudad de México CP 11360" },
  { icon: Clock, label: "Horarios", value: "Lunes - Domingo: 8:00 AM - 10:00 PM" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">Contacto</p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            ¿Lista para dar el primer paso?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No dudes en comunicarte. Estoy aquí para acompañarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`text-center p-6 rounded-2xl bg-background shadow-sm border border-border/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-accent" />
              </div>
              <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
              <p className="text-muted-foreground text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className={`mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <iframe
            title="Ubicación Metro Normal, Ciudad de México"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.2!2d-99.1588!3d19.4513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9f1c8a7e5b3%3A0x9c3b0e4f8a2d1e5a!2sMetro+Normal!5e0!3m2!1ses!2smx!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
