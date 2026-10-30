import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
import { code, p } from "framer-motion/client";
import { FaPhp } from "react-icons/fa6";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJitsi } from "react-icons/si";
import { dataCards } from "./SectProjet";


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
          <div>
            <span className="text-gray-500 font-semibold animate-pulse shadow-2xl">/ / PROJECT</span>
              <h1 className="text-3xl font-bold mb-5">{projet.themeProjet}</h1>
          </div>
             
           <div className="font-light shadow-2xl p-2">
                
                  <img src={projet.imgProjet} alt={projet.desImg} width={500}/>
                                    
           </div>
        </section>

        <section className="">
             <h1 className="text-2xl font-semibold mb-5 text-gray-500 animate-pulse hover:text-white">{"{ À propos du projet }"}</h1>

             {projet.aproposProjet.map((para, inedx)=>(
                <p key={inedx} className=" font-medium my-5 ms-8 shadow-2xl">{para}</p>
             ))}
             
         
        </section>

          <section className="">
             <h1 className="text-2xl font-semibold text-gray-500 mb-5 animate-pulse hover:text-white">{"{ Objectif }"}</h1>
             
            {projet.objectifProject.map((obj, inedx)=>(
                <p key={inedx} className=" font-medium my-5 ms-8 shadow-2xl">{obj}</p>
             ))}
        </section>

          <section className="">
            <h1 className="text-2xl font-semibold text-gray-500 mb-5 animate-pulse hover:text-white">{"{ Fonctionnalités principale }"}</h1>
            
             {projet.fonctionnaliteProject.map((fonct, inedx)=>(
                <div key={inedx} className=" font-medium my-5 ms-8 rounded-lg shadow-2xl bg-gray-900 p-6 hover:-translate-y-1 hover:scale-100 ">{fonct}</div>
             ))}
            
        </section>


        <section className="">
            <h1 className="text-2xl font-semibold text-gray-500 mb-5 animate-pulse hover:text-white">{"{ Compétences développées }"}</h1>
            
               {projet.competenceProject.map((comp, inedx)=>(
                <p key={inedx} className=" font-medium my-5 ms-8 rounded-lg shadow-2xl bg-gray-900 p-6 hover:-translate-y-1 hover:scale-100">{comp}</p>
             ))}
        </section>

        
      </motion.div>


      {/* Section droite (scrollable) */}
          <motion.div  className="md:sticky md:top-32 h-fit w-fit mt-38 mx-auto text-white  space-y-16"
            initial={{opacity : 0, x: -100}}
            animate={{opacity : 1, x: 0}}
            exit={{opacity : 0, y: 50}}
            transition={{duration: 3, ease: easeInOut}}
        >
       
            <div className=" bg-gray-900 p-8 rounded-lg shadow-3xl">
              <span className="text-gray-500 font-semibold">/ / ACTIONS</span>
              <div className="mt-6">
                 

                 
               
                    
                       <div className="space-x-56">
                          <Link to="../../../public/Demo/Aknmedilink.mp4" target="_blank" className="text-gray-500 font-semibold hover:text-blue-600 hover:font-bold">Démo</Link>
                          <Link to="https://github.com/Raaakime/ConsultationEnLigne" target="_blank" className="text-gray-500 font-semibold hover:text-blue-600 hover:font-bold">Code</Link>
                      </div>   
                  
                            
               
              </div>
              
        </div>

         
          <div className=" bg-gray-900 p-8 rounded-lg shadow-3xl">
              <span className="text-gray-500 font-semibold">/ / STACK TECHNIQUE</span>
              <div className="mt-6">
                  <div className="flex items-center justify-center gap-10 ">
                    
                       <span><RiHtml5Line className="text-gray-600 hover:text-white text-5xl"/></span>
                       <span><FaCss3 className="text-gray-600 hover:text-white text-5xl"/></span>
                       <span><IoLogoJavascript className="text-gray-600 hover:text-white text-5xl"/></span>
                       
                  </div>

              

                   <div className="flex items-center justify-center gap-10">
                       <span><FaPhp className="text-gray-600 hover:text-white text-5xl"/></span>
                       <span><SiMysql className="text-gray-600 hover:text-white text-5xl"/></span>
                       <span><RiBootstrapLine className="text-gray-600 hover:text-white text-5xl"/></span>
                       
      
                  </div>

                   <div className=" ms-4">
                      
                     <span className=""><SiJitsi className="text-gray-600 hover:text-white text-5xl"/></span>
      
                  </div>
              </div>
        </div>


          <div className=" bg-gray-900 p-8 rounded-lg shadow-3xl">
              <span className="text-gray-500 font-semibold">/ / CHROLONOGIE</span>
              <div className="mt-6">
                 <h3 className="text-gray-500 text-xl font-medium"><span className="animate-pulse">Date, début :</span> 20 Octobre 2025</h3>
                 <h3 className="text-gray-500 text-xl font-medium"><span className="animate-pulse">Date, fin :</span> 12 Nonvembre 2026</h3>

                
              </div>
        </div>
      
      </motion.div>
    </>


 
  );
}