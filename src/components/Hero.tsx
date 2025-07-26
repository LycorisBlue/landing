import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Satellite, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Éléments flottants animés */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Satellite className="w-12 h-12 text-primary-glow opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="w-10 h-10 text-accent opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Smartphone className="w-8 h-8 text-secondary opacity-50" />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Titre principal */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-4">
              <span className="text-gradient-forest">BioGuard</span>
              <span className="bg-accent px-3 py-1 rounded-lg text-2xl md:text-3xl ml-2">CI</span>
            </h1>
            <p className="text-2xl md:text-3xl font-montserrat font-medium opacity-95">
              L'IA au service de la biodiversité ivoirienne
            </p>
          </div>

          {/* Sous-titre */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl font-inter leading-relaxed max-w-3xl mx-auto opacity-90">
              Un concept innovant de suite d'outils intelligents pour surveiller, protéger
              et sensibiliser à la conservation de notre précieuse biodiversité
            </p>
          </div>

          {/* Statistiques impact */}
          <div className="grid grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-counter-up">3</div>
              <div className="text-sm opacity-80">Modules prévus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 animate-counter-up">1ère</div>
              <div className="text-sm opacity-80">En Côte d'Ivoire</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2 animate-counter-up">∞</div>
              <div className="text-sm opacity-80">Potentiel impact</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-earth text-lg px-8 py-4 group">
              Découvrir le concept
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 group">
              <Play className="mr-2 w-5 h-5" />
              Vision du projet
            </Button>
          </div>
        </div>
      </div>
      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;