
import React from "react";

const ServiceAreasMap = () => {
  return (
    <section className="section bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Service Area Map</h2>
          <p className="text-lg text-gray-600">
            Our coverage area spans across Greater Cincinnati, providing convenient 
            junk removal services to both residential and commercial customers.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472379.22106238076!2d-84.3982185!3d39.37692295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dc6f226382aa093%3A0xbe7b2fe630d2e4b3!2sHaulAway%20Pro!5e1!3m2!1sen!2sus!4v1748813812965!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
              title="HaulAway Pro Service Area Map"
            />
          </div>
          <p className="text-center text-gray-600 mt-6">
            Call us at <strong>(513) 712-8077</strong> to confirm 
            service availability in your specific location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;
