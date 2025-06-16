
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceCategoriesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Residential Junk Removal */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6 text-center">Residential Junk Removal in Cincinnati</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HaulAway Pro specializes in comprehensive residential junk removal services throughout Cincinnati and surrounding areas. Whether you're decluttering your home, moving to a new residence, or dealing with inherited property, our experienced team handles all types of household items with care and professionalism. We understand that residential cleanouts can be overwhelming, which is why we offer same-day service and transparent pricing with no hidden fees. Our residential services include furniture removal, appliance disposal, electronics recycling, and general household clutter elimination. We take pride in our eco-friendly approach, ensuring that items are donated, recycled, or properly disposed of according to local regulations. From single-item pickups to complete home cleanouts, we work around your schedule and provide upfront estimates before any work begins. Our fully licensed and insured team respects your property and will leave your space clean and tidy. Choose HaulAway Pro for reliable, efficient, and affordable residential junk removal services in Cincinnati.
            </p>
            <div className="text-center">
              <Link to="/residential-junk-removal-cincinnati">
                <Button className="btn-primary">Learn More About Residential Services</Button>
              </Link>
            </div>
          </div>

          {/* Commercial Junk Removal */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6 text-center">Commercial Junk Removal in Cincinnati</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cincinnati businesses trust HaulAway Pro for professional commercial junk removal services that keep operations running smoothly. We understand that commercial cleanouts require efficiency, reliability, and minimal disruption to your business activities. Our commercial services cater to offices, retail stores, restaurants, warehouses, and construction sites throughout the Cincinnati metro area. We handle office furniture, outdated equipment, construction debris, renovation waste, and general commercial clutter with the utmost professionalism. Our team works flexibly around your business hours, offering evening and weekend appointments to minimize operational impact. We provide detailed documentation for proper disposal tracking and can accommodate recurring service contracts for ongoing waste management needs. With our commercial-grade equipment and experienced crew, we can handle large-scale cleanouts efficiently and cost-effectively. Our services include proper recycling of electronic waste, donation of usable items, and environmentally responsible disposal of all materials. Trust HaulAway Pro to maintain your business's professional image while handling all your commercial junk removal needs in Cincinnati.
            </p>
            <div className="text-center">
              <Link to="/commercial-junk-removal-cincinnati">
                <Button className="btn-primary">Learn More About Commercial Services</Button>
              </Link>
            </div>
          </div>

          {/* Estate Cleanout Services */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6 text-center">Estate Cleanout Services in Cincinnati</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During difficult times of loss, HaulAway Pro provides compassionate and professional estate cleanout services throughout Cincinnati. We understand the emotional challenges associated with clearing a loved one's belongings, and our experienced team approaches each project with sensitivity and respect. Our estate cleanout services include complete property clearing, sorting valuable items from disposables, coordinating donations to local charities, and proper disposal of unwanted materials. We work closely with families, estate attorneys, and real estate professionals to ensure timely completion while honoring your loved one's memory. Our team can identify potentially valuable items and separate them for family review before disposal. We handle everything from furniture and personal belongings to appliances and household goods, always maintaining the dignity and respect that these situations require. With flexible scheduling and transparent pricing, we aim to reduce stress during an already challenging time. Our comprehensive estate cleanout services help prepare properties for sale or transfer while ensuring that usable items find new homes through donation whenever possible. Let HaulAway Pro handle the heavy lifting during this difficult time.
            </p>
            <div className="text-center">
              <Link to="/estate-cleanout-services-cincinnati">
                <Button className="btn-primary">Learn More About Estate Cleanout Services</Button>
              </Link>
            </div>
          </div>

          {/* Light Demolition Services */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6 text-center">Light Demolition Services in Cincinnati</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HaulAway Pro offers professional light demolition services in Cincinnati for residential and commercial properties undergoing renovation or modification projects. Our light demolition services include interior wall removal, deck teardown, shed demolition, fence removal, and bathroom or kitchen demolition preparation. We specialize in selective demolition that preserves structural integrity while removing unwanted elements from your property. Our experienced crew uses proper safety equipment and follows all local building codes and permit requirements. We coordinate with contractors and homeowners to ensure demolition work aligns with renovation timelines and project goals. Our light demolition services include debris removal and site cleanup, leaving your property ready for the next phase of construction or renovation. We handle proper disposal of demolition materials, including recycling of wood, metal, and other reusable materials whenever possible. With our fully licensed and insured team, you can trust that your light demolition project will be completed safely and efficiently. From small interior modifications to larger outdoor structure removal, HaulAway Pro has the expertise and equipment to handle your light demolition needs throughout Cincinnati.
            </p>
            <div className="text-center">
              <Link to="/light-demolition-services-cincinnati">
                <Button className="btn-primary">Learn More About Demolition Services</Button>
              </Link>
            </div>
          </div>

          {/* Appliance & Furniture Removal */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6 text-center">Appliance & Furniture Removal in Cincinnati</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HaulAway Pro specializes in safe and efficient appliance and furniture removal services throughout Cincinnati, handling everything from single items to complete household clearouts. Our experienced team properly removes and disposes of all types of appliances including refrigerators, washers, dryers, dishwashers, stoves, and air conditioning units, following EPA guidelines for refrigerant recovery when required. We also handle furniture removal for sofas, beds, dining sets, dressers, and all other household furniture items regardless of size or condition. Our service includes careful removal from your home to prevent damage to walls, floors, and doorways during the extraction process. We prioritize environmental responsibility by partnering with local recycling centers and donation facilities to ensure appliances and furniture are properly processed rather than simply discarded in landfills. With same-day service available and transparent upfront pricing, we make appliance and furniture removal convenient and affordable for Cincinnati residents. Our fully insured team handles all the heavy lifting, loading, and transportation, so you don't have to worry about the physical demands or logistics of large item disposal. Choose HaulAway Pro for professional appliance and furniture removal services you can trust.
            </p>
            <div className="text-center">
              <Link to="/appliance-furniture-removal-cincinnati">
                <Button className="btn-primary">Learn More About Appliance & Furniture Removal</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;
