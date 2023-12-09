import EmitFrontEnd from '@/components/ContractFrontEndWork/EmitFrontEnd';
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

      <EmitFrontEnd />
    </>
  );
}
