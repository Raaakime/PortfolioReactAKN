import Accueil from "./pages/Accueil"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return <BrowserRouter>
              <Routes>
                      <Route path={"/"} element={<Accueil />}/>
              </Routes>
      </BrowserRouter>
  
}

export default App
