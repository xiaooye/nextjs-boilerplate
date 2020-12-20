import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/ps">
          <a>Protected</a>
        </Link>
      </h2>
    </Layout>
  );
}
