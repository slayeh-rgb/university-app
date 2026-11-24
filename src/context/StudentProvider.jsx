import { useState } from "react";
import { StudentContext } from "./StudentContext.jsx";
import { etudiantsInitiaux } from "../data/student.js";

export function StudentProvider({ children }) {
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);

  function ajouterEtudiant(nouvelEtudiant) {
    setEtudiants([...etudiants, { ...nouvelEtudiant, id: String(Date.now()) }]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  function modifierEtudiant(id, donnees) {
    setEtudiants(etudiants.map((e) => (e.id === id ? { ...e, ...donnees } : e)));
  }

  return (
    <StudentContext.Provider
      value={{ etudiants, ajouterEtudiant, supprimerEtudiant, modifierEtudiant }}
    >
      {children}
    </StudentContext.Provider>
  );
}
