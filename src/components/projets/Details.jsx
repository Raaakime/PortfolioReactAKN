import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
import { p } from "framer-motion/client";


export default function Details({detailsData=[]}){
const {id} = useParams()
const projet = detailsData.find((item)=>item.id === parseInt(id))

if(!projet) return <p className="text-red-500 text-6xl mt-36">Page introuvable</p>
  return (
  <>
      {/* Section gauche (fixe) */}
      <motion.div className="space-y-12 overflow-y-auto text-white mx-auto"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration:  3, ease: easeInOut}}
       >
        <section className="text-white">
             <h1 className="text-xl font-semibold mb-5">{projet.themeProjet}</h1>
           <div className="font-light shadow-2xl p-2">
           
                               
                                <img src={projet.imgProjet} alt={projet.desImg}/>
                                    
                         </div>
        </section>

        <section className="">
             <h1 className="text-xl font-semibold mb-5">{projet.aproposProjet}</h1>
           <div className="font-light shadow-2xl p-2">
      

          </div>
        </section>

          <section className="">
             <h1 className="text-xl font-semibold mb-5">{projet.objectifProject}</h1>
           <div className="font-light shadow-2xl p-2 space-y-8">
       

          </div>
        </section>

          <section className="">
            <h1 className="text-xl font-semibold mb-5">{projet.fonctionnaliteProject}</h1>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2">
                 
             </div>
        </section>


        <section className="">
            <h1 className="text-xl font-semibold mb-5">{projet.competenceProject}</h1>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2">
               
             </div>
        </section>

        
      </motion.div>


      {/* Section droite (scrollable) */}
          <motion.div  className="md:sticky md:top-32 h-fit w-fit mx-auto bg-gray-900 text-white p-5 rounded-lg shadow-3xl"
            initial={{opacity : 0, x: -100}}
            animate={{opacity : 1, x: 0}}
            exit={{opacity : 0, y: 50}}
            transition={{duration: 3, ease: easeInOut}}
        >
        <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "210px"}} alt="Profil" />

        <div className="mt-8 text-center">
               <h2 className="font-bold">Abdou Karime NDIAYE</h2>
            <span className="text-gray-500 font-medium text-center">@AKN-Dev</span>
        </div>

         <div className="mt-4 text-center flex justify-center">
               <span className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full m-1"><FaLinkedinIn className="text-2xl"/></span>
               <span className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full m-1"><SlSocialTumblr className="text-2xl "/></span>
               <span className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full m-1"><SlSocialInstagram  className="text-2xl "/></span>
               <span className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full m-1"><SlSocialFacebook className="text-2xl "/></span>
            
        </div>

        <div className="text-center mt-6">        
             <Link to="/contact" className="py-2 px-4 rounded-2xl bg-gray-700 hover:bg-gray-600">Contactez-moi</Link>
        </div>

           
      </motion.div>
    </>


 
  );
}