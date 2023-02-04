import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Container } from '@/components/shared/Container';
import Card from '@/components/home/Card';
import HeroDescription from '@/components/home/HeroDescription';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HeroDescription />
        {/* <div className="w-full mt-20 flex flex-row justify-between items-center">
          <HeroDescription />
          <Card
            name="Sambit Sankalp"
            title="Full Stack Devloper"
            social={{ github: '/', dribbble: '/', twitter: '/', email: '/' }}
          />
        </div> */}
      </Container>
    </>
  );
}
