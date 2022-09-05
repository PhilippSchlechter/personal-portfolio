import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Hi everyone! I am Philipp and I just started to code. Follow me on
              my journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
