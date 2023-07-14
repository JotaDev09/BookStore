import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainerStyle">
      <Link to="/" className="linkStyle">
        Home
      </Link>
      <Link to="/create" className="linkStyle">
        Create
      </Link>
    </div>
  );
};

export default Navbar;
