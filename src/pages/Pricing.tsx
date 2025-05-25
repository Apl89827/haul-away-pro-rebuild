import React from 'react';
import { Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Truck, Phone } from 'lucide-react';

const PricingPage = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-green" />,
      title: "Same Day Service",
      description: "Call before 12pm and we'll come today"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-green" />,
      title: "Fully Insured",
      description: "Complete peace of mind with every service"
    },
    {
      icon: <Truck className="h-8 w-8 text-brand-green" />,
      title: "We Load Everything",
      description: "You point, we load. It's that simple"
    }
  ];

  const pricingFactors = [
    "Volume of items being removed",
    "Type of materials (some items have disposal fees)",
    "Difficulty of removal (stairs, tight spaces, etc.)",
    "Location and accessibility"
  ];

  const whatWeInclude = [
    "Labor and loading",
    "Transportation",
    "Responsible disposal and recycling",
    "Cleanup and sweeping",
    "All taxes and fees"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-brand-lightBlue to-white">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6 text-brand-blue">Transparent, No-Surprise Pricing</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-8">
              We provide upfront pricing before we start. You approve the price, then we haul it away.
            </p>
            <Link to="/booking">
              <Button className="btn-primary text-lg px-8 py-4">Check Availability Now</Button>
            </Link>
          </div>
        </section>

        {/* How Our Pricing Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-4">How Our Pricing Works</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our pricing is based on how much space your items take up in our truck. We'll give you a free, no-obligation estimate on-site.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">1</div>
                <h3 className="heading-md mb-4">Point to Your Junk</h3>
                <p className="text-gray-600">Simply show us what you want removed. Our friendly team will assess the volume and provide an upfront estimate.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">2</div>
                <h3 className="heading-md mb-4">Get Your Price</h3>
                <p className="text-gray-600">We'll give you an all-inclusive price on the spot. No hidden fees, no surprises. You approve before we start.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">3</div>
                <h3 className="heading-md mb-4">Watch It Disappear</h3>
                <p className="text-gray-600">Sit back and relax while our professional crew loads everything into our truck and hauls it away.</p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="heading-sm mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Affects Your Price */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">What Affects Your Price?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our pricing is fair and transparent. Here's what we consider when providing your estimate:
                </p>
                <ul className="space-y-4">
                  {pricingFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-1" />
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="heading-md mb-4 text-center">What's Included in Every Service</h3>
                <ul className="space-y-3 mb-6">
                  {whatWeInclude.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button className="w-full btn-primary">Check Availability</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Minimum Charge Section */}
        <section className="section bg-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-6">Simple, Straightforward Pricing</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-brand-lightBlue p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Minimum Service</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Starting at just $99, our minimum service covers small loads and single items. 
                  This includes our travel time, professional service, and responsible disposal.
                </p>
                <p className="text-gray-600">
                  Perfect for: Single furniture pieces, small appliances, or a few boxes of items.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Why Choose Volume-Based Pricing?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-0.5" />
                      <span>You only pay for the space you use</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-0.5" />
                      <span>No hidden fees or surprise charges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-green mr-3 shrink-0 mt-0.5" />
                      <span>Fair pricing for jobs of any size</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Ready to Get Started?</h4>
                  <p className="text-gray-600 mb-4">
                    Our team is standing by to provide you with a free, no-obligation estimate. 
                    Most jobs can be completed the same day!
                  </p>
                  <Link to="/booking">
                    <Button className="btn-primary">Check Availability Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-8">Pricing Questions?</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is there really no hourly charge?</h3>
                <p className="text-gray-600">That's right! We don't charge by the hour. Our price is based solely on the volume of items you need removed, so you know exactly what you'll pay upfront.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What if my estimate changes?</h3>
                <p className="text-gray-600">If you add or remove items after your initial estimate, we'll adjust the price accordingly and get your approval before proceeding. No surprises!</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer senior or military discounts?</h3>
                <p className="text-gray-600">Yes! We're proud to offer special discounts for seniors and military personnel. Just mention your eligibility when you call.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, cash, and checks. Payment is due upon completion of the service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-brand-blue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-white mb-4">Ready to Clear the Clutter?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation estimate today. Most jobs completed same day!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <Button className="bg-white text-brand-blue hover:bg-gray-100 font-medium py-3 px-6">Check Availability</Button>
              </Link>
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white font-medium py-3 px-6">
                <Phone className="h-5 w-5 mr-2" />
                Call (513) 876-2858
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
