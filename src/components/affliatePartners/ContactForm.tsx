import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, User, Phone, Building, Globe, ArrowRight } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const scriptURL = "https://script.google.com/macros/s/AKfycbyUNduunrWZH1m9ftwsdS19ythydCOg470BFXo6I4kgHwSgDxRJnLW8YG0R72c7QU_I/exec";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    programType: "",
    portfolioSize: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
      });

      toast({
        title: "Form Submitted!",
        description: "Thank you! We'll be in touch soon."
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        programType: "",
        portfolioSize: ""
      });
    } catch (error) {
      console.error("Error!", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-zinc-950">
              Apply to <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">Partner with Us</span>
            </h2>
            <p className="mt-3 text-gray-600">Let's unlock efficient capital access for your cohort</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 h-2"></div>
            <div className="p-8">
              <form name="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500" 
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500" 
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500" 
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    name="organization" 
                    placeholder="Organization Name" 
                    value={formData.organization}
                    onChange={handleChange}
                    required 
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500" 
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                  <Select 
                    name="programType"
                    value={formData.programType}
                    onValueChange={(value) => handleSelectChange("programType", value)}
                  >
                    <SelectTrigger className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500">
                      <SelectValue placeholder="Type of Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="incubator">Incubator</SelectItem>
                      <SelectItem value="accelerator">Accelerator</SelectItem>
                      <SelectItem value="venture-studio">Venture Studio</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    name="portfolioSize" 
                    placeholder="Number of Startups in Portfolio" 
                    value={formData.portfolioSize}
                    onChange={handleChange}
                    required 
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-purple-500" 
                  />
                </div>
                
                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-[#ef3e25] hover:bg-[#d53720] text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Your information is secure and will only be used to contact you about partnership opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
