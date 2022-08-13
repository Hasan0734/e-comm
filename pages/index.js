import Head from "next/head";
import Layout from "../components/client/Layout/Layout";
import OfferBanner from "../components/client/OfferBanner/offerBanner";

export default function Home() {
  return (
    <Layout>
      <OfferBanner />
    </Layout>
  );
}
