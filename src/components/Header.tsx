import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">Sinegy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open("https://exchange.sinegy.com", "_blank")}
            >
              Trade Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => window.open("https://exchange.sinegy.com", "_blank")}
            >
              Trade Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;