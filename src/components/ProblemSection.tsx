import { AlertTriangle, TrendingDown, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12 text-accent" />,
      stat: "80%",
      title: "Perte forestière",
      description: "80% de la couverture forestière perdue en 60 ans",
      detail: "De 16 millions d'hectares à seulement 3 millions aujourd'hui"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-destructive" />,
      stat: "200",
      title: "Éléphants restants", 
      description: "De 10,000 à 200 éléphants en quelques décennies",
      detail: "Braconnage intensif et destruction d'habitat"
    },
    {
      icon: <Users className="w-12 h-12 text-muted-foreground" />,
      stat: "70%",
      title: "Jeunes déconnectés",
      description: "70% des jeunes ne reconnaissent pas 5 espèces locales",
      detail: "Perte de connexion avec la nature ancestrale"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Une biodiversité en <span className="text-destructive">danger</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La Côte d'Ivoire fait face à une crise environnementale sans précédent qui nécessite des solutions technologiques innovantes. 
            Les méthodes traditionnelles de surveillance ne suffisent plus face à l'ampleur du défi.
          </p>
        </div>

        {/* Carte interactive de la Côte d'Ivoire */}
        <div className="mb-16 relative">
          <div className="bg-gradient-forest rounded-3xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-32 h-24 bg-destructive/30 rounded-lg animate-pulse-soft"></div>
              <div className="absolute top-8 right-8 w-28 h-20 bg-destructive/40 rounded-lg animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 left-1/3 w-24 h-16 bg-destructive/35 rounded-lg animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="relative z-10">
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              Défis de surveillance actuels
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Zones vastes, accès difficile, moyens limités
            </p>
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-destructive rounded-full mr-3 animate-pulse"></div>
              <span>Surveillance manuelle insuffisante</span>
            </div>
            </div>
          </div>
        </div>

        {/* Statistiques problèmes */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="card-nature text-center group">
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
              
              <div className="text-sm text-muted-foreground italic border-t border-border pt-4">
                {problem.detail}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action urgence */}
        <div className="text-center mt-16">
            <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-full px-8 py-4">
              <AlertTriangle className="w-6 h-6 text-accent mr-3 animate-pulse" />
              <span className="text-accent font-medium">
                La technologie peut révolutionner la protection de notre biodiversité
              </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;