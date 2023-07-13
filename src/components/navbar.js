import { Link } from "react-router-dom";

export default function Navbar() {
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
}
