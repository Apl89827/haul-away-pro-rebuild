
import React from "react";
import GoogleReviewsCarousel from "./GoogleReviewsCarousel";

const TestimonialsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers throughout Cincinnati.
          </p>
        </div>

        <GoogleReviewsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
