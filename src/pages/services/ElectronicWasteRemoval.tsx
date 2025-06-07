
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Monitor, Smartphone, HardDrive } from 'lucide-react';

const ElectronicWasteRemoval = () => {
  const electronicItems = [
    "Televisions and monitors",
    "Desktop computers",
    "Laptops and tablets",
    "Printers and scanners",
    "Cell phones and smartphones",
    "Gaming consoles",
    "Stereo systems",
    "DVD and Blu-ray players",
    "VCR and cassette players",
    "Computer accessories",
    "Cables and chargers",
    "Old electronics",
    "Broken electronics",
    "Office equipment",
    "Audio equipment",
    "Video equipment"
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
                Electronic Waste Removal Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Certified electronic waste disposal and recycling in Cincinnati. 
                We safely remove TVs, computers, and all electronics with secure 
                data destruction and environmentally responsible recycling.
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

        {/* What We Remove Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Electronics We Remove & Recycle</h2>
              <p className="text-lg text-gray-600">
                Professional e-waste removal for all types of electronics throughout 
                Cincinnati and surrounding neighborhoods with secure data destruction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {electronicItems.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="section bg-blue-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <HardDrive className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="heading-lg mb-4 text-blue-800">Secure Data Destruction</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Protect your personal and business information with our certified 
                  data destruction services for computers, phones, and storage devices.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "DOD-compliant data wiping",
                    "Physical hard drive destruction",
                    "Certificates of destruction",
                    "HIPAA compliant processes"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <Monitor className="h-32 w-32 text-blue-600 mx-auto mb-6" />
                <h3 className="heading-md mb-4">Certified E-Waste Recycling</h3>
                <p className="text-gray-600">
                  We partner with certified e-waste recycling facilities to ensure 
                  your electronics are processed responsibly and in compliance with 
                  environmental regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Secure Electronic Waste Removal</h2>
            <p className="text-xl mb-8 text-gray-200">
              Trust Cincinnati's experts for safe, secure electronic waste disposal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Pickup Online
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

export default ElectronicWasteRemoval;
