
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { placeId } = await req.json()
    
    if (!placeId) {
      return new Response(
        JSON.stringify({ error: 'Place ID is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY')
    
    if (!apiKey) {
      console.error('Google Places API key not found in environment')
      return new Response(
        JSON.stringify({ error: 'Google Places API key not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log(`Fetching reviews for Place ID: ${placeId}`)
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}`
    )
    
    if (!response.ok) {
      console.error(`Google API request failed with status: ${response.status}`)
      throw new Error(`Google API request failed: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('Google API response status:', data.status)
    console.log('Google API response:', JSON.stringify(data, null, 2))
    
    if (data.status === 'NOT_FOUND') {
      console.error(`Place not found for ID: ${placeId}`)
      return new Response(
        JSON.stringify({ 
          error: 'Place not found. Please verify your Place ID is correct.',
          placeId: placeId,
          status: data.status
        }),
        { 
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
    
    if (data.status === 'INVALID_REQUEST') {
      console.error(`Invalid request for Place ID: ${placeId}`)
      return new Response(
        JSON.stringify({ 
          error: 'Invalid Place ID format',
          placeId: placeId,
          status: data.status
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
    
    if (data.status !== 'OK') {
      console.error(`Google Places API error: ${data.status}`)
      throw new Error(`Google Places API error: ${data.status}`)
    }
    
    console.log('Successfully fetched place data:', data.result?.name)
    console.log('Number of reviews found:', data.result?.reviews?.length || 0)
    
    return new Response(
      JSON.stringify({ 
        reviews: data.result?.reviews || [],
        rating: data.result?.rating || 0,
        user_ratings_total: data.result?.user_ratings_total || 0,
        place_name: data.result?.name || 'Unknown'
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error fetching Google Reviews:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch Google Reviews',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
