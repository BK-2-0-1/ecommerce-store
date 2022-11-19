import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useResetHistory() {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener('snipcart.ready', () => {
      Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        router.replace(router.asPath);
      });
    });
  }, []);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
