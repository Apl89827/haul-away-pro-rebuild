
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center focus-enhanced">
          <img 
            src="/lovable-uploads/4e32cc5f-6030-4353-b20e-54e583de4c3d.png" 
            alt="HaulAway Pro Logo" 
            className="h-12 md:h-16 transition-transform hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/how-it-works" className="font-medium hover:text-brand-blue transition-colors focus-enhanced nav-link">
            How It Works
          </Link>
          <Link to="/services" className="font-medium hover:text-brand-blue transition-colors focus-enhanced nav-link">
            What We Take
          </Link>
          <Link to="/pricing" className="font-medium hover:text-brand-blue transition-colors focus-enhanced nav-link">
            Pricing
          </Link>
          <Link to="/service-areas" className="font-medium hover:text-brand-blue transition-colors focus-enhanced nav-link">
            Service Areas
          </Link>
          <Link to="/contact" className="font-medium hover:text-brand-blue transition-colors focus-enhanced nav-link">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:5138762858" className="flex items-center gap-2 font-medium text-brand-blue hover:text-brand-darkBlue transition-colors focus-enhanced">
            <Phone className="h-4 w-4" />
            (513) 876-2858
          </a>
          <Link to="/booking">
            <Button className="btn-primary enhanced-cta relative overflow-hidden">
              <span className="relative z-10">Check Availability</span>
              <div className="shimmer-effect"></div>
            </Button>
          </Link>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 touch-target focus-enhanced"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`hamburger-line top-0 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`hamburger-line top-2 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`hamburger-line top-4 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t`}>
        <div className="container-custom py-4">
          <div className="flex flex-col gap-1">
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
                className={`py-3 px-4 font-medium hover:text-brand-blue hover:bg-brand-lightBlue/50 transition-all touch-target focus-enhanced rounded-md ${
                  isMobileMenuOpen ? `animate-stagger-${index + 1}` : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className={`flex flex-col gap-4 pt-4 border-t mt-2 ${
              isMobileMenuOpen ? 'animate-stagger-6' : ''
            }`}>
              <a
                href="tel:5138762858"
                className="flex items-center gap-2 font-medium text-brand-blue py-3 px-4 hover:bg-brand-lightBlue/50 transition-all touch-target focus-enhanced rounded-md"
              >
                <Phone className="h-4 w-4" />
                (513) 876-2858
              </a>
              <Link to="/booking" className="px-4">
                <Button className="btn-primary w-full touch-target enhanced-cta relative overflow-hidden">
                  <span className="relative z-10">Check Availability</span>
                  <div className="shimmer-effect"></div>
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
