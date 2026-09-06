
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
            themeProjet: "Gestion projet",
            imgProjet: "JGHJKD",
            desImg: "",
             aproposProjet: "rhtyjjkk",
              objectifProject: "ukimm",
               fonctionnaliteProject: "trutiu",
                competenceProject: "ertrety"
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
