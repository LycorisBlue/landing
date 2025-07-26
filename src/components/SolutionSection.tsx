import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Satellite, Volume2, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import satelliteImage from "@/assets/satellite-tech.jpg";
import acousticImage from "@/assets/acoustic-sensors.jpg";
import educationImage from "@/assets/education-app.jpg";

const SolutionSection = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      name: "Détect'Forêt",
      icon: <Satellite className="w-8 h-8" />,
      color: "primary",
      tagline: "Surveillance satellitaire intelligente",
      description: "Système d'IA avancé qui analysera les images satellites Sentinel-2 pour détecter automatiquement les activités de déforestation grâce à des algorithmes de deep learning et l'analyse NDVI.",
      image: satelliteImage,
        features: [
          "Traitement automatisé d'images Sentinel-2 (10m de résolution)",
          "Algorithmes CNN pour détection de changements forestiers",
          "Analyse NDVI pour mesurer la santé végétale",
          "Dashboard cartographique avec alertes géolocalisées",
          "API d'intégration avec systèmes gouvernementaux"
        ],
        metrics: {
          precision: "95%",
          coverage: "Objectif national",
          responseTime: "Temps réel"
        }
    },
    {
      id: 1,
      name: "EcoSentinel", 
      icon: <Volume2 className="w-8 h-8" />,
      color: "accent",
      tagline: "Anti-braconnage acoustique",
      description: "Réseau intelligent de capteurs audio IoT alimentés par énergie solaire, équipés d'algorithmes d'IA pour identifier automatiquement les sons de braconnage et déclencher des alertes géolocalisées.",
      image: acousticImage,
        features: [
          "Capteurs Raspberry Pi avec microphones directionnels",
          "Algorithmes de classification audio en temps réel",
          "Connectivité LoRaWAN pour zones isolées",
          "Panneaux solaires et batteries longue durée",
          "Interface mobile pour écogardes avec géolocalisation GPS"
        ],
        metrics: {
          precision: "90%+",
          coverage: "Zones critiques",
          responseTime: "< 2min"
        }
    },
    {
      id: 2,
      name: "BioGuard Junior",
      icon: <Smartphone className="w-8 h-8" />,
      color: "secondary", 
      tagline: "Éducation interactive nouvelle génération",
      description: "Application mobile éducative révolutionnaire utilisant l'IA de reconnaissance visuelle (MobileNet) pour identifier les espèces locales, avec un système de gamification pour engager les jeunes dans la conservation.",
      image: educationImage,
        features: [
          "IA de reconnaissance visuelle adaptée à la faune ivoirienne",
          "Base de données de 500+ espèces avec fiches détaillées",
          "Mode hors-ligne pour zones sans connectivité",
          "Système de points et badges de conservation",
          "Challenges éducatifs et quiz interactifs"
        ],
        metrics: {
          precision: "85%+",
          coverage: "500+ espèces",
          responseTime: "Instantané"
        }
    }
  ];

  const activeModuleData = modules[activeModule];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            La solution <span className="text-gradient-forest">BioGuard-CI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trois modules d'IA interconnectés pour une protection complète de la biodiversité ivoirienne
          </p>
        </div>

        {/* Sélecteur de modules */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => (
            <Card 
              key={module.id}
              className={`card-nature cursor-pointer transition-all duration-300 ${
                activeModule === index 
                  ? 'ring-2 ring-primary shadow-forest scale-105' 
                  : 'hover:scale-102'
              }`}
              onClick={() => setActiveModule(index)}
            >
              <div className="text-center p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  module.color === 'primary' ? 'bg-primary text-primary-foreground' :
                  module.color === 'accent' ? 'bg-accent text-accent-foreground' :
                  'bg-secondary text-secondary-foreground'
                }`}>
                  {module.icon}
                </div>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                  {module.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {module.tagline}
                </p>

                <div className="flex justify-center">
                  <Button 
                    variant={activeModule === index ? "default" : "outline"}
                    size="sm"
                    className="group"
                  >
                    Découvrir
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Détails du module actif */}
        <div className="bg-gradient-to-r from-muted/30 to-background rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${
                  activeModuleData.color === 'primary' ? 'bg-primary text-primary-foreground' :
                  activeModuleData.color === 'accent' ? 'bg-accent text-accent-foreground' :
                  'bg-secondary text-secondary-foreground'
                }`}>
                  {activeModuleData.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-foreground">
                    {activeModuleData.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeModuleData.tagline}
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeModuleData.description}
              </p>

              {/* Fonctionnalités */}
              <div className="mb-8">
                <h4 className="font-montserrat font-semibold text-foreground mb-4">
                  Fonctionnalités clés :
                </h4>
                <div className="space-y-3">
                  {activeModuleData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Métriques */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {activeModuleData.metrics.precision}
                  </div>
                  <div className="text-xs text-muted-foreground">Précision</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {activeModuleData.metrics.coverage}
                  </div>
                  <div className="text-xs text-muted-foreground">Couverture</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {activeModuleData.metrics.responseTime}
                  </div>
                  <div className="text-xs text-muted-foreground">Réponse</div>
                </div>
              </div>
            </div>

            {/* Image du module */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={activeModuleData.image} 
                  alt={activeModuleData.name}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badge technologie */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-medium text-foreground">
                    IA • IoT • Mobile
                  </span>
                </div>
              </div>
              
              {/* Effet de brillance */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;