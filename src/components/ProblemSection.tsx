import { AlertTriangle, TrendingDown, Users, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12 text-destructive" />,
      stat: "81%",
      title: "Déforestation massive",
      description: "81% de la couverture forestière perdue depuis 1960",
      detail: "De 16 millions d'hectares en 1900 à seulement 2,97 millions en 2021",
      source: "Inventaire Forestier et Faunique National 2021",
      sourceUrl: "https://www.onfinternational.org/resultats-de-linventaire-forestier-et-faunique-de-la-cote-divoire-iffn-2021/"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-accent" />,
      stat: "76%",
      title: "Espèces en danger critique",
      description: "Les éléphants de forêt ont décliné de 76% en 30 ans",
      detail: "189 éléphants restants à Taï contre 800 historiquement",
      source: "UICN & Wild Chimpanzee Foundation",
      sourceUrl: "https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      stat: "2,1M",
      title: "Aires protégées sous-surveillées",
      description: "2,1 millions d'hectares avec effectifs d'écogardes insuffisants",
      detail: "Surveillance complexifiée par 500 km de pistes à maintenir à Comoé",
      source: "OIPR - Office Ivoirien des Parcs et Réserves",
      sourceUrl: "https://www.oipr.ci/"
    }
  ];

  const causes = [
    {
      title: "Agriculture extensive",
      description: "3,5 millions d'hectares de cacao avec rendements <500kg/ha",
      impact: "37% de déforestation dans les aires protégées",
      source: "Étude Trase/UCLouvain 2023"
    },
    {
      title: "Exploitation illégale",
      description: "3 millions de m³ de sciage illégal vs 75 000 m³ légaux",
      impact: "87% des ménages dépendants du bois-énergie",
      source: "SODEFOR 2024"
    },
    {
      title: "Braconnage organisé",
      description: "578 kg d'ivoire saisis en janvier 2024",
      impact: "Sanctions dérisoires : 3 000 à 300 000 FCFA",
      source: "EAGLE Network"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Une biodiversité en <span className="text-destructive">crise historique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La Côte d'Ivoire traverse une crise environnementale d'ampleur exceptionnelle,
            documentée par les institutions nationales et internationales. Les chiffres révèlent
            l'urgence d'une action technologique coordonnée.
          </p>
        </div>

        {/* Statistiques problèmes avec sources */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="card-nature text-center group relative">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>

              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-gradient-earth mb-2">
                  {problem.stat}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {problem.description}
              </p>

              <div className="text-sm text-muted-foreground italic border-t border-border pt-4 mb-4">
                {problem.detail}
              </div>

              {/* Source avec lien */}
              <div className="mt-auto">
                <a
                  href={problem.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-1">Source : {problem.source}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Analyse des causes détaillée */}
        <div className="bg-gradient-forest rounded-3xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Causes principales analysées
            </h3>
            <p className="text-lg opacity-90">
              Une convergence de facteurs socio-économiques compromet durablement l'écosystème
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-montserrat font-semibold text-lg mb-3">
                  {cause.title}
                </h4>
                <p className="text-sm opacity-90 mb-3">
                  {cause.description}
                </p>
                <p className="text-sm font-medium text-accent mb-2">
                  Impact : {cause.impact}
                </p>
                <p className="text-xs opacity-70">
                  {cause.source}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carte des aires protégées */}
        <div className="bg-gradient-to-r from-muted/50 to-background rounded-3xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Défis de surveillance actuels
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span>8 parcs nationaux + 6 réserves = 2,1M hectares</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent rounded-full mr-3"></div>
                  <span>Effectifs d'écogardes insuffisants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-destructive rounded-full mr-3"></div>
                  <span>500 km de pistes à maintenir (Comoé)</span>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <a
                    href="https://www.oipr.ci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    En savoir plus sur l'OIPR
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-canopy rounded-2xl p-6 text-white">
                <h4 className="font-montserrat font-semibold mb-4">
                  Financement mobilisé mais insuffisant
                </h4>
                <div className="space-y-2 text-sm">
                  <p>• 5,89 milliards FCFA (2014-2020) via FPRCI</p>
                  <p>• 15 millions USD Banque Mondiale (2018)</p>
                  <p>• Appui technique GIZ (2020-2024)</p>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs opacity-90">
                    Malgré ces investissements, la surveillance reste complexe
                    face aux 2,1 millions d'hectares à protéger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Éducation environnementale */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Éducation environnementale défaillante
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              L'étude de référence sur 150 élèves d'Abidjan révèle une pratique "ponctuelle"
              de l'éducation environnementale, créant une génération déconnectée de sa biodiversité.
            </p>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Paradoxe :</strong> L'UNICEF investit 106 milliards FCFA (2021-2025)
                dans l'innovation éducative, mais les programmes biodiversité restent inadaptés.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action urgence */}
        <div className="text-center">
          <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-full px-8 py-4">
            <AlertTriangle className="w-6 h-6 text-accent mr-3 animate-pulse" />
            <span className="text-accent font-medium">
              La technologie peut transformer cette surveillance et cette éducation
            </span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a
                href="https://www.agenceecofin.com/cacao/2102-95257-cote-d-ivoire-le-taux-annuel-de-deforestation-a-recule-a-26-000-hectares-entre-2019-et-2021-executif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Données déforestation 2024
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://www.wildchimps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Rapport espèces menacées
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;