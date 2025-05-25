
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
