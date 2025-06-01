
import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GoogleReviewsCarousel = () => {
  // These would typically come from Google My Business API or be manually curated
  const googleReviews = [
    {
      name: "Sarah K.",
      location: "West Chester",
      quote: "Fantastic service from start to finish! The team was on time, professional, and cleared away everything quickly. The price was exactly what they quoted - no surprises.",
      rating: 5,
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Mike D.",
      location: "Mason", 
      quote: "I needed an old refrigerator and some furniture removed ASAP. Haul Away Pro came the same day I called and took care of everything. Highly recommended!",
      rating: 5,
      date: "1 month ago",
      verified: true
    },
    {
      name: "Jennifer L.",
      location: "Springdale",
      quote: "We used Haul Away Pro for our estate cleanout and they were amazing. Compassionate, efficient, and they even helped us identify items that could be donated.",
      rating: 5,
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "Robert T.",
      location: "Blue Ash",
      quote: "Professional crew, fair pricing, and they recycled what they could. Great communication throughout the process. Will definitely use them again.",
      rating: 5,
      date: "1 week ago",
      verified: true
    },
    {
      name: "Lisa M.",
      location: "Fairfield",
      quote: "Quick response time and excellent service. They handled our office cleanout efficiently and left the space spotless. Highly recommend!",
      rating: 5,
      date: "2 months ago",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current text-yellow-500" />
      ));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">Google Reviews</span>
          <div className="flex items-center ml-2">
            {renderStars(5)}
            <span className="ml-2 text-sm text-gray-600">5.0 ({googleReviews.length} reviews)</span>
          </div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {googleReviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-shadow h-full">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{review.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>

      <div className="text-center mt-6">
        <a 
          href="https://www.google.com/maps/place/HaulAway+Pro/@39.37692295,-84.3982185,15z/data=!4m6!3m5!1s0x2dc6f226382aa093:0xbe7b2fe630d2e4b3!8m2!3d39.37692295!4d-84.3982185!16s%2Fg%2F11y3k8yzqr?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-blue hover:text-brand-darkBlue underline text-sm font-medium"
        >
          View all reviews on Google
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
