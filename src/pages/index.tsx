import Hero from '@/components/Hero/Hero';
import LiveStats from '@/components/LiveStats/LiveStats';
import RecentPost from '@/components/RecentPost/RecentPost';
import Team from '@/components/Team/Team';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
        {/* <meta name="description" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* <Header /> */}
      <Hero />
      <Team />
      <LiveStats />
      <RecentPost />
    </>
  );
}
