
import React from "react";

const ContactForm = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom h-full flex flex-col justify-center">
        <h2 className="heading-lg mb-8">Send Us a Message</h2>
        
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
