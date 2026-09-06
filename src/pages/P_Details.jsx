import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import PageDetails from "../components/projets/pageDetails"
export default function P_Details({detailsData}){


    return(
        <div className="min-h-screen flex flex-col left-0 right-0 gap-3 bg-gray-950">

            <Header/>
              <PageDetails detailsData={detailsData}/>
             <Footer/>
        </div>
    )
}