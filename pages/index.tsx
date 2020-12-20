import Layout from "../components/layout";
import { useSession, getSession, getCsrfToken } from 'next-auth/client'
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [ session, loading ] = useSession()
  return (
    <Layout>
      <Head>
        <title>Starter</title>
      </Head>
      {session && <h2>
        <Link href="/ps">
          <a>Protected</a>
        </Link>
      </h2>
      }
      <h2>
      <Link href="/api_check">
        <a>Check Session/JWT</a>
      </Link>
      </h2>
    </Layout>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getSession(context)
    }
  }
}
