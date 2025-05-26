
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
          isScrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img 
              src="/lovable-uploads/4e32cc5f-6030-4353-b20e-54e583de4c3d.png" 
              alt="HaulAway Pro Logo" 
              className="h-10 md:h-14" 
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/how-it-works" className="font-medium hover:text-brand-blue transition-colors">
              How It Works
            </Link>
            <Link to="/services" className="font-medium hover:text-brand-blue transition-colors">
              Services
            </Link>
            <Link to="/projects" className="font-medium hover:text-brand-blue transition-colors">
              Projects
            </Link>
            <Link to="/pricing" className="font-medium hover:text-brand-blue transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="font-medium hover:text-brand-blue transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="tel:5138762858" className="flex items-center gap-2 font-medium text-brand-blue hover:text-brand-darkBlue transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">(513) 876-2858</span>
            </a>
            <a href="tel:5138762858">
              <Button className="btn-secondary text-sm lg:text-base">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-semibold text-lg">Menu</span>
              <button onClick={closeMobileMenu} className="p-2 -mr-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col">
              <Link
                to="/booking"
                className="mobile-menu-item bg-brand-green text-white font-semibold"
                onClick={closeMobileMenu}
              >
                Check Availability
              </Link>
              <a
                href="tel:5138762858"
                className="mobile-menu-item flex items-center gap-3 text-brand-blue font-semibold"
                onClick={closeMobileMenu}
              >
                <Phone className="h-5 w-5" />
                Call (513) 876-2858
              </a>
              <Link
                to="/how-it-works"
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>
              <Link
                to="/services"
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                to="/pricing"
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
