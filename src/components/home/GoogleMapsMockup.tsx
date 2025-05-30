
import React, { useState } from "react";
import { MapPin, Star, Phone, ExternalLink, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMapsMockup = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: "Reviews" },
    { id: "hours", label: "Hours" },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Excellent service! They showed up on time and cleared out my garage quickly and professionally.",
      date: "2 weeks ago"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Fair pricing and eco-friendly disposal. Highly recommend for any junk removal needs.",
      date: "1 month ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Professional team that handled my estate cleanout with care and respect.",
      date: "3 weeks ago"
    }
  ];

  const hours = [
    { day: "Monday", time: "7:00 AM - 7:00 PM" },
    { day: "Tuesday", time: "7:00 AM - 7:00 PM" },
    { day: "Wednesday", time: "7:00 AM - 7:00 PM" },
    { day: "Thursday", time: "7:00 AM - 7:00 PM" },
    { day: "Friday", time: "7:00 AM - 7:00 PM" },
    { day: "Saturday", time: "7:00 AM - 7:00 PM" },
    { day: "Sunday", time: "9:00 AM - 5:00 PM" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Enhanced GMB Business Card */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-2xl">H</span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-brand-darkBlue mb-1">
                  HaulAway Pro
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-medium ml-2">4.9</span>
                  <span className="text-gray-600 ml-1">(127 reviews)</span>
                </div>
                <p className="text-gray-600 mb-3">Junk Removal Service • Cincinnati, OH</p>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View on Google
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-brand-blue">
                <Phone className="w-4 h-4" />
                <a href="tel:5138762858" className="hover:underline font-medium">
                  (513) 876-2858
                </a>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Open now • Closes 7PM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Navigation className="w-4 h-4" />
                <span>Get directions</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button className="bg-brand-blue hover:bg-brand-darkBlue">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div>
            {/* Service Territory Map */}
            <div className="relative bg-gray-100 h-64 md:h-80 rounded-lg mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-blue/20 rounded-full border-2 border-brand-blue/40 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/40 rounded-full border-2 border-brand-blue flex items-center justify-center">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand-blue" />
                      </div>
                    </div>
                    
                    {/* Service area points */}
                    <div className="absolute -top-4 left-8 w-3 h-3 bg-brand-green rounded-full"></div>
                    <div className="absolute top-8 -right-6 w-3 h-3 bg-brand-green rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-brand-green rounded-full"></div>
                    <div className="absolute bottom-0 left-2 w-3 h-3 bg-brand-green rounded-full"></div>
                    <div className="absolute top-16 -left-8 w-3 h-3 bg-brand-green rounded-full"></div>
                  </div>
                </div>
                
                {/* Area labels */}
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  Mason
                </div>
                <div className="absolute top-8 right-8 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  Blue Ash
                </div>
                <div className="absolute bottom-8 right-4 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  Hyde Park
                </div>
                <div className="absolute bottom-4 left-8 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                  West Chester
                </div>
              </div>
              
              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-1">
                <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  +
                </button>
                <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                  −
                </button>
              </div>
            </div>

            <div className="text-center text-gray-600">
              <p className="font-medium">Serving Greater Cincinnati Area</p>
              <p className="text-sm">Same-day and next-day service available</p>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center pt-4">
              <Button variant="outline">View all reviews on Google</Button>
            </div>
          </div>
        )}

        {activeTab === "hours" && (
          <div className="space-y-3">
            {hours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium">{schedule.day}</span>
                <span className="text-gray-600">{schedule.time}</span>
              </div>
            ))}
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 text-green-700">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Open now • Closes at 7:00 PM</span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                Emergency and after-hours service available by appointment
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMapsMockup;
