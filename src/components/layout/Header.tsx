
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? "bg-white/95 shadow-lg py-2 border-b border-gray-100" 
          : "bg-white/90 py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/4e32cc5f-6030-4353-b20e-54e583de4c3d.png" 
            alt="HaulAway Pro Logo" 
            className={`transition-all duration-300 hover:scale-105 bg-transparent ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            }`}
            style={{ backgroundColor: 'transparent' }}
          />
        </Link>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: "/how-it-works", label: "How It Works" },
            { to: "/services", label: "What We Take" },
            { to: "/pricing", label: "Pricing" },
            { to: "/service-areas", label: "Service Areas" },
            { to: "/contact", label: "Contact" }
          ].map((item) => (
            <Link 
              key={item.to}
              to={item.to} 
              className="font-medium text-gray-700 hover:text-brand-blue transition-all duration-300 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="tel:5138762858" 
            className="flex items-center gap-2 font-medium text-brand-blue hover:text-brand-darkBlue transition-all duration-300 group relative overflow-hidden rounded-lg px-3 py-2"
          >
            <Phone className="h-4 w-4 transform transition-transform group-hover:rotate-12" />
            <span className="relative z-10">(513) 876-2858</span>
            <div className="absolute inset-0 bg-brand-lightBlue/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <Link to="/booking" className="group">
            <Button className="btn-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">Check Availability</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
            </Button>
          </Link>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`}
            />
            <X 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container-custom py-4">
          <div className="flex flex-col gap-4">
            {[
              { to: "/how-it-works", label: "How It Works" },
              { to: "/services", label: "What We Take" },
              { to: "/pricing", label: "Pricing" },
              { to: "/service-areas", label: "Service Areas" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 font-medium hover:text-brand-blue transition-all duration-300 hover:bg-brand-lightBlue/30 rounded-lg px-3 transform hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
              <a
                href="tel:5138762858"
                className="flex items-center gap-2 font-medium text-brand-blue py-3 px-3 hover:bg-brand-lightBlue/30 rounded-lg transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                (513) 876-2858
              </a>
              <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="btn-primary w-full transform transition-all duration-300 hover:scale-105">
                  Check Availability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
