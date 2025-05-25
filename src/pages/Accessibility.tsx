
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Accessibility = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">Accessibility Statement</h1>
              <p className="text-xl text-gray-100">
                Haul Away Pro is committed to ensuring digital accessibility for people with disabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Our Commitment</h2>
              <p className="mb-4">
                Haul Away Pro is committed to ensuring that our website is accessible to all users, including those with disabilities. 
                We strive to provide an inclusive digital experience that allows everyone to access our junk removal services easily and efficiently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Accessibility Standards</h2>
              <p className="mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines help make web content more accessible to people with disabilities, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Visual impairments (blindness, low vision, color blindness)</li>
                <li>Hearing impairments</li>
                <li>Motor/mobility impairments</li>
                <li>Cognitive disabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Accessibility Features</h2>
              <p className="mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Alt text for images</li>
                <li>Keyboard navigation support</li>
                <li>High color contrast ratios</li>
                <li>Readable fonts and appropriate text sizing</li>
                <li>Clear and consistent navigation</li>
                <li>Form labels and error messages</li>
                <li>Skip navigation links</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Ongoing Efforts</h2>
              <p className="mb-4">
                We continuously work to improve the accessibility of our website. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility best practices</li>
                <li>User feedback incorporation</li>
                <li>Technology updates to support assistive devices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Feedback and Support</h2>
              <p className="mb-4">
                If you experience any difficulty accessing our website or have suggestions for improvement, 
                please contact us. We welcome your feedback and are committed to addressing accessibility concerns promptly.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
                <p><strong>Phone:</strong> (513) 876-2858</p>
                <p><strong>Email:</strong> info@haulawaypro.com</p>
                <p><strong>Address:</strong> Greater Cincinnati Area, Ohio</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Alternative Access</h2>
              <p className="mb-4">
                If you are unable to access certain content or features on our website, 
                please contact us directly. We will provide alternative methods to access our services, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Phone consultations and booking</li>
                <li>Email communication</li>
                <li>In-person estimates</li>
                <li>Alternative document formats upon request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Last Updated</h2>
              <p>This accessibility statement was last updated on {new Date().toLocaleDateString()}.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Accessibility;
