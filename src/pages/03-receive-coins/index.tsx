import ReceiveCoinFrontEnd from '@/components/ContractFrontEndWork/ReceiveCoinFrontEnd';
import Head from 'next/head';

export default function First() {
  return (
    <>
      <Head>
        <title>Title</title>
        {/* <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <ReceiveCoinFrontEnd />
    </>
  );
}
