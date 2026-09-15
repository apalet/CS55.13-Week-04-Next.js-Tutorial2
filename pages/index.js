// pages/index.js is the home page. In the Pages Router, this file maps to the "/" route.
import Head from 'next/head';
// Layout wraps the page with the shared header/profile. siteTitle is a named export used in the document title.
import Layout, { siteTitle } from '../components/layout';
// CSS Modules: utilStyles.headingMd becomes a unique class name so styles stay scoped to this usage.
import utilStyles from '../styles/utils.module.css';
// Home.module.css holds homepage layout pieces like the intro card.
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    // Passing home tells Layout this is the homepage, so it shows the large profile photo and h1 name.
    <Layout home>
      {/* Head updates tags in <head>. Here it sets the browser tab title. */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* headingMd is typography; introCard is the card chrome from Home.module.css. */}
      <section className={`${utilStyles.headingMd} ${homeStyles.introCard}`}>
        <p>Hi I'm Andree. I'm a Full-Stack Developer building modern, user-friendly web applications with 
          JavaScript, React, Node.js, and Next.js. Find some of my projects at <a href="https://github.com/apalet">Github</a>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
