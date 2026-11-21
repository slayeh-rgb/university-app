import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const { etudiant, onSupprimer, onModifier } = props;
  // TP3 : chaque fiche gère sa propre visibilité
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const ville = etudiant.ville || "Non renseignée";
  const initiales = (etudiant.prenom[0] || "") + (etudiant.nom[0] || "");

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      {etudiant.image ? (
        <img src={etudiant.image} alt={`Photo de ${etudiant.prenom}`} />
      ) : (
        <div className="avatar">{initiales.toUpperCase()}</div>
      )}
      <h2>Fiche étudiant</h2>
      <p><strong>Nom & Prénom :</strong> {etudiant.prenom} {etudiant.nom}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année :</strong> {etudiant.anneeEtude}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {etudiant.email}</p>
          <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        </>
      )}

      <div className="boutons">
        <button type="button" onClick={basculerCoordonnees}>
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>
        <a className="btn" href={`mailto:${etudiant.email}`}>Contacter</a>
        <button type="button" onClick={() => onModifier(etudiant)}>Modifier</button>
        <button type="button" className="danger" onClick={() => onSupprimer(etudiant.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default StudentCard;
