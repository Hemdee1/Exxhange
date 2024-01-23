import Header from "./Header";
import Sidebar from "./Sidebar";

interface HomeProps {
  children: JSX.Element;
}

export default function Container({ children }: HomeProps) {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="flex justify-center mt-[20px]">{children}</div>
    </div>
  );
}
