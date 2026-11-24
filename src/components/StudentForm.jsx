import { useState } from "react";
import "./StudentForm.css";

const FILIERES = [
  "Génie Logiciel et Systèmes d'Information",
  "Réseaux et Télécommunications",
  "Informatique de Gestion",
];

const VIDE = {
  nom: "", prenom: "", email: "", telephone: "", filiere: FILIERES[0],
  anneeEtude: "1ère année", groupe: "", ville: "", image: "",
};

function StudentForm({ etudiantAModifier, onAjouterEtudiant, onModifierEtudiant, onAnnuler }) {
  const [champs, setChamps] = useState({
    nom: etudiantAModifier?.nom || VIDE.nom,
    prenom: etudiantAModifier?.prenom || VIDE.prenom,
    email: etudiantAModifier?.email || VIDE.email,
    telephone: etudiantAModifier?.telephone || VIDE.telephone,
    filiere: etudiantAModifier?.filiere || VIDE.filiere,
    anneeEtude: etudiantAModifier?.anneeEtude || VIDE.anneeEtude,
    groupe: etudiantAModifier?.groupe || VIDE.groupe,
    ville: etudiantAModifier?.ville || VIDE.ville,
    image: etudiantAModifier?.image || VIDE.image,
  });
  const [erreurs, setErreurs] = useState({});

  function handleChange(e) {
    setChamps({ ...champs, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setChamps({ ...champs, image: URL.createObjectURL(fichier) });
    }
  }

  function valider() {
    const nouvellesErreurs = {};
    if (!champs.nom.trim()) nouvellesErreurs.nom = "Le nom est obligatoire.";
    if (!champs.prenom.trim()) nouvellesErreurs.prenom = "Le prénom est obligatoire.";
    if (!champs.email.trim()) nouvellesErreurs.email = "L'email est obligatoire.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(champs.email))
      nouvellesErreurs.email = "L'email n'est pas valide.";
    if (!champs.telephone.trim()) nouvellesErreurs.telephone = "Le téléphone est obligatoire.";
    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if (!valider()) return;
    const nouvelEtudiant = { ...champs };
    if (etudiantAModifier) {
      onModifierEtudiant(nouvelEtudiant);
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      setChamps(VIDE);
    }
  }

  return (
    <form className="student-form" onSubmit={handleSubmit} noValidate>
      <h2>{etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>

      <label htmlFor="prenom">Prénom</label>
      <input id="prenom" name="prenom" type="text" required value={champs.prenom} onChange={handleChange} />
      {erreurs.prenom && <p className="erreur">{erreurs.prenom}</p>}
      <label htmlFor="nom">Nom</label>
      <input id="nom" name="nom" type="text" required value={champs.nom} onChange={handleChange} />
      {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required value={champs.email} onChange={handleChange} />
      {erreurs.email && <p className="erreur">{erreurs.email}</p>}
      <label htmlFor="telephone">Téléphone</label>
      <input id="telephone" name="telephone" type="tel" required value={champs.telephone} onChange={handleChange} />
      {erreurs.telephone && <p className="erreur">{erreurs.telephone}</p>}

      <label htmlFor="filiere">Filière</label>
      <select id="filiere" name="filiere" value={champs.filiere} onChange={handleChange}>
        {FILIERES.map((f) => <option key={f} value={f}>{f}</option>)}
      </select>

      <label htmlFor="anneeEtude">Année d'étude</label>
      <select id="anneeEtude" name="anneeEtude" value={champs.anneeEtude} onChange={handleChange}>
        <option>1ère année</option>
        <option>2ème année</option>
        <option>3ème année</option>
      </select>

      <label htmlFor="groupe">Groupe</label>
      <input id="groupe" name="groupe" type="text" value={champs.groupe} onChange={handleChange} />
      <label htmlFor="ville">Ville</label>
      <input id="ville" name="ville" type="text" value={champs.ville} onChange={handleChange} />

      <label htmlFor="image">Photo</label>
      <input id="image" type="file" accept="image/*" onChange={handleImage} />
      {champs.image && <img className="apercu" src={champs.image} alt="Aperçu" />}

      <div className="form-boutons">
        <button type="submit">{etudiantAModifier ? "Enregistrer" : "Ajouter"}</button>
        <button type="reset" className="gris" onClick={() => { setChamps(VIDE); setErreurs({}); }}>
          Réinitialiser
        </button>
        {etudiantAModifier && (
          <button type="button" className="gris" onClick={onAnnuler}>Annuler</button>
        )}
      </div>
    </form>
  );
}
export default StudentForm;
