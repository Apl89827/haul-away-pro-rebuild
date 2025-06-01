
import React from "react";

const ContactForm = () => {
  const handlePortalClick = () => {
    window.open('https://client.housecallpro.com/customer_portal/request-link?token=136e206d919041d38f3b1a859943db4c', '_blank');
  };

  return (
    <section className="section bg-white">
      <div className="container-custom h-full flex flex-col justify-center">
        <h2 className="heading-lg mb-8">Send Us a Message</h2>
        
        {/* Returning Customer Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Returning Customer?</h3>
          <p className="text-gray-600 mb-4">Access your customer portal to view past services, schedule follow-ups, or manage your account.</p>
          <button 
            onClick={handlePortalClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            LOG IN TO PORTAL
          </button>
        </div>
        
        {/* HouseCall Pro Lead Capture Widget */}
        <div className="w-full">
          <iframe 
            style={{ border: 'none' }} 
            id="hcp-lead-iframe" 
            src="https://book.housecallpro.com/lead-form/HaulAway-Pro/dee3e7d375aa4e118b33b513dc05fed9"
            className="w-full min-h-[600px]"
            title="Contact Form"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
