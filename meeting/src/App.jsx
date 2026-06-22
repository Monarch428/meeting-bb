import HeroSection from "./components/HeroSection";
import ShiftSection from "./components/ShiftSection";
import InvisibleSection from "./components/InvisibleSection";
import OutcomesSection from "./components/OutcomesSection";
import ForYouSection from "./components/ForYouSection";
import HostSection from "./components/HostSection";
import RegisterSection from "./components/RegisterSection";
import Footer from "./components/Footer";
import RegistrationPopup  from "./components/RegistrationPopup"; 

function App() {
  return (
    <div>
      <HeroSection />
      <ShiftSection />
      <InvisibleSection />
      <OutcomesSection />
      <ForYouSection />
      <HostSection />
      <RegisterSection />
      <RegistrationPopup />
      <Footer />
    </div>
  );
}

export default App;