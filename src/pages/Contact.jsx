import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import SectContact from "../components/sectContact/SectContact"
export default function Contact(){


    return(
        <div className="min-h-screen flex flex-col left-0 right-0 gap-3 bg-gray-950">

            <Header/>
                <SectContact/>
             <Footer/>
        </div>
    )
}