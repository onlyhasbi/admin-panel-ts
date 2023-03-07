import Chart from "@/components/element/overview/chart/chart";
import Layout from "@/components/layout";
import Head from "next/head";
import type { ReactElement } from "react";

function Home() {
  return (
    <>
      <Head>
        <title>Admin panel</title>
        <meta name="description" content="Admin Panel Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chart/>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
