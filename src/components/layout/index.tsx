import Header from "./header";
import Sidebar from "./sidebar";

interface props {
  children: React.ReactNode;
}

function Layout({ children }: props) {
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
