
import { useQuery } from '@tanstack/react-query';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceDetailsResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

const fetchGoogleReviews = async (placeId: string, apiKey: string): Promise<GoogleReview[]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Google Reviews');
  }
  
  const data: PlaceDetailsResponse = await response.json();
  
  if (data.status !== 'OK') {
    throw new Error(`Google Places API error: ${data.status}`);
  }
  
  return data.result.reviews || [];
};

export const useGoogleReviews = (placeId: string, apiKey: string | null) => {
  return useQuery({
    queryKey: ['googleReviews', placeId],
    queryFn: () => fetchGoogleReviews(placeId, apiKey!),
    enabled: !!apiKey && !!placeId,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
  });
};
