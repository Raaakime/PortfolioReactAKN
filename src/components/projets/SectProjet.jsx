import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cards from "./Cards";

export default function SectProjet(){

    const dataCards = [
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'},
        {title: "Projet1", image: '', description: 'Text', pText:'PetitText', text: 'prgr', demo:'Demos', code:'Code', details: 'Viewdetails'}
    ]


  return (
    <div className=" min-h-screen mt-28 w-full md:w-4xl mx-auto">
      {/* Section gauche (fixe) */}
   

      {/* Section gauche (scrollable) */}
      <motion.div className="space-y-12  text-white "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration:  3, ease: easeInOut}}
       >
     <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
          {
            dataCards.map((card, index)=>(
                <Cards key={index} {...card}/>
            ))
          }
     </div>

        
      </motion.div>


    </div>


 
  );
}

