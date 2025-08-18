import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import signalyzeLogo from "@/assets/signalyze-logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={signalyzeLogo} 
              alt="Signalyze logo"
              className="h-8 w-auto"
              data-testid="img-nav-logo"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('hero-cta')}
              className="bg-accent hover:bg-orange-600 text-white btn-hover"
              data-testid="nav-book-demo"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
