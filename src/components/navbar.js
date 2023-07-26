import { Link } from "react-router-dom";
import Logo from "./logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navContainerStyle">
      <Logo></Logo>
      <div className="navBar_center">
        <Link to="/" className="linkStyle">
          Home
        </Link>
        <Link to="/create" className="linkStyle">
          Create
        </Link>
        <Link to="/library" className="linkStyle">
          Library
        </Link>
        <Link to="/favourites" className="linkStyle">
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
