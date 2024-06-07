// pages/_app.tsx
import '@/styles/globals.css';
// Correct path based on the actual location of your file

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
