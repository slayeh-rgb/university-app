import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import img1 from "./assets/img1.jpeg" ;
import img2 from "./assets/img2.jpg" ;
import img3 from "./assets/img3.jpeg" ;
const FORMULAIRE_VIDE = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI 1",
  ville: "",
};


function App() {
  const  [etudiants, setEtudiants] = useState([
  {
    prenom: " Mohamed Salah",
    nom: "Ltaifi",
    email: "ltaifimohamed384@gmail.com",
    telephone: "+216 50401918",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mednine",
    image: img1 
},
  {
    prenom: "belhassen",
    nom: "emp1re",
    email: "belhassen.emp1re@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: img2
  },

  {
    prenom: "johan",
    nom: "cruyff",
    email: "cruyff.johan@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    image: img3
  },
  ]);
  // État 2 : la filière sélectionnée pour le filtre
  const [filiereChoisie, setFiliereChoisie] = useState("Toutes");

  // État 3 : le contenu du formulaire d'ajout
  const [formulaire, setFormulaire] = useState(FORMULAIRE_VIDE);

  // ---------- Ajouter ----------

function gererChangement(event) {
    const { name, value } = event.target;
    setFormulaire({ ...formulaire, [name]: value });
  }

  function ajouterEtudiant(event) {
    event.preventDefault();
    if (etudiants.some((e) => e.email === formulaire.email)) {
      alert("Un étudiant avec cet e-mail existe déjà.");
      return;
    }
    // On crée un NOUVEAU tableau (on ne modifie jamais l'ancien)
    setEtudiants([...etudiants, formulaire]);
    setFormulaire(FORMULAIRE_VIDE);
  }

  // ---------- Supprimer ----------
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((e) => e.email !== email));
  }

  // ---------- Modifier ----------
  function modifierEtudiant(email, modifications) {
    setEtudiants(
      etudiants.map((e) => (e.email === email ? { ...e, ...modifications } : e))
    );
  }

  // ---------- Filtrer ----------
  const filieres = ["Toutes", ...new Set(etudiants.map((e) => e.filiere))];
  const etudiantsAffiches =
    filiereChoisie === "Toutes"
      ? etudiants
      : etudiants.filter((e) => e.filiere === filiereChoisie);

  return (
    <div className="app">
      <Header />
      <Navbar />

      <section className="actions">
        <form className="form-ajout" onSubmit={ajouterEtudiant}>
          <h2>Ajouter un étudiant</h2>
          <input name="prenom" placeholder="Prénom" value={formulaire.prenom} onChange={gererChangement} required />
          <input name="nom" placeholder="Nom" value={formulaire.nom} onChange={gererChangement} required />
          <input name="email" type="email" placeholder="E-mail" value={formulaire.email} onChange={gererChangement} required />
          <input name="telephone" placeholder="Téléphone" value={formulaire.telephone} onChange={gererChangement} required />
          <input name="filiere" placeholder="Filière" value={formulaire.filiere} onChange={gererChangement} required />
          <input name="groupe" placeholder="Groupe" value={formulaire.groupe} onChange={gererChangement} required />
          <input name="ville" placeholder="Ville (facultatif)" value={formulaire.ville} onChange={gererChangement} />
          <button type="submit" className="btn">+ Ajouter un étudiant</button>
        </form>

        <div className="filtre">
          <label htmlFor="filiere">Filtrer par filière : </label>
          <select
            id="filiere"
            value={filiereChoisie}
            onChange={(e) => setFiliereChoisie(e.target.value)}
          >
            {filieres.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <span className="compteur">{etudiantsAffiches.length} étudiant(s)</span>
        </div>
      </section>

      <main className="container">
        {etudiantsAffiches.length === 0 && (
          <p className="vide">Aucun étudiant à afficher.</p>
        )}
        {etudiantsAffiches.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            {...etudiant}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
