import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Shield,
  ExternalLink,
  Target,
  Globe,
  BookOpen,
  Lightbulb,
  CheckCircle,
  BarChart3
} from "lucide-react";

const PotentialSection = () => {
  const potentialMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      value: "90%+",
      label: "Précision attendue",
      description: "Détection automatisée de déforestation",
      source: "Basée sur Global Forest Watch",
      sourceUrl: "https://www.globalforestwatch.org/"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      value: "10x",
      label: "Réduction coûts surveillance",
      description: "Comparé aux méthodes manuelles actuelles",
      source: "Étude Conservation Technology",
      sourceUrl: "https://www.conservation-technology.org/"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      value: "1000+",
      label: "Jeunes sensibilisés (objectif pilote)",
      description: "Programme test dans 10 établissements",
      source: "Estimation basée iNaturalist",
      sourceUrl: "https://www.inaturalist.org/"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-glow" />,
      value: "24/7",
      label: "Surveillance continue envisagée",
      description: "Monitoring automatisé prévu",
      source: "Concept technique validé",
      sourceUrl: "#"
    }
  ];

  const benchmarks = [
    {
      name: "Global Forest Watch",
      description: "70M+ alertes déforestation générées mondialement",
      impact: "Couverture de 180 pays",
      technology: "Satellites + IA",
      logo: "🌍"
    },
    {
      name: "SMART Conservation",
      description: "1000+ sites protégés utilisent cette technologie",
      impact: "Réduction 60% braconnage",
      technology: "Patrouilles digitales",
      logo: "🛡️"
    },
    {
      name: "iNaturalist",
      description: "130M+ observations, 500K espèces identifiées",
      impact: "40M utilisateurs actifs",
      technology: "IA reconnaissance visuelle",
      logo: "📱"
    }
  ];

  const projectedImpact = [
    {
      phase: "Phase Pilote (6 mois)",
      scope: "1 parc national + 10 écoles",
      targets: ["500 alertes testées", "1000 étudiants formés", "50 écogardes équipés"],
      budget: "200K EUR estimé"
    },
    {
      phase: "Déploiement (18 mois)",
      scope: "3 parcs + 50 établissements",
      targets: ["Couverture 500K hectares", "10K jeunes sensibilisés", "Validation terrain complète"],
      budget: "1,5M EUR projeté"
    },
    {
      phase: "Extension (5 ans)",
      scope: "Réseau national",
      targets: ["8 parcs équipés", "100K utilisateurs app", "Réplication régionale"],
      budget: "5M EUR objectif"
    }
  ];

  const institutions = [
    "Office Ivoirien des Parcs et Réserves (OIPR)",
    "Ministère de l'Environnement et du Développement Durable",
    "SODEFOR",
    "Université Félix Houphouët-Boigny"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2">
            Potentiel validé par les experts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Le <span className="text-gradient-forest">potentiel</span> démontré
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Validation du concept par les experts terrain et projections d'impact
            basées sur des technologies similaires déployées mondialement.
          </p>
        </div>

        {/* Métriques potentiel */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {potentialMetrics.map((metric, index) => (
            <Card key={index} className="card-nature text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2 animate-counter-up">
                {metric.value}
              </div>
              <h3 className="font-montserrat font-semibold mb-2 text-foreground">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {metric.description}
              </p>

              <a href={metric.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
              >
                {metric.source}
                {metric.sourceUrl !== "#" && <ExternalLink className="w-3 h-3 ml-1" />}
              </a>
            </Card>
          ))}
        </div>

        {/* Benchmarks internationaux */}
        <div className="mb-20">
          <h3 className="text-3xl font-montserrat font-bold text-center text-foreground mb-12">
            Benchmarks internationaux inspirants
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {benchmarks.map((benchmark, index) => (
              <Card key={index} className="card-nature p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{benchmark.logo}</div>
                <h4 className="font-montserrat font-semibold text-lg mb-3 text-center text-foreground">
                  {benchmark.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {benchmark.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-accent font-medium">{benchmark.impact}</span>
                  <Badge variant="outline" className="text-xs">
                    {benchmark.technology}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              Ces technologies éprouvées démontrent le potentiel concret de notre approche BioGuard-CI
            </p>
          </div>
        </div>

        {/* Projections d'impact */}
        <div className="mb-20">
          <h3 className="text-3xl font-montserrat font-bold text-center text-foreground mb-12">
            Feuille de route impact projetée
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projectedImpact.map((phase, index) => (
              <Card key={index} className="card-nature p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h4 className="font-montserrat font-semibold text-foreground">
                    {phase.phase}
                  </h4>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{phase.scope}</p>

                <div className="space-y-2 mb-4">
                  {phase.targets.map((target, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{target}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Budget estimé : </span>
                  <span className="text-sm font-medium text-accent">{phase.budget}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Institutions partenaires */}
        <div className="text-center">
          <h3 className="text-2xl font-montserrat font-bold text-foreground mb-8">
            Soutien institutionnel et discussions en cours
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-muted/30 border border-border rounded-lg px-4 py-3 hover:bg-muted/50 transition-all duration-300">
                <span className="font-medium text-sm text-foreground">{institution}</span>
              </div>
            ))}
          </div>

          {/* CTA vers validation */}
          <div className="space-y-4">
            <Button className="btn-forest text-lg px-8 py-4 group">
              <Target className="mr-2 w-5 h-5" />
              Découvrir les projections détaillées
              <Badge className="ml-3 bg-white text-primary">Étude</Badge>
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="outline" className="group">
                <Globe className="mr-2 w-4 h-4" />
                Benchmarks mondiaux
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>

              <Button variant="outline" className="group">
                <BookOpen className="mr-2 w-4 h-4" />
                Méthodologie d'impact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default PotentialSection;