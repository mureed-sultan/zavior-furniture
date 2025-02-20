import Navbar from "./Navbar";
import "../styles/global.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f4f0ea] text-[#1b1816]">
      <Navbar />
      <main className="mt-16">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
