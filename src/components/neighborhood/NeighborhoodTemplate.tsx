
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Truck } from 'lucide-react';

interface NeighborhoodTemplateProps {
  neighborhoodName: string;
}

const NeighborhoodTemplate = ({ neighborhoodName }: NeighborhoodTemplateProps) => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-lightBlue to-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">
                Junk Removal in {neighborhoodName}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional junk removal services in {neighborhoodName}. Same-day pickup available. 
                Serving residential and commercial customers with eco-friendly disposal.
              </p>
              <div className="flex items-center justify-center gap-2 text-brand-blue mb-8">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Proudly serving {neighborhoodName} since 2008</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button className="btn-primary text-lg">
                    Book Junk Removal
                  </Button>
                </Link>
                <a 
                  href="tel:5138762858" 
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-blue text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call (513) 876-2858
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Benefits */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-lg mb-4">Why Choose Haul Away Pro in {neighborhoodName}?</h2>
              <p className="text-lg text-gray-600">
                We understand the unique needs of {neighborhoodName} residents and businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-lightBlue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times for {neighborhoodName} customers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-lightBlue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Team</h3>
                <p className="text-gray-600">Familiar with {neighborhoodName} streets and access</p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-lightBlue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Responsible disposal serving {neighborhoodName}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="section bg-brand-gray">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8 text-center">Junk Removal Services in {neighborhoodName}</h2>
              <div className="bg-white rounded-lg p-8">
                <p className="text-lg text-gray-600 text-center">
                  Content for {neighborhoodName} junk removal services will be added here.
                  This section will include specific information about services, pricing, 
                  and local details for {neighborhoodName} residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-blue py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-white mb-6">
                Ready for Junk Removal in {neighborhoodName}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact Haul Away Pro today for fast, reliable junk removal service in {neighborhoodName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button className="btn-secondary text-lg">
                    Book Online Now
                  </Button>
                </Link>
                <a 
                  href="tel:5138762858" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call (513) 876-2858
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NeighborhoodTemplate;
