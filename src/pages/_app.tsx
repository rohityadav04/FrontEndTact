import { Layout } from '@/components/shared';
import '@/styles/theme.scss';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ConfigProvider, theme } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const manifestUrl =
  'https://ton-ide-nujan.vercel.app/assets/ton/tonconnect-manifest.json';

export default function App({ Component, pageProps }: AppProps) {
  const { darkAlgorithm } = theme;
  useEffect(() => {
    AOS.init({
      // easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#A08DFF',
          },
          algorithm: darkAlgorithm,
        }}
      >
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TonConnectUIProvider>
      </ConfigProvider>
    </>
  );
}
