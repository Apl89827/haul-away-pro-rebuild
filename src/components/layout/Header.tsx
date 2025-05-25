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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/4e32cc5f-6030-4353-b20e-54e583de4c3d.png" 
            alt="HaulAway Pro Logo" 
            className="h-12 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-brand-blue transition-colors">
            How It Works
          </Link>
          <Link to="/services" className="font-medium hover:text-brand-blue transition-colors">
            What We Take
          </Link>
          <Link to="/pricing" className="font-medium hover:text-brand-blue transition-colors">
            Pricing
          </Link>
          <Link to="/service-areas" className="font-medium hover:text-brand-blue transition-colors">
            Service Areas
          </Link>
          <Link to="/contact" className="font-medium hover:text-brand-blue transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:5138762858" className="flex items-center gap-2 font-medium text-brand-blue hover:text-brand-darkBlue transition-colors">
            <Phone className="h-4 w-4" />
            (513) 876-2858
          </a>
          <Link to="/booking">
            <Button className="btn-primary">Check Availability</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container-custom flex flex-col gap-4">
            <Link
              to="/"
              className="py-2 font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/services"
              className="py-2 font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              What We Take
            </Link>
            <Link
              to="/pricing"
              className="py-2 font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/service-areas"
              className="py-2 font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className="py-2 font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 pt-4 border-t">
              <a
                href="tel:5138762858"
                className="flex items-center gap-2 font-medium text-brand-blue"
              >
                <Phone className="h-4 w-4" />
                (513) 876-2858
              </a>
              <Link to="/booking">
                <Button className="btn-primary w-full">Check Availability</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
