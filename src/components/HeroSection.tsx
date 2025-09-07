import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-incapacidad.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-accent min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Incapacidad Permanente en España
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Obtén tu prestación por incapacidad permanente. Te ayudamos con todos los trámites ante la Seguridad Social e INSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
              >
                Consulta Gratuita
              </Button>
              <Button variant="secondary" size="lg">
                Tipos de Incapacidad
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Incapacidad Permanente - Ayuda Legal España" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;