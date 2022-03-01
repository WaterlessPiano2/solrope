import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import PublickKeyInput from "../components/PublickKeyInput";
import Galery from "../components/Galery";

const AboutPage = () => {
  const [data, setData] = useState();
  console.log("data", data);
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <PublickKeyInput nfts={(x) => setData(x)} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <Galery nfts={data} />
      </p>
    </Layout>
  );
};

export default AboutPage;
