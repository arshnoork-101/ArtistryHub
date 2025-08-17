import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig value={{
        fetcher: async url => {
          const res = await fetch(url);
          if (!res.ok) {
            const error = new Error('Error...');
            error.info = await res.json();
            error.status = res.status;
            throw error;
          }
          return res.json();
        }
      }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}