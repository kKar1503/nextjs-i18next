import '../styles/globals.css';
import type { AppProps } from 'next/app';

// i18n Config Import
import '../config/i18n';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
