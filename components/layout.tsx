import Header from "../components/header";
import Link from "next/link"
type LayoutProp = {
  children: any;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <div>
      <Header />
      <div className="container grid grid-cols-4 gap-4">
        <div>
          <Link href="/">
            <a>Homepage</a>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
