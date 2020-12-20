import Header from "../components/header";

type LayoutProp = {
  children: any;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <div>
      <Header/>
      <div className="container grid grid-cols-4 gap-4">
        <div>{children}</div>
      </div>
    </div>
  );
}
