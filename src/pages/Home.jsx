import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <h2>Bienvenue sur university-app</h2>
      <p>Application de gestion des étudiants de l'ISIMa .</p>
      <Link className="btn" to="/etudiants">Voir les étudiants</Link>
    </section>
  );
}
export default Home;
