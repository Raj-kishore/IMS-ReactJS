import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


// getStaicProps always runs on server side. So direct db connection instead of api consumption is possible. 
export async function getStaticProps() {
  const allPostsData = [
      {
        "id": 1,
        "desc": "bring me coffee"
      },
      {
        "id": 2, 
        "desc": "Today is my induction."
      }
    ];
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Login</h1>

      </section>

    </Layout>
  );
}