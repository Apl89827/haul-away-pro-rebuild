
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

        <div className="bg-white rounded-lg p-8 text-center">
          <div className="bg-brand-lightBlue rounded-lg p-12 mb-6">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-lg text-gray-600">
              Interactive service area map coming soon!
            </p>
          </div>
          <p className="text-gray-600">
            In the meantime, call us at <strong>(513) 876-2858</strong> to confirm 
            service availability in your specific location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;
