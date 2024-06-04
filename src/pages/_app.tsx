// pages/_app.tsx
import '@/styles/globals.css';
// Correct path based on the actual location of your file
import '@/styles/CategoryBoxes.module.css'; // or '@/styles/CategoryBoxes.css' if you are using global CSS

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
