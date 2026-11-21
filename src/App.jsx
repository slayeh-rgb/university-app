import img1 from "./assets/img1.jpeg" ;
import img2 from "./assets/img2.jpg" ;
import img3 from "./assets/img3.jpeg" ;
import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Footer from "./components/Footer.jsx";

const GL = "Génie Logiciel et Systèmes d'Information";

function App() {
  const [etudiants, setEtudiants] = useState([
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
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
  const [filtreFiliere, setFiltreFiliere] = useState("Toutes");
  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = { ...nouvelEtudiant, id: Date.now() };
    setEtudiants([...etudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
    if (etudiantAModifier?.id === id) setEtudiantAModifier(null);
  }

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function enregistrerModification(donnees) {
    setEtudiants(
      etudiants.map((e) => (e.id === etudiantAModifier.id ? { ...e, ...donnees } : e))
    );
    setEtudiantAModifier(null);
  }

  const filieres = ["Toutes", ...new Set(etudiants.map((e) => e.filiere))];
  const etudiantsAffiches = etudiants.filter(
    (e) =>
      (filtreFiliere === "Toutes" || e.filiere === filtreFiliere) &&
      `${e.prenom} ${e.nom}`.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>
      <Header titre="Liste des étudiants" sousTitre="GLSI 2 - Année universitaire 2026-2027" />
      <Navbar />

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "ajout"}
        etudiantAModifier={etudiantAModifier}
        onAjouterEtudiant={ajouterEtudiant}
        onModifierEtudiant={enregistrerModification}
        onAnnuler={() => setEtudiantAModifier(null)}
      />

      <div className="filtres" id="etudiants">
        <input
          type="search"
          placeholder="Rechercher un étudiant…"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <select value={filtreFiliere} onChange={(e) => setFiltreFiliere(e.target.value)}>
          {filieres.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div className="container">
        {etudiantsAffiches.length === 0 && <p>Aucun étudiant trouvé.</p>}
        {etudiantsAffiches.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            etudiant={etudiant}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default App;
