import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import ProfilApropos from "../components/profilApropos/ProfilApropos"
export default function Apropos(){


    return(
        <div className="min-h-screen flex flex-col left-0 right-0 gap-3">

            <Header/>
            <ProfilApropos/>

             <Footer/>
        </div>
    )
}