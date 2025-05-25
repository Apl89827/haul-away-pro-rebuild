
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">Privacy Policy</h1>
              <p className="text-xl text-gray-100">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Introduction</h2>
              <p className="mb-4">
                Haul Away Pro ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our junk removal services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (address, phone number, email)</li>
                <li>Service location and property details</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Service history and feedback</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website or source</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our junk removal services</li>
                <li>Schedule appointments and communicate about services</li>
                <li>Process payments and maintain billing records</li>
                <li>Send service updates, confirmations, and important notices</li>
                <li>Respond to customer inquiries and provide support</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Providers:</strong> With trusted third parties who assist in our operations (payment processing, scheduling software, etc.)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of assets</li>
                <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Secure data transmission (SSL encryption)</li>
                <li>Access controls and employee training</li>
                <li>Regular security assessments</li>
                <li>Secure data storage practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. 
                If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Haul Away Pro</strong></p>
                <p><strong>Phone:</strong> (513) 876-2858</p>
                <p><strong>Email:</strong> info@haulawaypro.com</p>
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

export default Privacy;
