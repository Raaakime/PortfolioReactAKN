
import Credential from "./pages/Credential"
import Accueil from "./pages/Accueil"
import Apropos from "./pages/Apropos"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageDetails from "./components/projets/pageDetails"
import P_Details from "./pages/P_Details"


function App() {

 const detailsData = [
        {
           id: 1,
            themeProjet: "Gestion intégrée des rendez-vous, téléconsultation et suivi des patients",
            imgProjet: "../public/assets/images/aknmedconnect.png",
            desImg: "Plateforme médicale" ,
             aproposProjet: ["Mediconnect est une plateforme de gestion intégrée dont l’objectif principal est d'optimiser la gestion des rendez-vous, des consultations et du suivi médical des patients.",
                             "Conçu spécifiquement pour le contexte sénégalais, ce système vise à résoudre les problèmes majeurs du secteur de la santé.",
                             "Il cible notamment la gestion manuelle des rendez-vous, la fragmentation des dossiers médicaux et l'inégalité d’accès aux soins due à la concentration des infrastructures."
             ],
              objectifProject: [
                                  "Notre objectif est de faciliter la communication en ligne entre le médecin et le patient grâce à une plateforme sécurisée et robustique qui offre des services de consultation vidéo, de chat médical et de gestion des patients, en privilégiant l'accessibilité et la sécurité des données.",
                                  " l’expérience utilisateur et en facilitant l’accès à un hôpital digital qui propose des services de médecine générale et de pédiatrie 24 heures sur 24 et 7 jours sur 7, ainsi qu’un annuaire médical numérique de 3 000 spécialistes dans plus de 35 spécialités à la demande.",
                                  "Gestion des Rendez-vous : Permet la recherche de praticiens par nom, spécialité ou clinique, ainsi que la prise, l'annulation et la reprogrammation de rendez-vous,. Les médecins peuvent définir et modifier leurs créneaux de disponibilité",
                                  "Téléconsultation Sécurisée : Intégration de Jitsi Meet (solution open source WebRTC) pour offrir une salle de consultation vidéo sécurisée en temps réel,. Cela inclut la possibilité de générer des ordonnances numériques (PDF signé) et de rédiger des comptes rendus médicaux à l'issue de la consultation"
              ],
               fonctionnaliteProject: [
                                        "Gestion de compte : Le patient peut créer son profil, se connecter, et mettre à jour ses informations personnelles et médicale",
                                        "Téléconsultation : Le patient peut accéder à une salle de consultation vidéo sécurisée (via Jitsi Meet) pour interagir avec son médecin.",
                                        "Ordonnances numériques : Possibilité de générer et de télécharger des ordonnances numériques signées à l'issue de la consultatio",
                                        "Avis et Évaluations : Possibilité de laisser un avis et une note sur un médecin après une consultation."

                                      ],

                competenceProject: [
                                     "01 | Conception: et Modélisation : Maîtrise de la modélisation fonctionnelle à l'aide de BoomUml language UML",
                                     "02 | Développement Back-end : Expertise en PHP pour mettre le dynamisme des pages",
                                     "03 | Développement Front-end : Utilisation du HTML, CSS et JavaScript et la Faromwork CSS Bootstrap pour créer des interfaces fluid",
                                     "04 | Gestion de Base de données :  Configuration et manipulation de bases de données relationnelles (production avec MySqL) ",
                                     "05 | Intégration de Services Tiers : Intégration technique de la solution open source Jitsi Meet (WebRTC) pour la téléconsultation vidéo sécurisée."            
                                  ]                       
        },

         {
            id: 2,
            themeProjet: "I2",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },

         {
             id: 3,
            themeProjet: "id3",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },


         {
           id: 4,
            themeProjet: "id4",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },

         {
           id: 5,
            themeProjet: "id5",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },

          {
           id: 6,
            themeProjet: "id6",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },

          {
           id: 7,
            themeProjet: "id7",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        },

          {
           id: 8,
            themeProjet: "id8",
            imgProjet: "",
            desImg: "",
             aproposProjet: "",
              objectifProject: "",
               fonctionnaliteProject: "",
                competenceProject: ""
        }
     ]


  return <BrowserRouter>
              <Routes>
                      <Route path={"/"} element={<Accueil />}/>
                      <Route path={"/projets"} element={<Projets />}/>
                      <Route path={"/apropos"} element={<Apropos />}/>
                      <Route path={"/contact"} element={<Contact />}/>
                      <Route path={"/credentials"} element={<Credential />}/>
                      <Route path={"/details"} element={<PageDetails detailsData={detailsData}/>}/>
                      <Route path={"/details/:id"} element={<P_Details detailsData={detailsData}/>}/>
                     
              </Routes>
      </BrowserRouter>
  
}

export default App
