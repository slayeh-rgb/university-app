import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ etudiantAModifier, onAjouterEtudiant, onModifierEtudiant, onAnnuler }) {
  // Champs contrôlés, préremplis en mode modification (?. et || "")
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || null);

  // Messages d'erreur : {} = aucune erreur
  const [erreurs, setErreurs] = useState({});

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) nouvellesErreurs.nom = "Le nom est obligatoire.";
    if (!prenom.trim()) nouvellesErreurs.prenom = "Le prénom est obligatoire.";

    if (!email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nouvellesErreurs.email = "L'email n'est pas valide.";
    }

    if (!telephone.trim()) nouvellesErreurs.telephone = "Le téléphone est obligatoire.";

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0; // true = aucune erreur
  }

  function handleImageChange(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setImage(URL.createObjectURL(fichier)); // URL temporaire pour l'aperçu
    }
  }

  function reinitialiser() {
    setNom(""); setPrenom(""); setEmail(""); setTelephone("");
    setFiliere(""); setAnneeEtude(""); setGroupe(""); setVille("");
    setImage(null); setErreurs({});
  }

  function handleSubmit(e) {
    e.preventDefault();                 // empêche le rechargement de la page
    if (!validerFormulaire()) return;   // on s'arrête s'il y a des erreurs

    const nouvelEtudiant = {
      nom, prenom, email, telephone, filiere, anneeEtude, groupe, ville, image,
    };

    if (etudiantAModifier) {
      onModifierEtudiant(nouvelEtudiant);
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      reinitialiser();
    }
  }

  return (
    <form className="student-form" onSubmit={handleSubmit} noValidate>
      <h2>{etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>

      <label htmlFor="nom">Nom</label>
      <input id="nom" name="nom" type="text" placeholder="Nom"
             value={nom} onChange={(e) => setNom(e.target.value)} required />
      {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}

      <label htmlFor="prenom">Prénom</label>
      <input id="prenom" name="prenom" type="text" placeholder="Prénom"
             value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
      {erreurs.prenom && <p className="erreur">{erreurs.prenom}</p>}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="exemple@gmail.com"
             value={email} onChange={(e) => setEmail(e.target.value)} required />
      {erreurs.email && <p className="erreur">{erreurs.email}</p>}

      <label htmlFor="telephone">Téléphone</label>
      <input id="telephone" name="telephone" type="tel" placeholder="+216 99 999 999"
             value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
      {erreurs.telephone && <p className="erreur">{erreurs.telephone}</p>}

      <label htmlFor="filiere">Filière</label>
      <select id="filiere" name="filiere" value={filiere}
              onChange={(e) => setFiliere(e.target.value)} required>
        <option value="" disabled>-- Choisir une filière --</option>
        <option value="Génie Logiciel et Systèmes d'Information">Génie Logiciel et Systèmes d'Information</option>
        <option value="Réseaux et Télécommunications">Réseaux et Télécommunications</option>
        <option value="Informatique de Gestion">Informatique de Gestion</option>
      </select>

      <label htmlFor="anneeEtude">Année d'étude</label>
      <input id="anneeEtude" name="anneeEtude" type="text" placeholder="2ème année"
             value={anneeEtude} onChange={(e) => setAnneeEtude(e.target.value)} />

      <label htmlFor="groupe">Groupe</label>
      <input id="groupe" name="groupe" type="text" placeholder="GLSI 2"
             value={groupe} onChange={(e) => setGroupe(e.target.value)} />

      <label htmlFor="ville">Ville</label>
      <input id="ville" name="ville" type="text" placeholder="Mahdia"
             value={ville} onChange={(e) => setVille(e.target.value)} />

      <label htmlFor="photo">Photo</label>
      <input id="photo" name="photo" type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img className="apercu" src={image} alt="Aperçu" />}

      <div className="form-boutons">
        <button type="submit">{etudiantAModifier ? "Enregistrer" : "Ajouter"}</button>
        {etudiantAModifier && (
          <button type="button" className="gris" onClick={onAnnuler}>Annuler</button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;