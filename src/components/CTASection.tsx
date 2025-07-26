import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Users, 
  Building,
  Clock,
  AlertTriangle,
  Heart
} from "lucide-react";

const CTASection = () => {
  const targetGroups = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Gouvernement & Institutions",
      subtitle: "Déployez à l'échelle nationale",
      cta: "Devenir partenaire pilote",
      description: "Collaboration pour développer et tester nos solutions sur le terrain",
      urgency: "Partenaires fondateurs recherchés"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "ONG & Associations",
      subtitle: "Renforcez vos actions terrain",
      cta: "Participer au projet",
      description: "Participez au développement et aux tests des prototypes",
      urgency: "Phase de co-création"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Éducateurs & Écoles",
      subtitle: "Sensibilisez la nouvelle génération",
      cta: "Recevoir la beta",
      description: "Accès anticipé à l'application en développement + ressources pédagogiques",
      urgency: "Beta testeurs recherchés"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Urgence header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3 mb-8">
          <AlertTriangle className="w-5 h-5 text-destructive mr-3 animate-pulse" />
          <span className="text-destructive font-medium">
            Chaque jour compte pour notre biodiversité
          </span>
          <Clock className="w-5 h-5 text-destructive ml-3" />
        </div>

        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
          Participez au développement de <span className="text-gradient-forest">BioGuard-CI</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Rejoignez-nous pour construire ensemble l'avenir de la conservation technologique 
          en Côte d'Ivoire et créer un impact durable.
        </p>
      </div>

      {/* Multi-CTA par audience */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {targetGroups.map((group, index) => (
            <Card key={index} className="card-nature text-center relative group">
              {/* Badge urgence */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground px-3 py-1 text-xs">
                  {group.urgency}
                </Badge>
              </div>

              <div className="pt-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-muted to-background border border-border group-hover:scale-110 transition-transform duration-300">
                    {group.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                  {group.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {group.subtitle}
                </p>
                
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {group.description}
                </p>

                {/* CTA Button */}
                <Button 
                  className={`w-full group/btn ${
                    index === 0 ? 'btn-forest' : 
                    index === 1 ? 'btn-earth' : 
                    'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                >
                  {group.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter/Contact rapide */}
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-forest text-white p-8 md:p-12 text-center relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full animate-pulse-soft"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Restez informé de nos avancées
            </h3>
            
            <p className="text-lg opacity-90 mb-8">
              Recevez les dernières actualités de la conservation en Côte d'Ivoire 
              et les mises à jour de nos solutions IA.
            </p>

            {/* Formulaire inline */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Votre email professionnel"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                S'inscrire
              </Button>
            </div>

            {/* Stats engagement */}
            <div className="flex justify-center items-center gap-8 mt-8 text-sm opacity-80">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>2,500+ abonnés</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Newsletter mensuelle</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact direct */}
      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          Une question spécifique ? Besoin d'une démo personnalisée ?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="group">
            <Calendar className="mr-2 w-4 h-4" />
            Réserver un créneau
          </Button>
          
          <Button variant="outline" className="group">
            <Download className="mr-2 w-4 h-4" />
            Documentation technique
          </Button>
        </div>
      </div>

      {/* Timer countdown effect (decorative) */}
      <div className="absolute bottom-8 right-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hidden md:block">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">3</div>
          <div className="text-xs text-muted-foreground">jours restants</div>
          <div className="text-xs text-muted-foreground">inscription pilote</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;