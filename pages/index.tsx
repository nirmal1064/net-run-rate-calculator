import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Net Run Rate Calculator</title>
        <meta
          name="description"
          content="Calculate net run rate (NRR) in cricket"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>IPL Teams Table</h1>
        <table className={styles.main}>
          <caption>2019 Fourth Quarter Report</caption>
        </table>
      </main>
    </div>
  );
};

export default Home;
