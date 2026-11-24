import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/etudiants">Étudiants</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;
