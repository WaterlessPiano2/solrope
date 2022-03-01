import Link from "next/link";
import Layout from "../components/Layout";
import PublickKeyInput from "../components/PublickKeyInput";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <PublickKeyInput />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
