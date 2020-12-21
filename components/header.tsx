import { signIn, signOut, useSession } from "next-auth/client";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <nav className="flex flex-row">
      <div className="flex-auto"></div>
      <div className="flex-auto"></div>
      <div className="flex-auto"></div>
      <div className="flex-auto"></div>
      {!session && (
        <div className="flex-auto">
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </div>
      )}
      {session && (
        <div className="flex-auto">
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </div>
      )}
    </nav>
  );
}
