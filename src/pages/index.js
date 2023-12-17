import React from "react";
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Jobs from "../components/Jobs";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is home page of the personal websit of Ronit Chattopadhyay, Software Engineer" />
      <Hero />
      <Jobs />
    </Layout>
  );
}
