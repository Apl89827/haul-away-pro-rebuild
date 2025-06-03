
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 py-32">
        <div className="text-center max-w-2xl px-4">
          {/* Animated 404 with truck graphic */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-brand-blue/20 mb-4 animate-fade-in">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=center" 
                  alt="Confused person at computer"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fun messaging */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-darkBlue mb-4">
              Whoops! We Can't Haul This Page Away! 🚛
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Looks like this page got lost in the junk pile. Don't worry though - 
              we're experts at finding things that belong somewhere else!
            </p>
          </div>

          {/* Fun facts or jokes */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold text-brand-blue mb-3">
              🎯 Fun Fact While You're Here:
            </h3>
            <p className="text-gray-600">
              The average American throws away 4.5 pounds of trash per day. 
              Good thing you found us instead of the digital dumpster!
            </p>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-primary group" asChild>
              <a href="/" className="flex items-center justify-center gap-2">
                <Home className="h-5 w-5 group-hover:animate-pulse" />
                Go Home
              </a>
            </Button>
            
            <Button variant="outline" className="hover-scale" asChild>
              <a href="javascript:history.back()" className="flex items-center justify-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </a>
            </Button>
            
            <Button className="btn-secondary" asChild>
              <a href="/services" className="flex items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                View Services
              </a>
            </Button>
            
            <Button variant="outline" className="hover-scale" asChild>
              <a href="tel:5137128077" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Search suggestion */}
          <div className="mt-8 p-4 bg-brand-green/10 rounded-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-gray-600">
              <strong>Looking for something specific?</strong> Try our{" "}
              <a href="/services" className="text-brand-green underline hover:text-brand-darkBlue">
                services page
              </a>{" "}
              or{" "}
              <a href="/contact" className="text-brand-green underline hover:text-brand-darkBlue">
                contact us
              </a>{" "}
              directly!
            </p>
          </div>

          {/* Popular pages */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
            <h3 className="text-lg font-semibold text-brand-darkBlue mb-4">
              Popular Pages:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/how-it-works" className="text-brand-blue hover:text-brand-darkBlue underline">
                How It Works
              </a>
              <span className="text-gray-300">•</span>
              <a href="/pricing" className="text-brand-blue hover:text-brand-darkBlue underline">
                Pricing
              </a>
              <span className="text-gray-300">•</span>
              <a href="/service-areas" className="text-brand-blue hover:text-brand-darkBlue underline">
                Service Areas
              </a>
              <span className="text-gray-300">•</span>
              <a href="/booking" className="text-brand-blue hover:text-brand-darkBlue underline">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
