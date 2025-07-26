import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Satellite,
  Volume2,
  Smartphone,
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  Lightbulb,
  Target,
  Calendar
} from "lucide-react";
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
      status: "Concept technique validé",
      description: "Système d'IA envisagé pour analyser les images satellites Sentinel-2 et détecter automatiquement les activités de déforestation grâce à des algorithmes de deep learning et l'analyse NDVI.",
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
      },
      inspiration: "Inspiré de Global Forest Watch & Google Earth Engine",
      nextStep: "Développement du MVP"
    },
    {
      id: 1,
      name: "EcoSentinel",
      icon: <Volume2 className="w-8 h-8" />,
      color: "accent",
      tagline: "Anti-braconnage acoustique",
      status: "Prototype en conception",
      description: "Concept de réseau intelligent de capteurs audio IoT alimentés par énergie solaire, équipés d'algorithmes d'IA pour identifier automatiquement les sons de braconnage et déclencher des alertes géolocalisées.",
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
      },
      inspiration: "Basé sur projets anti-braconnage Afrique du Sud",
      nextStep: "Tests de faisabilité acoustique"
    },
    {
      id: 2,
      name: "BioGuard Junior",
      icon: <Smartphone className="w-8 h-8" />,
      color: "secondary",
      tagline: "Éducation interactive nouvelle génération",
      status: "Application éducative envisagée",
      description: "Concept d'application mobile éducative utilisant l'IA de reconnaissance visuelle (MobileNet) pour identifier les espèces locales, avec un système de gamification pour engager les jeunes dans la conservation.",
      image: educationImage,
      features: [
        "IA de reconnaissance visuelle adaptée à la faune ivoirienne",
        "Base de données de 50+ espèces avec fiches détaillées",
        "Mode hors-ligne pour zones sans connectivité",
        "Système de points et badges de conservation",
        "Challenges éducatifs et quiz interactifs"
      ],
      metrics: {
        precision: "85%+",
        coverage: "50+ espèces",
        responseTime: "Instantané"
      },
      inspiration: "Modèle iNaturalist & PlantNet adapté localement",
      nextStep: "Partenariats secteur éducatif"
    }
  ];

  const activeModuleData = modules[activeModule];

  const timeline = [
    { period: "Q1 2025", task: "Finalisation études de faisabilité", status: "current" },
    { period: "Q2 2025", task: "Développement MVP Détect'Forêt", status: "planned" },
    { period: "Q3 2025", task: "Tests pilotes EcoSentinel", status: "planned" },
    { period: "2026", task: "Déploiement progressif", status: "planned" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Lightbulb className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium text-sm">Concepts en développement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Notre approche <span className="text-gradient-forest">BioGuard-CI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trois concepts d'IA interconnectés pour révolutionner la protection
            de la biodiversité ivoirienne - de l'idée au déploiement
          </p>
        </div>

        {/* Sélecteur de modules */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => (
            <Card
              key={module.id}
              className={`card-nature cursor-pointer transition-all duration-300 ${activeModule === index
                  ? 'ring-2 ring-primary shadow-forest scale-105'
                  : 'hover:scale-102'
                }`}
              onClick={() => setActiveModule(index)}
            >
              <div className="text-center p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${module.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    module.color === 'accent' ? 'bg-accent text-accent-foreground' :
                      'bg-secondary text-secondary-foreground'
                  }`}>
                  {module.icon}
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                  {module.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-3">
                  {module.tagline}
                </p>

                <Badge
                  variant="outline"
                  className="mb-4 text-xs"
                >
                  {module.status}
                </Badge>

                <div className="flex justify-center">
                  <Button
                    variant={activeModule === index ? "default" : "outline"}
                    size="sm"
                    className="group"
                  >
                    Explorer le concept
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Détails du module actif */}
        <div className="bg-gradient-to-r from-muted/30 to-background rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${activeModuleData.color === 'primary' ? 'bg-primary text-primary-foreground' :
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

              <div className="mb-6">
                <Badge variant="outline" className="mb-4">
                  {activeModuleData.status}
                </Badge>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {activeModuleData.description}
                </p>
              </div>

              {/* Inspiration */}
              <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="flex items-center mb-2">
                  <Target className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">Approche technique</span>
                </div>
                <p className="text-sm text-muted-foreground">{activeModuleData.inspiration}</p>
              </div>

              {/* Fonctionnalités envisagées */}
              <div className="mb-8">
                <h4 className="font-montserrat font-semibold text-foreground mb-4">
                  Fonctionnalités envisagées :
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

              {/* Objectifs techniques */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {activeModuleData.metrics.precision}
                  </div>
                  <div className="text-xs text-muted-foreground">Précision visée</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {activeModuleData.metrics.coverage}
                  </div>
                  <div className="text-xs text-muted-foreground">Couverture prévue</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {activeModuleData.metrics.responseTime}
                  </div>
                  <div className="text-xs text-muted-foreground">Réponse envisagée</div>
                </div>
              </div>

              {/* Prochaine étape */}
              <div className="flex items-center p-3 bg-primary/10 rounded-lg">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm">
                  <strong>Prochaine étape :</strong> {activeModuleData.nextStep}
                </span>
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

                {/* Badge concept */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-medium text-foreground">
                    Concept • Faisabilité étudiée
                  </span>
                </div>
              </div>

              {/* Effet de brillance */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse-soft"></div>
            </div>
          </div>
        </div>

        {/* Roadmap de développement */}
        <div className="bg-muted/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">
            Roadmap de développement
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-3 ${item.status === 'current' ? 'bg-accent' : 'bg-muted-foreground'
                  }`}></div>
                <h4 className="font-semibold text-sm mb-2">{item.period}</h4>
                <p className="text-xs text-muted-foreground">{item.task}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recherche de partenaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-earth text-white p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-3" />
              <h4 className="font-montserrat font-semibold">
                Recherche active de partenaires
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h5 className="font-medium mb-2">Partenaires techniques</h5>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Institutions de recherche IA</li>
                  <li>• Fournisseurs hardware IoT</li>
                  <li>• Développeurs applications mobiles</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Partenaires terrain</h5>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• OIPR pour validation terrain</li>
                  <li>• Établissements scolaires pilotes</li>
                  <li>• ONG conservation locale</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              <h4 className="font-montserrat font-semibold">
                Documentation technique
              </h4>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Accédez à nos études de faisabilité détaillées et spécifications techniques
              pour chaque module BioGuard-CI.
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full group">
                <FileText className="mr-2 w-4 h-4" />
                Étude de faisabilité
                <Badge className="ml-2 bg-primary text-white">PDF</Badge>
              </Button>
              <Button variant="outline" className="w-full group">
                <Target className="mr-2 w-4 h-4" />
                Spécifications techniques
                <Badge className="ml-2 bg-accent text-white">En cours</Badge>
              </Button>
            </div>
          </Card>
        </div>

        {/* Validation scientifique */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-8 py-4 mb-6">
            <CheckCircle className="w-6 h-6 text-primary mr-3" />
            <span className="font-medium">
              Approche validée par l'écosystème Global Forest Watch & iNaturalist
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos concepts s'appuient sur des technologies éprouvées et des méthodologies
            utilisées avec succès dans des projets de conservation similaires à travers le monde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;