import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  // État local à CHAQUE carte : visibilité des coordonnées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // État local : mode édition + valeurs en cours de modification
  const [enEdition, setEnEdition] = useState(false);
  const [brouillon, setBrouillon] = useState({
    telephone: props.telephone,
    groupe: props.groupe,
    ville: props.ville || "",
  });

  // Valeurs par défaut
  const ville = props.ville || "Non renseignée";
  const image =
    props.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      props.prenom + " " + props.nom
    )}&size=200&background=6eaceb&color=fff`;

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  function gererChangement(event) {
    setBrouillon({ ...brouillon, [event.target.name]: event.target.value });
  }

  function enregistrer() {
    props.onModifier(props.email, brouillon);
    setEnEdition(false);
  }

  function annuler() {
    setBrouillon({
      telephone: props.telephone,
      groupe: props.groupe,
      ville: props.ville || "",
    });
    setEnEdition(false);
  }

  return (
    <div className="card">
      <img src={image} alt={`Photo de ${props.prenom} ${props.nom}`} />

      <h2>Fiche étudiant</h2>

      <p><strong>Nom &amp; Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>

      {/* Affichage conditionnel : mode édition OU mode lecture */}
      {enEdition ? (
        <div className="edition">
          <input name="telephone" value={brouillon.telephone} onChange={gererChangement} placeholder="Téléphone" />
          <input name="groupe" value={brouillon.groupe} onChange={gererChangement} placeholder="Groupe" />
          <input name="ville" value={brouillon.ville} onChange={gererChangement} placeholder="Ville" />
        </div>
      ) : (
        <>
          <p><strong>Groupe :</strong> {props.groupe}</p>
          <p><strong>Ville :</strong> {ville}</p>
        </>
      )}

      {/* Affichage conditionnel avec && */}
      {coordonneesVisibles && !enEdition && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <div className="boutons">
  <button className="btn" onClick={basculerCoordonnees}>
    {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
  </button>

  <a className="btn" href={`mailto:${props.email}`}>Contacter</a>

  {/* AJOUT TP4 : envoie l'étudiant au parent */}
  <button className="btn gris" onClick={() => props.onModifier(props.etudiant)}>
    Modifier
  </button>

  {/* CHANGEMENT TP4 : on supprime par id */}
  <button className="btn rouge" onClick={() => props.onSupprimer(props.id)}>
    Supprimer
  </button>
</div>
    </div>
  );
}

export default StudentCard;
