import { useContext } from "react";
import { StudentContext } from "../context/StudentContext.jsx";

// Utilise directement le contexte : plus de prop drilling
function BoutonSupprimer({ id }) {
  const { supprimerEtudiant } = useContext(StudentContext);
  return (
    <button type="button" className="danger" onClick={() => supprimerEtudiant(id)}>
      Supprimer
    </button>
  );
}
export default BoutonSupprimer;
