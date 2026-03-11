import HeroBanner from "@/components/HeroBanner";
import WelcomeCard from "@/components/WelcomeCard";
import JourneyStepper from "@/components/JourneyStepper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <WelcomeCard />
      <JourneyStepper />
    </div>
  );
};

export default Index;
