import { useSession, getSession } from 'next-auth/client'
import Layout from "../components/layout";

export default function Page() {
  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) return <Layout><p>Access Denied</p></Layout>

  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}