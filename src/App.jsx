import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import StudentForm from "./components/StudentForm.jsx";
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
    id:"1",
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
    id:"2",
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
    id:"3",
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
  const [filiereChoisie, setFiliereChoisie] = useState("Toutes");


  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

 
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = { ...nouvelEtudiant, id: Date.now() };
    setEtudiants([...etudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));

    if (etudiantAModifier?.id === id) {
      setEtudiantAModifier(null);
    }
  }

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }


  function enregistrerModification(donnees) {
    setEtudiants(
      etudiants.map((e) =>
        e.id === etudiantAModifier.id ? { ...e, ...donnees } : e
      )
    );
    setEtudiantAModifier(null); 
  }

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
