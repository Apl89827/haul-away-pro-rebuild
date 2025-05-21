
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-32">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-600 mb-8">
            The page might have been moved, deleted, or never existed. Let's get you back on track.
          </p>
          <Button className="btn-primary" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
