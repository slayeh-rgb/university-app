import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import img1 from "./assets/img1.jpeg" ;
import img2 from "./assets/img2.jpg" ;
import img3 from "./assets/img3.jpeg" ;
const etudiants = [
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
    email: "belhassen@gmail.emp1re.com",
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
  ];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
