import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="main-container">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>;
}

export default MyApp;
