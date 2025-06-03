
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

interface GoogleReviewsResponse {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
  place_name?: string;
}

const fetchGoogleReviews = async (placeId: string): Promise<GoogleReview[]> => {
  console.log('Fetching Google Reviews for Place ID:', placeId);
  
  const { data, error } = await supabase.functions.invoke('fetch-google-reviews', {
    body: { placeId }
  });
  
  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(`Failed to fetch Google Reviews: ${error.message}`);
  }
  
  if (!data) {
    console.error('No data received from Google Reviews API');
    throw new Error('No data received from Google Reviews API');
  }
  
  console.log('Google Reviews data received:', data);
  
  if (data.error) {
    console.error('Google API error:', data.error);
    throw new Error(`Google API error: ${data.error}`);
  }
  
  return data.reviews || [];
};

export const useGoogleReviews = (placeId: string) => {
  return useQuery({
    queryKey: ['googleReviews', placeId],
    queryFn: () => fetchGoogleReviews(placeId),
    enabled: !!placeId,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: (failureCount, error) => {
      // Don't retry if it's a 404 or 400 error (bad Place ID)
      if (error.message.includes('Place not found') || error.message.includes('Invalid Place ID')) {
        return false;
      }
      return failureCount < 2;
    },
  });
};
