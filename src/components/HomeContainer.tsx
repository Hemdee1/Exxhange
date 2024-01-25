import Header from "./Header";
import Sidebar from "./Sidebar";

interface HomeProps {
  children: React.ReactNode;
}

export default function Container({ children }: HomeProps) {
  return (
    <div>
      <Sidebar />
      <div>
        {" "}
        <Header />
      </div>
      <div className=" pl-[100px] pr-5 pt-[108px] flex items-center justify-center mb-[20px]">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
