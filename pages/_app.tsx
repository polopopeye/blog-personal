import { Provider } from 'react-redux';
import { store } from '../src/store';
import '../styles/globals.css';
import '../src/styles/global.css';
import '../src/components/crearArticulos/modules/styleEditor.css';
import { HelmetProvider } from 'react-helmet-async';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </HelmetProvider>
  );
}

export default appWithTranslation(MyApp);