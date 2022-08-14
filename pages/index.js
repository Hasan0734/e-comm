import Head from "next/head";
import BestSeller from "../components/client/BestSeller/BestSeller";
import Layout from "../components/client/Layout/Layout";
import OfferBanner from "../components/client/OfferBanner/offerBanner";

export default function Home() {
  return (
    <Layout>
      <OfferBanner />
      <BestSeller/>
    </Layout>
  );
}
