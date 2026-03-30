import { useRouter } from 'next/router';

const useLocation = () => {
  const router = useRouter();

  return {
    location: {
      pathname: router.pathname,
      search: router.query,
      href: router.asPath,
    },
    loading: false,
  };
};

export default useLocation;
