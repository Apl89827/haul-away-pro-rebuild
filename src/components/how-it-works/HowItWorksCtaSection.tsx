import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, CheckCircle } from "lucide-react";
const HowItWorksCtaSection = () => {
  return <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Experience the Haul Away Pro Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied Cincinnati customers who've chosen 
            our professional, eco-friendly junk removal service.
          </p>
          
          {/* Quick benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Free On-Site Estimates", "Same-Day Service Available", "Fully Insured & Licensed", "Eco-Friendly Disposal"].map((benefit, index) => <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>)}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-secondary text-lg px-8 py-4 bg-brand-green hover:bg-brand-green/90">
                <Calendar className="h-5 w-5" />
                Book Online Now
              </Button>
            </Link>
            <a href="tel:5137128077" className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-4 px-8 rounded-md hover:bg-white/90 transition-colors text-lg">
              <Phone className="h-5 w-5" />
              Call (513) 712-8077
            </a>
          </div>
          
          <p className="text-white/70 text-sm mt-6">No obligation • Free estimates • Serving Greater Cincinnati</p>
        </div>
      </div>
    </section>;
};
export default HowItWorksCtaSection;