import Header from "./header";
import Sidebar from "./sidebar";
import type { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

function Layout({ children }: TProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full flex flex-col px-[3.5rem]">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
