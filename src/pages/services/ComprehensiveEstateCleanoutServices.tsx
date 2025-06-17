
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home, Building, Warehouse, Truck, Users, Heart } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const ComprehensiveEstateCleanoutServices = () => {
  useMeta({
    title: "Complete Estate Cleanout Services Near Me | Cincinnati | HaulAway Pro",
    description: "Comprehensive estate cleanout services in Cincinnati. Complete home cleanouts, business cleanouts, storage unit clearing, garage cleanouts, and more professional services.",
    keywords: "estate cleanout services near me, complete home cleanouts Cincinnati, business cleanouts, storage unit cleanouts, garage cleanouts, apartment cleanouts",
    canonicalUrl: "https://haulawaypro.netlify.app/comprehensive-estate-cleanout-services"
  });

  const cleanoutServices = [
    {
      title: "Complete Home Cleanouts",
      description: "Full residential property clearing from basement to attic, handling all personal belongings with care and respect.",
      icon: Home,
      details: [
        "Entire house clearing",
        "Room-by-room organization",
        "Personal belongings sorting",
        "Valuable item identification",
        "Donation coordination"
      ]
    },
    {
      title: "Estate Property Clearing",
      description: "Professional estate property services for families dealing with inherited properties and probate situations.",
      icon: Building,
      details: [
        "Probate property clearing",
        "Inherited property cleanouts",
        "Legal documentation support",
        "Coordination with attorneys",
        "Timeline compliance"
      ]
    },
    {
      title: "Office Furniture and Equipment",
      description: "Complete office cleanouts including furniture, electronics, and business equipment removal.",
      icon: Building,
      details: [
        "Office furniture removal",
        "Computer equipment disposal",
        "Filing cabinet clearing",
        "Electronic waste recycling",
        "Document destruction services"
      ]
    },
    {
      title: "Retail Fixtures Removal",
      description: "Commercial retail space clearing including fixtures, displays, and equipment removal.",
      icon: Building,
      details: [
        "Display case removal",
        "Shelving system dismantling",
        "Point-of-sale equipment",
        "Retail fixtures clearing",
        "Store closure cleanouts"
      ]
    },
    {
      title: "Storage Unit Cleanouts",
      description: "Complete storage unit clearing services for abandoned or inherited storage spaces.",
      icon: Warehouse,
      details: [
        "Full unit clearing",
        "Item sorting and evaluation",
        "Climate-controlled units",
        "Documentation and inventory",
        "Valuable item recovery"
      ]
    },
    {
      title: "Basement and Attic Clearing",
      description: "Specialized services for clearing hard-to-access areas like basements and attics.",
      icon: Home,
      details: [
        "Safe access and removal",
        "Hazardous material handling",
        "Structural damage assessment",
        "Insulation and debris removal",
        "Deep cleaning services"
      ]
    },
    {
      title: "Garage Cleanouts",
      description: "Complete garage clearing including vehicles, tools, equipment, and accumulated items.",
      icon: Warehouse,
      details: [
        "Tool and equipment removal",
        "Automotive item clearing",
        "Chemical disposal",
        "Workbench and storage removal",
        "Floor cleaning and preparation"
      ]
    },
    {
      title: "Apartment Cleanouts",
      description: "Residential apartment clearing for move-outs, evictions, and tenant transitions.",
      icon: Building,
      details: [
        "Complete apartment clearing",
        "Appliance removal",
        "Furniture and belongings",
        "Cleaning and preparation",
        "Landlord coordination"
      ]
    },
    {
      title: "Business Cleanouts",
      description: "Commercial business space clearing for closures, relocations, and renovations.",
      icon: Building,
      details: [
        "Complete business clearing",
        "Equipment and machinery",
        "Inventory removal",
        "Office space preparation",
        "Renovation prep services"
      ]
    },
    {
      title: "Warehouse Cleanouts",
      description: "Large-scale warehouse and industrial space clearing services.",
      icon: Warehouse,
      details: [
        "Industrial equipment removal",
        "Warehouse shelving systems",
        "Bulk inventory clearing",
        "Heavy machinery disposal",
        "Site preparation services"
      ]
    },
    {
      title: "Foreclosure Cleanouts",
      description: "Sensitive foreclosure property clearing services for banks and property management companies.",
      icon: Home,
      details: [
        "Bank-owned property clearing",
        "Abandoned property cleanouts",
        "Damage assessment support",
        "Secure item handling",
        "Property preparation for sale"
      ]
    },
    {
      title: "Moving Cleanouts",
      description: "Comprehensive moving assistance including unwanted item removal and property preparation.",
      icon: Truck,
      details: [
        "Pre-move decluttering",
        "Unwanted item removal",
        "Packing assistance",
        "Moving day coordination",
        "Post-move cleanup"
      ]
    },
    {
      title: "Downsizing Assistance",
      description: "Compassionate downsizing services for seniors and families transitioning to smaller spaces.",
      icon: Users,
      details: [
        "Senior downsizing support",
        "Item evaluation and sorting",
        "Donation coordination",
        "Emotional support throughout",
        "New space organization"
      ]
    },
    {
      title: "Hoarding Cleanup",
      description: "Specialized hoarding cleanup services with trained professionals and compassionate approach.",
      icon: Heart,
      details: [
        "Professional hoarding cleanup",
        "Safety protocol adherence",
        "Biohazard handling",
        "Mental health coordination",
        "Discrete and respectful service"
      ]
    },
    {
      title: "Property Management Cleanouts",
      description: "Specialized services for property management companies and rental property cleanouts.",
      icon: Building,
      details: [
        "Tenant turnover cleanouts",
        "Eviction cleanup services",
        "Property damage assessment",
        "Unit preparation for rent",
        "Ongoing maintenance support"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">
                Complete Estate Cleanout Services Near Me
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                HaulAway Pro provides comprehensive estate and property cleanout services throughout Cincinnati. From complete home cleanouts to specialized business and warehouse clearing, we handle every type of cleanout with professionalism and care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Get Free Estimate
                </a>
                <a href="tel:5137128077" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 712-8077
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4 text-brand-darkBlue">Comprehensive Cleanout Services</h2>
              <p className="text-lg text-gray-600">
                We provide professional cleanout services for residential, commercial, and specialty properties throughout Cincinnati and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleanoutServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-brand-blue mr-3" />
                      <h3 className="heading-sm text-brand-darkBlue">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-8 text-brand-darkBlue">Why Choose HaulAway Pro for Estate Cleanouts?</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="heading-sm mb-3">Compassionate Service</h3>
                  <p className="text-gray-600">We understand that cleanouts can be emotional. Our team approaches every project with sensitivity and respect.</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-brand-green mx-auto mb-4" />
                  <h3 className="heading-sm mb-3">Professional Expertise</h3>
                  <p className="text-gray-600">Years of experience handling all types of cleanouts from residential homes to commercial warehouses.</p>
                </div>
                
                <div className="text-center">
                  <Users className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                  <h3 className="heading-sm mb-3">Full-Service Solutions</h3>
                  <p className="text-gray-600">From sorting and removal to donation coordination and final cleanup, we handle every aspect of your cleanout.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-4">Our Cleanout Process</h2>
              <p className="text-lg text-gray-600">
                We follow a systematic approach to ensure every cleanout is handled professionally and efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="heading-sm mb-3">Assessment</h3>
                <p className="text-gray-600">We evaluate the property and discuss your specific needs and timeline requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="heading-sm mb-3">Planning</h3>
                <p className="text-gray-600">We create a detailed plan for sorting, removal, donations, and disposal based on your preferences.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="heading-sm mb-3">Execution</h3>
                <p className="text-gray-600">Our professional team carefully removes all items according to the established plan.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="heading-sm mb-3">Completion</h3>
                <p className="text-gray-600">We provide final cleanup and ensure the property is ready for its next phase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Ready to Start Your Cleanout Project?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Professional, compassionate cleanout services for any property type in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Schedule Consultation
              </a>
              <a href="tel:5137128077" className="bg-white text-brand-darkBlue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Call (513) 712-8077
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ComprehensiveEstateCleanoutServices;
