import slim from "../assets/slim.svg";
import sarra from "../assets/sarra.svg";
import mariem from "../assets/mariem.svg";

export const filieres = [
  "Génie Logiciel et Systèmes d'Information",
  "Réseaux et Télécommunications",
  "Informatique de Gestion",
];

export const etudiantsInitiaux = [
  {
    id: 1,
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: filieres[0],
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: slim,
  },
  {
    id: 2,
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: filieres[1],
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: sarra,
  },
  {
    id: 3,
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: filieres[2],
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "", // volontairement vide : démontre la prop par défaut (TP2)
    image: mariem,
  },
];
