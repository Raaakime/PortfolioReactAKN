import Accueil from "./pages/Accueil"
import Apropos from "./pages/Apropos"
import Projets from "./pages/Projets"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return <BrowserRouter>
              <Routes>
                      <Route path={"/"} element={<Accueil />}/>
                      <Route path={"/projets"} element={<Projets />}/>
                      <Route path={"/apropos"} element={<Apropos />}/>
              </Routes>
      </BrowserRouter>
  
}

export default App
