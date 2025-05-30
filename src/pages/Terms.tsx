
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">Terms of Service</h1>
              <p className="text-xl text-gray-100">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services of Haul Away Pro, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Services Description</h2>
              <p className="mb-4">
                Haul Away Pro provides junk removal services in the Greater Cincinnati area. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Furniture removal</li>
                <li>Appliance removal</li>
                <li>Electronics recycling</li>
                <li>Yard waste removal</li>
                <li>Estate cleanouts</li>
                <li>Construction debris removal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Booking and Scheduling</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All appointments must be scheduled in advance</li>
                <li>We provide estimated arrival windows, not exact times</li>
                <li>Weather conditions may affect scheduling</li>
                <li>Customer must be present during service or arrange for authorized access</li>
                <li>24-hour notice required for cancellations to avoid fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Pricing and Payment</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Final pricing is determined on-site based on volume and type of items</li>
                <li>Payment is due upon completion of service</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Additional fees may apply for hazardous materials or difficult access</li>
                <li>Free estimates are provided with no obligation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Items We Cannot Remove</h2>
              <p className="mb-4">For safety and legal reasons, we cannot remove:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hazardous materials (paint, chemicals, asbestos)</li>
                <li>Medical waste</li>
                <li>Ammunition or explosives</li>
                <li>Items containing freon (unless properly certified)</li>
                <li>Wet paint or stains</li>
                <li>Items weighing over 50 lbs per person</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Customer Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate information about items to be removed</li>
                <li>Ensure clear access to removal areas</li>
                <li>Point out all items to be removed before work begins</li>
                <li>Remove personal belongings from items being disposed of</li>
                <li>Inform us of any hazardous conditions or special requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Liability and Insurance</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Haul Away Pro is fully licensed and insured</li>
                <li>We are not responsible for items not designated for removal</li>
                <li>Liability is limited to the value of services provided</li>
                <li>Customer is responsible for damage claims within 24 hours</li>
                <li>We are not liable for pre-existing property damage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Environmental Commitment</h2>
              <p className="mb-4">
                We are committed to environmentally responsible disposal. Whenever possible, we:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Donate usable items to local charities</li>
                <li>Recycle materials according to local regulations</li>
                <li>Properly dispose of electronics and appliances</li>
                <li>Minimize landfill waste through responsible practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Cancellation Policy</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>24-hour advance notice required for cancellations</li>
                <li>Same-day cancellations may incur a service fee</li>
                <li>Weather-related cancellations are exempt from fees</li>
                <li>We reserve the right to cancel services for safety reasons</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from our services will be resolved through good faith negotiation. 
                If resolution cannot be reached, disputes will be handled according to Ohio state law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Modifications to Terms</h2>
              <p className="mb-4">
                Haul Away Pro reserves the right to modify these terms at any time. 
                Updated terms will be posted on our website with a new effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Haul Away Pro</strong></p>
                <p><strong>Phone:</strong> (513) 712-8077</p>
                <p><strong>Email:</strong> contact@haulawaypro.com</p>
                <p><strong>Address:</strong> Greater Cincinnati Area, Ohio</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
