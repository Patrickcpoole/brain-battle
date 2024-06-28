import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from '@/context/GlobalProvider';
import * as Location from 'expo-location';

export const useNearbySchools = () => {
  const { preciselyToken } = useGlobalContext();

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchSchools = async (location: string) => {
    console.log('location', location)
    if (!preciselyToken) {
      setError("Precisely token is not available");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('https://api.precisely.com/schools/v1/school/byaddress', {
        params: {
          address: location,
          searchRadius: 3218.688, // meters
          searchRadiusUnit: 'meters',
          assignedSchoolsOnly: 'N',
          districtSchoolsOnly: 'N',
          maxCandidates: 10
        },
        headers: {
          'Authorization': `Bearer ${preciselyToken}`
        }
      });
      console.log('precisely resp', response.data)
      setSchools(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getLocationAndFetchSchools = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log('location resp', location)
        setLocation(location);

        // Convert latitude and longitude to a valid address if necessary
        const address = `${location.coords.latitude},${location.coords.longitude}`;
        fetchSchools(address);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getLocationAndFetchSchools();
  }, [preciselyToken]);

  return { schools, loading, error, errorMsg };
};
