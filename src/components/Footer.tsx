import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3">Lumina Despertar</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Consultorio psicológico dedicado a tu bienestar emocional y crecimiento personal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest">Contacto</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2"><Phone size={14} /> +1 234 567 890</div>
              <div className="flex items-center gap-2"><Mail size={14} /> contacto@luminadespertar.com</div>
              <a href="https://www.google.com/maps/dir//Metro+Normal,+Ciudad+de+M%C3%A9xico" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                Colonia Agricultura, CP 11360, Ciudad de México (cerca de Metro Normal)
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </a>
               <a href="https://www.facebook.com/share/1HTLWNLDj2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                 <Facebook size={18} />
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Lumina Despertar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
