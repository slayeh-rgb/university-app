import { useContext } from "react";
import { StudentContext } from "../context/StudentContext.jsx";

function BoutonSupprimer({ id }) {
  const { supprimerEtudiant } = useContext(StudentContext);
  return (
    <button type="button" className="danger" onClick={() => supprimerEtudiant(id)}>
      Supprimer
    </button>
  );
}
export default BoutonSupprimer;
