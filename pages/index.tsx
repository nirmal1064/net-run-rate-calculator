import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Net Run Rate Calculator</title>
        <meta
          name="description"
          content="Calculate net run rate (NRR) in cricket"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
};

export default Home;
