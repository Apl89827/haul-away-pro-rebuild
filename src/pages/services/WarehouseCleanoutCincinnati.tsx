
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Warehouse, Phone } from 'lucide-react';
import { useMeta } from '@/hooks/useMeta';

const WarehouseCleanoutCincinnati = () => {
  useMeta({
    title: "Warehouse Cleanout Services Cincinnati | HaulAway Pro",
    description: "Professional warehouse cleanout services in Cincinnati. We handle large-scale industrial cleanouts, equipment removal, and facility clearing for distribution centers and manufacturing facilities.",
    keywords: "warehouse cleanout Cincinnati, industrial cleanout Cincinnati, facility cleanout Cincinnati, equipment removal Cincinnati, manufacturing cleanout Cincinnati",
    canonicalUrl: "https://haulawaypro.netlify.app/warehouse-cleanout-cincinnati"
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue to-brand-darkBlue py-20 mt-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="heading-xl mb-6 text-white font-bold">
                Warehouse Cleanout Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                Professional warehouse cleanout services throughout Cincinnati. We handle large-scale industrial cleanouts for distribution centers, manufacturing facilities, and storage warehouses with specialized equipment and safety protocols.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                  Schedule Warehouse Cleanout
                </a>
                <a href="tel:5137128077" className="bg-white text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  Call (513) 712-8077
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  HaulAway Pro specializes in large-scale warehouse cleanout services throughout Cincinnati, providing comprehensive solutions for distribution centers, manufacturing facilities, and storage warehouses. Our experienced team has the expertise and equipment to handle the scale and complexity of industrial environments, including high ceiling access, forklift coordination, and large volume removal projects. We work closely with facility management teams to minimize disruption to ongoing operations and can schedule work during maintenance windows or planned shutdown periods to meet your operational requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our warehouse cleanout service covers all types of industrial equipment and materials including obsolete inventory and stock, industrial machinery and equipment, packaging materials and supplies, racking and shelving systems, office equipment and furniture, pallets and shipping materials, maintenance supplies and tools, and accumulated debris from years of operations. Whether you're closing a Cincinnati warehouse facility, relocating operations, or clearing space for new equipment installation, we handle projects of any size with industrial-grade equipment and safety protocols. Our team coordinates with warehouse management to ensure safe and efficient removal processes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility and asset recovery drive our warehouse cleanout approach. We evaluate all materials for resale opportunities through liquidation companies, scrap dealers, and equipment brokers who can maximize value from industrial equipment and materials. Many warehouse items including machinery, racking systems, and inventory retain significant value and can be sold or donated to other businesses. Our comprehensive sorting process identifies valuable materials while ensuring proper disposal and recycling of items that cannot be repurposed, supporting both environmental sustainability and cost recovery for your business.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Cincinnati warehouse cleanout service includes comprehensive project planning, safety assessment and protocol implementation, efficient material sorting and removal, coordination with liquidation partners, and complete facility cleanup. We provide detailed documentation for asset disposal tracking and can accommodate complex scheduling requirements to align with your operational needs. Our fully licensed and insured team maintains industrial safety standards throughout the process and has experience with the unique challenges of large-scale facility cleanouts. Trust HaulAway Pro for professional, efficient, and environmentally responsible warehouse cleanout services in Cincinnati.
                </p>

                <div className="bg-brand-lightBlue rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Warehouse Items We Remove</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Industrial equipment and machinery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Obsolete inventory and stock</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Racking and storage systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Packaging materials and supplies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span>Office furniture and equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-brand-darkBlue text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4 text-white">Ready for Your Warehouse Cleanout?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Large-scale industrial cleanouts with specialized equipment and safety protocols in Cincinnati
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary bg-brand-green hover:bg-green-600">
                Get Industrial Quote
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

export default WarehouseCleanoutCincinnati;
