import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext.jsx";
import StudentCard from "../components/StudentCard.jsx";
import StudentForm from "../components/StudentForm.jsx";

function Etudiants() {
  const { etudiants, ajouterEtudiant, modifierEtudiant } = useContext(StudentContext);
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
  const [filtreFiliere, setFiltreFiliere] = useState("Toutes");
  const [recherche, setRecherche] = useState("");

  function enregistrerModification(donnees) {
    modifierEtudiant(etudiantAModifier.id, donnees);
    setEtudiantAModifier(null);
  }

  const filieres = ["Toutes", ...new Set(etudiants.map((e) => e.filiere))];
  const etudiantsAffiches = etudiants.filter(
    (e) =>
      (filtreFiliere === "Toutes" || e.filiere === filtreFiliere) &&
      `${e.prenom} ${e.nom}`.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <>
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "ajout"}
        etudiantAModifier={etudiantAModifier}
        onAjouterEtudiant={ajouterEtudiant}
        onModifierEtudiant={enregistrerModification}
        onAnnuler={() => setEtudiantAModifier(null)}
      />

      <div className="filtres">
        <input type="search" placeholder="Rechercher un étudiant…" value={recherche}
          onChange={(e) => setRecherche(e.target.value)} />
        <select value={filtreFiliere} onChange={(e) => setFiltreFiliere(e.target.value)}>
          {filieres.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>

      <div className="container">
        {etudiantsAffiches.length === 0 && <p>Aucun étudiant trouvé.</p>}
        {etudiantsAffiches.map((etudiant) => (
          <StudentCard key={etudiant.id} etudiant={etudiant} onModifier={setEtudiantAModifier} />
        ))}
      </div>
    </>
  );
}
export default Etudiants;
