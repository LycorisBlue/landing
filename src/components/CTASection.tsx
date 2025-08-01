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
  Heart,
  Mail,
  MessageCircle,
  MapPin,
  Code,
  Palette,
  Cpu
} from "lucide-react";

const JoinAdventureSection = () => {
  const targetGroups = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Gouvernement & Institutions",
      subtitle: "Devenez partenaire pilote",
      cta: "Planifier un échange",
      urgency: "Partenaires fondateurs recherchés"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "ONG & Associations",
      subtitle: "Testez les solutions terrain",
      cta: "Rejoindre les tests",
      urgency: "Phase de co-création"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Éducateurs & Écoles",
      subtitle: "Intégrez l'innovation pédagogique",
      cta: "Accéder à la beta",
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

              <div className="pt-8 p-6">
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

                <p className="text-muted-foreground mb-6">
                  {group.subtitle}
                </p>

                {/* CTA Button */}
                <Button
                  className={`w-full group/btn ${index === 0 ? 'btn-forest' :
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
      <div className="container mx-auto px-6 mb-16">
        <Card className="bg-gradient-forest text-white p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Restez informé de nos avancées
            </h3>

            <p className="text-lg opacity-90 mb-8">
              Recevez les actualités du projet et les opportunités de collaboration
              en avant-première.
            </p>

            {/* Formulaire inline */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                placeholder="Votre email professionnel"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                S'inscrire
              </Button>
            </div>

            {/* Stats engagement */}
            <div className="flex justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>500+ abonnés</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Newsletter mensuelle</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Section Équipe MEDEV GROUP */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-muted/30 to-background rounded-3xl p-8 md:p-12">
          {/* Header équipe */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-medium text-sm">L'équipe derrière BioGuard-CI</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Développé par <span className="text-gradient-forest">MEDEV GROUP</span>
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Une entreprise fondée par cinq professionnels aux expertises complémentaires,
              plaçant la technologie au service de l'impact social et de l'innovation durable.
            </p>
          </div>

          {/* Membres de l'équipe - Grid compact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Edgar Kouassi */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-foreground">Edgar Kouassi</h4>
                  <p className="text-xs text-primary">CEO | Géomaticien & Ingénieur SIG</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Spécialisé dans le traitement de données géospatiales et la télédétection.
              </p>
            </div>

            {/* Medi Fulgence */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-accent/10 rounded-lg mr-3">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-foreground">Medi Fulgence</h4>
                  <p className="text-xs text-accent">CTO | Développeur Full Stack</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Architecte logiciel en charge de la performance et sécurité des applications.
              </p>
            </div>

            {/* Daniel Boua */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                  <Palette className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-foreground">Daniel Boua</h4>
                  <p className="text-xs text-secondary">CPO | Designer UI/UX</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Conçoit des interfaces modernes et centrées sur l'utilisateur.
              </p>
            </div>

            {/* Sanlé Valent */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-foreground">Sanlé Valent</h4>
                  <p className="text-xs text-primary">COO | Chef de projet IT</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Coordonne les projets et définit la stratégie de communication digitale.
              </p>
            </div>

            {/* Tiéné Paul */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-accent/10 rounded-lg mr-3">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-foreground">Tiéné Paul</h4>
                  <p className="text-xs text-accent">Lead IoT | Électrotechnicien</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Solutions techniques IoT alliant matériel et logiciel connectés.
              </p>
            </div>

            {/* Logo MEDEV placeholder */}
            <div className="bg-gradient-forest rounded-xl p-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-montserrat font-bold mb-2">MEDEV</div>
                <div className="text-sm opacity-90">GROUP</div>
                <div className="text-xs opacity-70 mt-2">Innovation africaine</div>
              </div>
            </div>
          </div>

          {/* Message de mission */}
          <div className="text-center">
            <p className="text-muted-foreground italic max-w-3xl mx-auto">
              "Ensemble, nous avançons avec une vision orientée vers un changement concret,
              porté par l'innovation et la quête de solutions durables qui façonnent l'avenir de l'Afrique."
            </p>
          </div>
        </div>
      </div>

      {/* Contact direct */}
      <div className="text-center">
        <p className="text-muted-foreground mb-6">
          Une question spécifique ? Besoin d'une présentation personnalisée ?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="outline" className="group">
            <Calendar className="mr-2 w-4 h-4" />
            Réserver un créneau
          </Button>

          <Button variant="outline" className="group">
            <Download className="mr-2 w-4 h-4" />
            Télécharger le pitch
          </Button>
        </div>

        {/* Contact direct */}
        <div className="bg-muted/30 rounded-lg p-4 max-w-sm mx-auto">
          <div className="flex items-center justify-center text-sm">
            <Mail className="w-4 h-4 mr-2" />
            <span>contact@bioguard-ci.org</span>
          </div>
        </div>
      </div>



      {/* Timer countdown effect (decorative) */}
      <div className="absolute bottom-8 right-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hidden md:block">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">15</div>
          <div className="text-xs text-muted-foreground">jours restants</div>
          <div className="text-xs text-muted-foreground">inscription pilote</div>
        </div>
      </div>
    </section>
  );
};

export default JoinAdventureSection;