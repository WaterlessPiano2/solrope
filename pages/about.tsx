import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import PublickKeyInput from "../components/PublickKeyInput";
import Galery from "../components/Galery";

const AboutPage = () => {
  const [data, setData] = useState([]);
  console.log("a pageL: ", data);
  console.log("a pageL: ", data.length);
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <PublickKeyInput nfts={async (x) => setData(x)} />
      {data?.length ? <Galery nfts={data} /> : null}
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
