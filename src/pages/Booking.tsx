
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Clock, Shield, Truck, CheckCircle } from 'lucide-react';

const BookingPage = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-brand-green" />,
      title: "Same Day Service",
      description: "Available most days"
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-green" />,
      title: "Fully Insured",
      description: "Complete protection"
    },
    {
      icon: <Truck className="h-6 w-6 text-brand-green" />,
      title: "We Load Everything",
      description: "No lifting required"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-brand-lightBlue to-white">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6 text-brand-blue">Check Availability & Book Online</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-8">
              Select your preferred date and time for junk removal service. 
              Get instant confirmation and upfront pricing.
            </p>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-center">
                  {benefit.icon}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Widget Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="heading-lg text-center mb-8">Schedule Your Service</h2>
                
                {/* Placeholder for CRM Widget */}
                <div className="min-h-[600px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      CRM Booking Widget Goes Here
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Replace this placeholder with your online booking widget from your CRM system.
                    </p>
                    <div className="bg-white p-4 rounded border text-sm text-gray-500">
                      Insert your CRM widget code here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">1</div>
                <h3 className="text-xl font-semibold mb-4">Confirmation Call</h3>
                <p className="text-gray-600">
                  We'll call you within 30 minutes to confirm your appointment 
                  and discuss any special requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">2</div>
                <h3 className="text-xl font-semibold mb-4">We Arrive On Time</h3>
                <p className="text-gray-600">
                  Our professional team arrives at your scheduled time with 
                  all the equipment needed for your junk removal.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">3</div>
                <h3 className="text-xl font-semibold mb-4">Job Complete</h3>
                <p className="text-gray-600">
                  We provide an upfront quote, load everything, clean up, 
                  and handle all disposal responsibly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-8">Why Cincinnati Chooses Haul Away Pro</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>Over 15 years of trusted service in Cincinnati</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>Transparent, upfront pricing with no hidden fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>Eco-friendly disposal and recycling practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>Licensed, insured, and professional crew</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>Same-day service available most days</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-1 shrink-0" />
                  <span>We handle all loading and cleanup</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
