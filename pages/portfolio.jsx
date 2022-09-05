import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Soon to come.</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <h4 className="portfolio-name">1</h4>
                <div className="portfolio-category">a</div>
              </div>
              <div className="portfolio-item">
                <h4 className="portfolio-name">2</h4>
                <div className="portfolio-category">b</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
