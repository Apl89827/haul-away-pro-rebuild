
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of junk do you remove?",
      answer:
        "We remove a wide variety of items including furniture, appliances, electronics, yard waste, construction debris, and more. We do not accept hazardous materials such as chemicals, paint, or asbestos."
    },
    {
      question: "How does your pricing work?",
      answer:
        "Our pricing is volume-based, which means you only pay for the space your items take up in our truck. We offer free, no-obligation estimates, and our prices start at $99 for small loads."
    },
    {
      question: "Do I need to be present for the pickup?",
      answer:
        "Typically, yes. We need someone on-site to confirm the items to be removed and approve the final price. However, we can make arrangements for remote service in some cases."
    },
    {
      question: "How quickly can you come out?",
      answer:
        "We offer same-day or next-day service in most cases. Our scheduling is flexible, and we'll work with you to find a time that's convenient for you."
    },
    {
      question: "What happens to the items you remove?",
      answer:
        "We're committed to eco-friendly disposal. When possible, we donate reusable items to local charities and recycle materials to minimize landfill waste."
    },
    {
      question: "Do you offer commercial junk removal?",
      answer:
        "Yes! We serve both residential and commercial clients throughout the Greater Cincinnati area. We can handle office cleanouts, retail fixtures, restaurant equipment, and more."
    }
  ];

  return (
    <section className="section bg-brand-lightBlue">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to our most commonly asked questions. Don't see what you're looking for? Just give us a call!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg overflow-hidden shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
