import Navbar from "./navbar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="containerStyle">{children}</div>
    </div>
  );
};

export default Layout;
