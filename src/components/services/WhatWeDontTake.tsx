
import React from "react";
import { AlertTriangle } from "lucide-react";

const WhatWeDontTake = () => {
  const restrictedItems = [
    "Hazardous materials (paint, chemicals, asbestos)",
    "Medical waste or biohazardous materials",
    "Radioactive materials",
    "Explosives or ammunition",
    "Gasoline, oil, or other flammable liquids",
    "Wet paint or paint cans with liquid paint",
    "Dirt, concrete, or heavy construction debris (over certain limits)",
    "Items requiring special disposal permits"
  ];

  return (
    <section className="section bg-red-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="heading-lg mb-4 text-red-800">What We Don't Take</h2>
            <p className="text-lg text-gray-700">
              For safety and legal reasons, there are certain items we cannot remove. 
              These items require special handling and disposal methods.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="heading-sm mb-6 text-red-800">Restricted Items:</h3>
                <ul className="space-y-3">
                  {restrictedItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-yellow-800">Need Help with Restricted Items?</h4>
                <p className="text-gray-700 mb-4">
                  While we can't take these items, we're happy to provide guidance on proper disposal methods 
                  and direct you to appropriate facilities in the Cincinnati area.
                </p>
                <p className="text-sm text-gray-600">
                  Contact your local waste management facility or environmental services 
                  department for hazardous material disposal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontTake;
