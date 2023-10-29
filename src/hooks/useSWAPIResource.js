import { useState, useEffect } from 'react';
import { fetchResourceList } from '../api'; 

function useSWAPIResource(resourceType) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSWAPIResource() {
      try {
        setLoading(true)
        const resourceList = await fetchResourceList(resourceType);
        setData(resourceList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchSWAPIResource();
  }, [resourceType]);

  return { data, loading, error };
}

export default useSWAPIResource;