import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handlePortalClick = () => {
    window.open('https://client.housecallpro.com/customer_portal/request-link?token=136e206d919041d38f3b1a859943db4c', '_blank');
  };

  return (
    <footer className="bg-brand-darkBlue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Haul Away Pro</h3>
            <p className="mb-4 text-white/80">
              Cincinnati's top-rated junk removal service with over 15 years of experience.
              Fast, fair, and eco-friendly.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  What We Take
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/services/furniture-junk-removal" className="hover:text-white transition-colors">
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link to="/services/appliance-removal" className="hover:text-white transition-colors">
                  Appliance Removal
                </Link>
              </li>
              <li>
                <Link to="/services/electronic-waste-removal" className="hover:text-white transition-colors">
                  Electronics Recycling
                </Link>
              </li>
              <li>
                <Link to="/services/outdoor-item-removal" className="hover:text-white transition-colors">
                  Outdoor Item Removal
                </Link>
              </li>
              <li>
                <Link to="/services/estate-cleanout-services" className="hover:text-white transition-colors">
                  Estate Cleanouts
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-brand-green" />
                <a 
                  href="tel:5137128077" 
                  className="hover:text-white transition-colors"
                >
                  (513) 712-8077
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-brand-green" />
                <span>contact@haulawaypro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-brand-green" />
                <span>
                  Mon-Sun: 7am-9pm
                </span>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Link to="/booking">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white w-full">
                  Check Availability
                </Button>
              </Link>
              <button 
                onClick={handlePortalClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full w-full transition-colors text-sm"
              >
                Customer Portal
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center sm:flex sm:justify-between text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Haul Away Pro. All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
