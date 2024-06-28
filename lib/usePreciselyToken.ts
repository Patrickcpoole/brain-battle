import { useMutation } from 'react-query';
import axios from 'axios';

// Helper function to encode API Key and Secret
const encodeCredentials = (apiKey: string, apiSecret: string) => {
  return btoa(`${apiKey}:${apiSecret}`);
};

const fetchToken = async () => {
  console.log('fetching token');
  const apiKey = process.env.EXPO_PUBLIC_PRECISELY_API_KEY;
  const apiSecret = process.env.EXPO_PUBLIC_PRECISELY_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error("API key and secret must be defined in environment variables");
  }

  console.log('api key', apiKey);
  console.log('api secret', apiSecret);

  const base64Credentials = encodeCredentials(apiKey, apiSecret);
  console.log('base64 credentials', base64Credentials);

  try {
    const response = await axios.post('https://api.precisely.com/oauth/token', 'grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log('response', response);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export const usePreciselyToken = () => {
  return useMutation(fetchToken, {
    onSuccess: (token) => {
      console.log('Token fetched:', token);
      return token;
    }
  });
};
