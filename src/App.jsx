
import Credential from "./pages/Credential"
import Accueil from "./pages/Accueil"
import Apropos from "./pages/Apropos"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return <BrowserRouter>
              <Routes>
                      <Route path={"/"} element={<Accueil />}/>
                      <Route path={"/projets"} element={<Projets />}/>
                      <Route path={"/apropos"} element={<Apropos />}/>
                      <Route path={"/contact"} element={<Contact />}/>
                      <Route path={"/credentials"} element={<Credential />}/>
                     
              </Routes>
      </BrowserRouter>
  
}

export default App
