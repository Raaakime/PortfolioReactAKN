import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import SectionCentre from '../components/sectionHub/SectionCentre'
import Footer from '../components/Footer/Footer'

export default function Accueil(){


    return (
        <div className='min-h-screen flex flex-col left-0 right-0 bg-gray-950 g-4'>
              <Header/>
              <Hero/>
              <SectionCentre/>
              <Footer/>
        </div>
    )
}

