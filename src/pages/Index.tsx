import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessesSection from "@/components/ProcessesSection";
import PartnerProgram from "@/components/PartnerProgram";
import PartnerForm from "@/components/PartnerForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <ProcessesSection />
      <PartnerProgram />
      <PartnerForm />
      <Footer />
    </div>
  );
};

export default Index;
