import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "./App.css";
import avatarImage from "./assets/img.jpeg";
function App() {
  const etudiant = {
    nom: " Ltaifi Mohamed Salah",
    email: "ltaifimohamed384@gmail.com",
    telephone: "+216 50401918",
    filiere: "Génie Logiciel et Systèmes d'Information",
    niveau: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    avatar: avatarImage
  };

  const handleContact = () => {
    window.location.href = `mailto:${etudiant.email}`;
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Fiche étudiant</h2>
        <div className="avatar-container">
          <img src={etudiant.avatar} alt="Photo de profil" className="avatar" />
        </div>
        <ul className="info-list">
          <li><strong>Nom & Prénom:</strong> {etudiant.nom}</li>
          <li><strong>Email:</strong> {etudiant.email}</li>
          <li><strong>Téléphone:</strong> {etudiant.telephone}</li>
          <li><strong>Filière:</strong> {etudiant.filiere}</li>
          <li><strong>Année d'étude:</strong> {etudiant.niveau}</li>
          <li><strong>Groupe:</strong> {etudiant.groupe}</li>
          <li><strong>Ville:</strong> {etudiant.ville}</li>
        </ul>
        <button className="btn-contact" onClick={handleContact}>
          Contacter
        </button>
      </div>
    </div>
  );
}

export default App;
