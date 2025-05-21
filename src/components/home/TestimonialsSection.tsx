
import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      location: "West Chester",
      quote: "Fantastic service from start to finish! The team was on time, professional, and cleared away everything quickly. The price was exactly what they quoted - no surprises.",
      rating: 5
    },
    {
      name: "Mike D.",
      location: "Mason",
      quote: "I needed an old refrigerator and some furniture removed ASAP. Haul Away Pro came the same day I called and took care of everything. Highly recommended!",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Springdale",
      quote: "We used Haul Away Pro for our estate cleanout and they were amazing. Compassionate, efficient, and they even helped us identify items that could be donated.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current text-yellow-500" />
      ));
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers throughout Cincinnati.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 card-shadow"
            >
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
