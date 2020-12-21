import { useSession, getSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Layout>
      <Head>
        <title>Starter</title>
      </Head>
      {session && (
        <h2>
          <Link href="/ps">Protected</Link>
        </h2>
      )}
      {!loading && (
        <h2>
          <Link href="/api_check">Check Session/JWT</Link>
        </h2>
      )}
    </Layout>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
