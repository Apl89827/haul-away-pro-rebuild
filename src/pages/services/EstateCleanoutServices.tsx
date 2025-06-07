
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Home, Heart, Users } from 'lucide-react';

const EstateCleanoutServices = () => {
  const cleanoutServices = [
    "Complete home cleanouts",
    "Estate property clearing",
    "Office furniture and equipment",
    "Retail fixtures removal",
    "Storage unit cleanouts",
    "Basement and attic clearing",
    "Garage cleanouts",
    "Apartment cleanouts",
    "House cleanouts",
    "Business cleanouts",
    "Warehouse cleanouts",
    "Foreclosure cleanouts",
    "Moving cleanouts",
    "Downsizing assistance",
    "Hoarding cleanup",
    "Property management cleanouts"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold drop-shadow-lg">
                Estate Cleanout Services Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Compassionate estate and property cleanout services in Cincinnati. 
                We handle complete home cleanouts, business cleanouts, and storage 
                unit clearing with sensitivity and respect during difficult times.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Free Estimate
                </a>
                <a href="tel:5138762858" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 876-2858
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Cleanout Services We Provide</h2>
              <p className="text-lg text-gray-600">
                Professional, respectful cleanout services for residential and commercial 
                properties throughout Cincinnati and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleanoutServices.map((service, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compassionate Service */}
        <section className="section bg-blue-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Heart className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="heading-lg mb-4 text-blue-800">Compassionate Estate Services</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We understand that estate cleanouts can be emotionally challenging. 
                  Our team approaches every project with sensitivity, respect, and professionalism.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Respectful handling of personal belongings",
                    "Flexible scheduling around your needs",
                    "Donation coordination for meaningful items",
                    "Document and valuable item identification"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <Home className="h-32 w-32 text-blue-600 mx-auto mb-6" />
                <h3 className="heading-md mb-4">Complete Property Solutions</h3>
                <p className="text-gray-600">
                  From single rooms to entire properties, we handle cleanouts of any size 
                  with the care and attention your situation deserves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Our Estate Cleanout Process</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="heading-sm mb-3">Initial Consultation</h3>
                <p className="text-gray-600">We assess the property and discuss your specific needs and timeline.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="heading-sm mb-3">Sorting & Planning</h3>
                <p className="text-gray-600">We help identify items for donation, sale, or disposal with your guidance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="heading-sm mb-3">Professional Cleanout</h3>
                <p className="text-gray-600">Our team carefully removes all items according to your preferences.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="heading-sm mb-3">Final Cleanup</h3>
                <p className="text-gray-600">We leave the property clean and ready for the next steps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Compassionate Estate Cleanout Services</h2>
            <p className="text-xl mb-8 text-gray-200">
              Let us help you through this process with care and professionalism
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Consultation
              </a>
              <a href="tel:5138762858" className="bg-white text-brand-darkBlue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Call (513) 876-2858
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EstateCleanoutServices;
