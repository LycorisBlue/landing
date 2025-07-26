import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - L'IA au service de la biodiversité ivoirienne */}
      <Hero />
      
      {/* Problem Section - Une biodiversité en danger */}
      <ProblemSection />
      
      {/* Solution Section - Les 3 modules BioGuard-CI */}
      <SolutionSection />
      
      {/* Results Section - Témoignages et métriques */}
      <ResultsSection />
      
      {/* CTA Section - Appel à l'action multi-audiences */}
      <CTASection />
    </div>
  );
};

export default Index;
