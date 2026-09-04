import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-mark">ABC</span>
          <span className="navbar-logo-word">Tutoring</span>
        </Link>
        {pathname !== "/listings" && (
          <Link to="/listings" className="btn btn-secondary">
            Find a Tutor
          </Link>
        )}
      </div>
    </header>
  );
}
