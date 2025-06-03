
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  const handlePortalClick = () => {
    window.open('https://client.housecallpro.com/customer_portal/request-link?token=136e206d919041d38f3b1a859943db4c', '_blank');
  };

  return (
    <section className="section bg-brand-darkBlue text-white">
      <div className="container-custom h-full flex flex-col justify-center">
        <h2 className="heading-lg mb-8">Get In Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 mt-1 text-brand-green" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a 
                href="tel:5137128077" 
                className="text-white/90 hover:text-white transition-colors"
              >
                (513) 712-8077
              </a>
              <p className="text-sm text-white/70">Call for immediate assistance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 mt-1 text-brand-green" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-white/90">contact@haulawaypro.com</p>
              <p className="text-sm text-white/70">We'll respond within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 mt-1 text-brand-green" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <div className="text-white/90 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 mt-1 text-brand-green" />
            <div>
              <h3 className="font-semibold mb-1">Service Area</h3>
              <p className="text-white/90">Greater Cincinnati Area</p>
              <p className="text-sm text-white/70">Including Butler and Warren Counties</p>
            </div>
          </div>
        </div>

        {/* Returning Customer Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <h3 className="text-lg font-semibold text-white mb-3">Returning Customer?</h3>
          <p className="text-white/80 mb-4">Access your customer portal to view past services, schedule follow-ups, or manage your account.</p>
          <button 
            onClick={handlePortalClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors w-full"
          >
            LOG IN TO PORTAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
