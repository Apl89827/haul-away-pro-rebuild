import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Clock, Shield, Truck, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Declare HCPWidget for TypeScript
declare global {
  interface Window {
    HCPWidget: {
      openModal: () => void;
    };
  }
}
const BookingPage = () => {
  const benefits = [{
    icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-brand-green" />,
    title: "Same Day Service",
    description: "Available most days"
  }, {
    icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-brand-green" />,
    title: "Fully Insured",
    description: "Complete protection"
  }, {
    icon: <Truck className="h-5 w-5 md:h-6 md:w-6 text-brand-green" />,
    title: "We Load Everything",
    description: "No lifting required"
  }];
  const handleBookingClick = () => {
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    } else {
      console.error('HouseCall Pro widget not loaded');
    }
  };
  return <>
      <Header />
      <main>
        {/* Mobile-optimized Hero Section */}
        <section className="pt-20 md:pt-32 pb-8 md:pb-16 bg-gradient-to-b from-brand-lightBlue to-white">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-4 md:mb-6 text-brand-blue">Book Your Junk Removal</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Get instant confirmation and upfront pricing. Most appointments available same day.
            </p>
            
            {/* Prominent mobile CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6">
              <a href="tel:5137128077" className="w-full sm:w-auto">
                <Button className="btn-primary w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now - Fast Booking
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              Or use the booking form below
            </p>
          </div>
        </section>

        {/* Compact Benefits Bar */}
        <section className="py-4 md:py-6 bg-white border-b">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3 justify-center md:justify-center p-3 md:p-0">
                  {benefit.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Booking Widget Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                <h2 className="heading-lg text-center mb-6 md:mb-8">Don't Like Talking On The Phone?
We Got You Covered. </h2>
                
                {/* HouseCall Pro Booking Widget */}
                <div className="text-center">
                  <button data-token="67280a43a10a4cc685303d348632a559" data-orgname="HaulAway-Pro" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" onClick={handleBookingClick}>
                    Book Online Now
                  </button>
                  
                  <p className="text-gray-600 mt-4 text-sm md:text-base">
                    Click above to open our secure booking system and schedule your junk removal service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-optimized process steps */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-8 md:mb-12">What Happens Next?</h2>
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-4xl mx-auto">
              {[{
              step: "1",
              title: "Quick Confirmation",
              description: "Get instant confirmation and we'll call within 30 minutes to finalize details."
            }, {
              step: "2",
              title: "We Arrive On Time",
              description: "Our professional team arrives with all equipment needed for your junk removal."
            }, {
              step: "3",
              title: "Job Complete",
              description: "Upfront quote, professional loading, cleanup, and responsible disposal."
            }].map((item, index) => <div key={index} className="text-center">
                  <div className="bg-brand-blue w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-4 md:mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Compact trust section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-6 md:mb-8">Why Choose Haul Away Pro</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
                {["15+ years trusted Cincinnati service", "Transparent pricing, no hidden fees", "Eco-friendly disposal practices", "Licensed, insured professional crew", "Same-day service most days", "We handle all loading and cleanup"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-brand-green mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default BookingPage;