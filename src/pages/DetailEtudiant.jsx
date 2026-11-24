import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentContext } from "../context/StudentContext.jsx";

function DetailEtudiant() {
  const { id } = useParams(); // l'id de l'URL est une chaîne
  const { etudiants } = useContext(StudentContext);
  const etudiant = etudiants.find((e) => String(e.id) === id);

  if (!etudiant) {
    return (
      <section className="page">
        <h2>Étudiant introuvable</h2>
        <Link className="btn" to="/etudiants">Retour à la liste</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>{etudiant.prenom} {etudiant.nom}</h2>
      {etudiant.image && <img className="photo-detail" src={etudiant.image} alt={etudiant.prenom} />}
      <p><strong>Email :</strong> {etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année :</strong> {etudiant.anneeEtude}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville || "Non renseignée"}</p>
      <Link className="btn" to="/etudiants">Retour à la liste</Link>
    </section>
  );
}
export default DetailEtudiant;
