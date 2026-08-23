import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Cv from "../components/credentials/Cv"

export default function Credential(){


    return(
        <div className="min-h-screen flex flex-col left-0 right-0 gap-3 bg-gray-950">

            <Header/>
             <Cv/>
            <Footer/>
        </div>
    )
}