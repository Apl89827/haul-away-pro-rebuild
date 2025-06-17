import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const PricingTestimonials = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    location: "Mason, OH",
    rating: 5,
    text: "The upfront pricing was exactly what we paid - no surprises! They hauled away our entire basement renovation debris for much less than I expected.",
    service: "1/2 Truck Load"
  }, {
    name: "Mike Davis",
    location: "West Chester, OH",
    rating: 5,
    text: "Called in the morning and they came that afternoon. The price was fair and included everything - even swept up afterwards!",
    service: "1/4 Truck Load"
  }, {
    name: "Jennifer Chen",
    location: "Clifton, OH",
    rating: 5,
    text: "Best junk removal experience ever. They explained the pricing clearly and worked efficiently. Will definitely use again.",
    service: "3/4 Truck Load"
  }];
  return <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-brand-darkBlue">What Our Customers Say About Our Pricing</h2>
          <p className="text-lg text-gray-600">
            Real feedback from Cincinnati area customers about our transparent, 
            fair pricing and professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-brand-blue opacity-20" />
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-brand-darkBlue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-brand-blue font-medium mt-1">
                    Service: {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-brand-lightBlue px-4 py-2 rounded-lg">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-brand-darkBlue">5 Stars</span>
            <span className="text-gray-600">on Google</span>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingTestimonials;