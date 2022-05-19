import { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window && window.location) {
      setLocation(window.location);
      setLoading(false);
    }
  }, []);

  return { location, loading };
};

export default useLocation;
