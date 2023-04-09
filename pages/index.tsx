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

  const hash = asPath.split('#')[1];
  useEffect(() => {
    router.push({ hash }, undefined, {
      shallow: true,
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Sambit Sankalp</title>
        <meta name="description" content="Developer | Designer" />
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
