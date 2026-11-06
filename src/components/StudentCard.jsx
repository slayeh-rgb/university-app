import "./StudentCard.css";
function StudentCard(props) {
  const ville = props.ville || "Non renseignée";
  return (
    <div className="card">
      <img src={ props.image } alt={`Photo de ${props.prenom} ${props.nom}`} />

      <h2>Fiche étudiant</h2>

      <p><strong>Nom &amp; Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      {/* Exercice TP1 : bouton Contacter -> ouvre le client mail */}
      <a className="btn" href={`mailto:${props.email}`}>Contacter</a>
    </div>
  );
}

export default StudentCard;
