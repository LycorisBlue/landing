import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Star,
  Quote,
  PlayCircle
} from "lucide-react";

const ResultsSection = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      value: "90%+",
      label: "Objectif de précision",
      description: "Détection automatisée de déforestation"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      value: "15x",
      label: "Accélération visée",
      description: "Réduction du temps de réponse"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      value: "10K+",
      label: "Jeunes à impacter",
      description: "Objectif première année"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-glow" />,
      value: "24/7",
      label: "Surveillance continue",
      description: "Monitoring automatisé prévu"
    }
  ];

  const testimonials = [
    {
      name: "Kouassi Yao",
      role: "Écogarde Senior, Parc National de Taï",
      avatar: "K",
      content: "Le concept d'EcoSentinel répond exactement à nos besoins de surveillance. Cette approche technologique pourrait transformer notre travail.",
      rating: 5
    },
    {
      name: "Aminata Diabaté",
      role: "Enseignante, École Primaire d'Abidjan",
      avatar: "A", 
      content: "L'approche de BioGuard Junior correspond parfaitement à nos besoins d'éducation environnementale moderne. J'ai hâte de tester cette solution.",
      rating: 5
    },
    {
      name: "Dr. Konan Michel",
      role: "Directeur OIPR, Recherche Scientifique",
      avatar: "D",
      content: "BioGuard-CI représente l'avenir de la conservation. Cette intégration d'IA pourrait révolutionner notre approche de protection des écosystèmes.",
      rating: 5
    }
  ];

  const partners = [
    "Ministère des Eaux et Forêts",
    "OIPR",
    "SODEFOR", 
    "WCF Côte d'Ivoire",
    "Université Félix Houphouët-Boigny"
  ];

  return (
    <section className="py-20 bg-gradient-canopy text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
            Potentiel et objectifs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Un impact transformateur attendu
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Nos projections techniques et notre roadmap visent des résultats concrets 
            pour la conservation de la biodiversité ivoirienne.
          </p>
        </div>

        {/* Métriques principales */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2 animate-counter-up">
                {metric.value}
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                {metric.label}
              </h3>
              <p className="text-sm opacity-80">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Témoignages */}
        <div className="mb-20">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
            Ils soutiennent l'innovation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                  <p className="text-white/90 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center font-bold text-white mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-sm opacity-70">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partenaires */}
        <div className="text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-8">
            Soutenu par nos partenaires institutionnels
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/15 transition-all duration-300">
                <span className="font-medium">{partner}</span>
              </div>
            ))}
          </div>

          {/* Certification */}
          <div className="inline-flex items-center bg-accent/20 border border-accent/30 rounded-full px-8 py-4">
            <Shield className="w-6 h-6 text-accent mr-3" />
            <span className="text-accent font-medium">
              Projet en collaboration avec l'OIPR
            </span>
          </div>

          {/* CTA vers démo */}
          <div className="mt-12">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 group">
              <PlayCircle className="mr-2 w-5 h-5" />
              Découvrir le prototype
              <Badge className="ml-3 bg-primary text-white">Demo</Badge>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;