// import { FaLinkedinIn } from "react-icons/fa6";
// import { SlSocialTumblr } from "react-icons/sl";
// import { SlSocialInstagram } from "react-icons/sl";
// import { SlSocialFacebook } from "react-icons/sl";
import { easeInOut, easeOut, motion } from "framer-motion";
// import { Link } from "react-router-dom";
import Cards from "./Cards";



export const dataCards = [
        { id: 1, title: "Projet gestion médicale en ligne", image: '/src/assets/images/aknmedconnect.png', descImg: 'Gestion médical', description:'SitWeb', text: 'La plateforme AKN MédiConnect !\ Notre solution de suivi médical en ligne vous permet de consulter vos dossiers, prendre rendez-vous, échanger avec des professionnels de santé et accéder à vos résultats en toute sécurité.', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 2, title: "Dashboard", image: '/src/assets/images/Dashboard.png', description: 'Text', description:'Dash', text: 'Traveau Pratique sur la framework CSS Bootstrap qui s\'agit une interface visuelle qui regroupe et présente des informations clés de manière visuelle et organisée', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 3, title: "Gestion d'evironnement", image: '/src/assets/images/Envi.png', descImg: 'Ensemble préservons la planete', description:'SitWeb', text: 'Une plateforme pour La protection de l\'environnement est un enjeu majeur pour notre société. Il est important de sensibiliser les populations à .', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 4, title: "Calculatrice", image: '/src/assets/images/Calculatrice.png', descImg: 'Calculatrice', description:'Calculator', text: 'Projet d\'apprendre le JavaScript sur la puissance de DOM...', demo:'Demos', code:'Code', details: 'Viewdetails', imgClass: "w-88 h-39"},
        { id: 5, title: "Gestion hotelier", image: '/src/assets/images/Hotel_luxery.png', descImg: 'Luxery hotel', description:'SitWeb', text: 'Plateforme de gestion hôtelière (réservation, restaurant, paiement, back-office) moderne fonctionne de maniere fluide, en offrant une bonne expérience aux clients tout en facilitant le travail des gestionnaires..', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 6, title: "Mon premiere version portfolio", image: '/src/assets/images/portfolio_V1.png', descImg: 'Text', description:'Portfolio', text: 'Portfolio moderne et professionnelle qui présente mes réalisations, compétences et expériences de manière organisée. C’est un outil essentiel pour montrer mon savoir‑faire, surtout dans le domaine developpement web ', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 7, title: "E-Commerce", image: '/src/assets/images/KeruguiShop.png', descImg: 'Boutique en ligne "KeurGuiShop"', description:'SitWeb', text: 'KeurGuiShop est un boutique de vente en ligne qui vent des appareils numériques (Ordinateurs, iPhone et des Androids)...', demo:'Demos', code:'Code', details: 'Viewdetails'},
        { id: 8, title: "Projet1", image: '/src/assets/images', descImg: 'Text', description:'SitWeb', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'}
    ]

export default function SectProjet(){

    // const dataCards = [
    //     { id: 1, title: "Projet gestion médicale en ligne", image: '/src/assets/images/aknmedconnect.png', descImg: 'Gestion médical', description:'SitWeb', text: 'La plateforme AKN MédiConnect !\ Notre solution de suivi médical en ligne vous permet de consulter vos dossiers, prendre rendez-vous, échanger avec des professionnels de santé et accéder à vos résultats en toute sécurité.', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 2, title: "Dashboard", image: '/src/assets/images/Dashboard.png', description: 'Text', description:'Dash', text: 'Traveau Pratique sur la framework CSS Bootstrap qui s\'agit une interface visuelle qui regroupe et présente des informations clés de manière visuelle et organisée', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 3, title: "Gestion d'evironnement", image: '/src/assets/images/Envi.png', descImg: 'Ensemble préservons la planete', description:'SitWeb', text: 'Une plateforme pour La protection de l\'environnement est un enjeu majeur pour notre société. Il est important de sensibiliser les populations à .', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 4, title: "Calculatrice", image: '/src/assets/images/Calculatrice.png', descImg: 'Calculatrice', description:'Calculator', text: 'Projet d\'apprendre le JavaScript sur la puissance de DOM...', demo:'Demos', code:'Code', details: 'Viewdetails', imgClass: "w-88 h-39"},
    //     { id: 5, title: "Gestion hotelier", image: '/src/assets/images/Hotel_luxery.png', descImg: 'Luxery hotel', description:'SitWeb', text: 'Plateforme de gestion hôtelière (réservation, restaurant, paiement, back-office) moderne fonctionne de maniere fluide, en offrant une bonne expérience aux clients tout en facilitant le travail des gestionnaires..', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 6, title: "Mon premiere version portfolio", image: '/src/assets/images/portfolio_V1.png', descImg: 'Text', description:'Portfolio', text: 'Portfolio moderne et professionnelle qui présente mes réalisations, compétences et expériences de manière organisée. C’est un outil essentiel pour montrer mon savoir‑faire, surtout dans le domaine developpement web ', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 7, title: "E-Commerce", image: '/src/assets/images/KeruguiShop.png', descImg: 'Boutique en ligne "KeurGuiShop"', description:'SitWeb', text: 'KeurGuiShop est un boutique de vente en ligne qui vent des appareils numériques (Ordinateurs, iPhone et des Androids)...', demo:'Demos', code:'Code', details: 'Viewdetails'},
    //     { id: 8, title: "Projet1", image: '/src/assets/images', descImg: 'Text', description:'SitWeb', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'}
    // ]


  return (
    <div className=" min-h-screen mt-28 w-full md:w-4xl mx-auto">
      <motion.div className="mt-4 mb-8"
        initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration:  3, ease: easeInOut}}>
            <h2 className="font-medium text-3xl text-white mx-2"> PROJECTS </h2>
              <span className="text-xl text-gray-500 ms-8">Queiques projects que j'ai réalisé</span>
      </motion.div>
              
      <motion.div className="space-y-12  text-white "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration:  3, ease: easeInOut}}
       >
     <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
          {
            dataCards.map((card)=>(
                <Cards key={card.id} {...card}/>
            ))
          }
     </div>

        
      </motion.div>


    </div>


 
  );
}

