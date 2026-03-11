import HeroBanner from "@/components/HeroBanner";
import WelcomeCard from "@/components/WelcomeCard";
import JourneyStepper from "@/components/JourneyStepper";
import EssentialResources from "@/components/EssentialResources";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <WelcomeCard />
      <JourneyStepper />
      <EssentialResources />
    </div>
  );
};

export default Index;
