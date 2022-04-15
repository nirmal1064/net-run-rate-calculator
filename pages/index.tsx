import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Net Run Rate Calculator</title>
        <meta
          name="description"
          content="Calculate net run rate (NRR) in cricket"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form></form>
    </div>
  );
};

export default Home;
