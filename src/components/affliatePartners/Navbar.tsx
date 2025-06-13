import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img
                src="https://debt.myprobuddy.com/lovable-uploads/7b22b45a-6860-47dd-b4d2-6f0dcf222efa.png"
                alt="MyProBuddy Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">MyProBuddy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#why-us" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Why Us
            </a>
            <a 
              href="#dashboard" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </a>
            <a 
              href="#support" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </a>
            <a 
              href="#contact-us" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Success Stories
            </a>
          </div>
          
          <Button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#ef3e25] hover:bg-[#d53720] text-white font-medium"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
