import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="containerStyle">{children}</div>
    </div>
  );
};

export default Layout;
