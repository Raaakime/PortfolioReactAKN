import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import SectProjet from "../components/projets/SectProjet"
export default function Projets(){


    return(
        <div className="min-h-screen flex flex-col left-0 right-0 gap-3  bg-gray-950">

            <Header/>
              <SectProjet/>
             <Footer/>
        </div>
    )
}