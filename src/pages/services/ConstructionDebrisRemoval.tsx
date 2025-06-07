
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, HardHat, Truck, AlertTriangle } from 'lucide-react';

const ConstructionDebrisRemoval = () => {
  const constructionItems = [
    "Drywall and sheetrock",
    "Lumber and wood materials",
    "Flooring materials",
    "Concrete and brick",
    "Roofing materials",
    "Windows and doors",
    "Renovation debris",
    "Demolition waste",
    "Tile and stone",
    "Insulation materials",
    "Siding materials",
    "Plumbing fixtures",
    "Electrical materials",
    "Cabinetry and countertops",
    "Bathroom fixtures",
    "Kitchen remodel waste"
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
                Construction Debris Removal Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional construction and renovation debris removal in Cincinnati. 
                We handle drywall, lumber, concrete, and all construction waste from 
                your remodeling project with fast, reliable service.
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
              <h2 className="heading-lg mb-4">Construction Materials We Remove</h2>
              <p className="text-lg text-gray-600">
                From small renovation projects to major construction jobs, we handle 
                all types of construction debris removal throughout Cincinnati.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionItems.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="section bg-yellow-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-sm mb-4 text-yellow-800">Important Safety Notice</h3>
                    <p className="text-gray-700 mb-4">
                      We handle most construction debris, but cannot remove hazardous materials including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Asbestos-containing materials</li>
                      <li>Lead-based paint or materials</li>
                      <li>Chemical waste or solvents</li>
                      <li>Materials requiring special disposal permits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="section bg-brand-gray">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Construction Projects We Support</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <HardHat className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">Home Renovations</h3>
                <p className="text-gray-600">
                  Kitchen remodels, bathroom updates, basement finishing, and general home improvements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <Truck className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">Demolition Projects</h3>
                <p className="text-gray-600">
                  Interior demolition, wall removal, and selective demolition for renovation projects.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 text-center card-shadow">
                <HardHat className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                <h3 className="heading-sm mb-4">New Construction</h3>
                <p className="text-gray-600">
                  Construction site cleanup, excess materials removal, and ongoing debris management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Need Construction Debris Removed?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Fast, reliable construction waste removal throughout Greater Cincinnati
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

export default ConstructionDebrisRemoval;
