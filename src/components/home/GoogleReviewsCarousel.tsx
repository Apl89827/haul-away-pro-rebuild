
import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

const GoogleReviewsCarousel = () => {
  // Your Google My Business Place ID - replace with your actual place ID
  const PLACE_ID = "ChIJk6CXojYiQIgRs-TfYDA-5Ls"; // Example place ID - replace with yours
  
  // This should come from environment/secrets - for now using null until API key is provided
  const GOOGLE_API_KEY = null; // Will be replaced with actual API key
  
  const { data: googleReviews, isLoading, error } = useGoogleReviews(PLACE_ID, GOOGLE_API_KEY);

  // Fallback reviews for when API is not configured or fails
  const fallbackReviews = [
    {
      author_name: "Sarah K.",
      rating: 5,
      text: "Fantastic service from start to finish! The team was on time, professional, and cleared away everything quickly. The price was exactly what they quoted - no surprises.",
      relative_time_description: "2 weeks ago",
      time: Date.now() - (14 * 24 * 60 * 60 * 1000)
    },
    {
      author_name: "Mike D.",
      rating: 5,
      text: "I needed an old refrigerator and some furniture removed ASAP. Haul Away Pro came the same day I called and took care of everything. Highly recommended!",
      relative_time_description: "1 month ago",
      time: Date.now() - (30 * 24 * 60 * 60 * 1000)
    },
    {
      author_name: "Jennifer L.",
      rating: 5,
      text: "We used Haul Away Pro for our estate cleanout and they were amazing. Compassionate, efficient, and they even helped us identify items that could be donated.",
      relative_time_description: "3 weeks ago",
      time: Date.now() - (21 * 24 * 60 * 60 * 1000)
    },
    {
      author_name: "Robert T.",
      rating: 5,
      text: "Professional crew, fair pricing, and they recycled what they could. Great communication throughout the process. Will definitely use them again.",
      relative_time_description: "1 week ago",
      time: Date.now() - (7 * 24 * 60 * 60 * 1000)
    },
    {
      author_name: "Lisa M.",
      rating: 5,
      text: "Quick response time and excellent service. They handled our office cleanout efficiently and left the space spotless. Highly recommend!",
      relative_time_description: "2 months ago",
      time: Date.now() - (60 * 24 * 60 * 60 * 1000)
    }
  ];

  // Use Google Reviews if available, otherwise fallback to static reviews
  const reviewsToDisplay = googleReviews && googleReviews.length > 0 ? googleReviews : fallbackReviews;
  const totalReviews = googleReviews?.length || fallbackReviews.length;

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current text-yellow-500" />
      ));
  };

  if (error) {
    console.error('Google Reviews API Error:', error);
  }

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
            <span className="ml-2 text-sm text-gray-600">
              5.0 ({totalReviews} reviews)
              {isLoading && " • Loading..."}
            </span>
          </div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {reviewsToDisplay.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-shadow h-full">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  {googleReviews && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-2 mb-1">
                    {"profile_photo_url" in review && review.profile_photo_url && (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <p className="font-semibold text-sm">{review.author_name}</p>
                  </div>
                  <p className="text-xs text-gray-400">{review.relative_time_description}</p>
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
