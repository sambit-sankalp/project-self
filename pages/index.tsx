import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import { Container } from '@/components/shared/Container';
import {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Achievement,
  Contact,
} from '@/components/home';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Home() {
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    const hash = asPath.split('#')[1];
    router.push({ hash }, undefined, {
      shallow: true,
      scroll: false,
    });
  }, [router, asPath]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievement />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
