
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
}

const fetchGoogleReviews = async (placeId: string): Promise<GoogleReview[]> => {
  const { data, error } = await supabase.functions.invoke('fetch-google-reviews', {
    body: { placeId }
  });
  
  if (error) {
    throw new Error(`Failed to fetch Google Reviews: ${error.message}`);
  }
  
  if (!data) {
    throw new Error('No data received from Google Reviews API');
  }
  
  return data.reviews || [];
};

export const useGoogleReviews = (placeId: string) => {
  return useQuery({
    queryKey: ['googleReviews', placeId],
    queryFn: () => fetchGoogleReviews(placeId),
    enabled: !!placeId,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
  });
};
