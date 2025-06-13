import Navbar from "@/components/affliatePartners/Navbar";
import HeroSection from "@/components/affliatePartners/HeroSection";
import WhyUsSection from "@/components/affliatePartners/WhyUsSection";
import DashboardSection from "@/components/affliatePartners/DashboardSection";
import SupportSection from "@/components/affliatePartners/SupportSection";
import SuccessSection from "@/components/affliatePartners/SuccessSection";
import ContactForm from "@/components/affliatePartners/ContactForm";
import Footer from "@/components/affliatePartners/Footer";

const AffliatePartners = () => {
  return (
    <div className="min-h-screen font-inter pt-32">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <DashboardSection />
      <SupportSection />
      <SuccessSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AffliatePartners;
