import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page">
      <h2>Page introuvable</h2>
      <p>La page demandée n'existe pas.</p>
      <Link className="btn" to="/">Retour à l'accueil</Link>
    </section>
  );
}
export default NotFound;
