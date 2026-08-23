import { AiOutlineHolder } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { GiLobArrow } from "react-icons/gi";
import { GiPentarrowsTornado } from "react-icons/gi";
import { GiFastArrow } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion, easeInOut } from "framer-motion";


export default function ProfilApropos(){

    // const [show, setShow] = useState(false)

    // useEffect(()=>{
    //     setShow(true)
    // }, [])
    // transition-opacity duration-[2000ms] ${ show ? "opacity-100" : "opacity-0"}`

    return(
//         <section class="hidden opacity-0 transition-opacity duration-700" id="services">
//   <h2 class="text-2xl font-bold">Nos Services</h2>
//   <p>Contenu de la section...</p>
// </section>
        <div className="w-full md:w-4xl mx-auto text-white gap-4">
              
            <div className="flex flex-col md:flex-row justify-between items-center space-x-4 mt-36">
                 <motion.div 
                      initial={{opacity : 0, scale: 0.7}}
                      animate={{opacity : 1, scale: 1}}
                      exit={{opacity : 0, scale: 0.7}}
                      transition={{duration : 3, ease : easeInOut}}
                     className="bg-gray-800 rounded-lg shadow-2xl p-4 hover:border">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" alt="profil" style={{width:500, height:310}}/>
                 </motion.div>
                 <motion.div   
                                initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                    className="space-y-3 ">
                        <div className="flex items-center ps-5">
                            <AiOutlineHolder className="text-gray-400 text-2xl"/> <h2 className="font-medium text-3xl text-white mx-2"> SELF-SUMMARY </h2> <AiOutlineHolder  className="text-gray-400 text-2xl"/>
                        </div>
                         <div className="font-light bg-gray-900 rounded-lg hover:border shadow-2xl p-4">
                                <h3 className="text-xl font-semibold">Abdou Karime NDIAYE</h3>
                                <p>Bonjour ! Je suis <span className="font-semibold"> Abdou Karime NDIAYE</span>, étudiant en développement web passionné <br /> par la création de sites web responsives, 
                                    d’interfaces modernes et fluides <br /> ainsi que de produits dynamiques. 
                                    Je suis spécialisé <br />en front-end et back-end. Mon stack de développement 
                                    inclut <br /><span className="font-semibold"> HTML, CSS, JavaScript, PHP, React, Tailwind <br /> CSS, Bootstrap et Laravel </span>.
                                    Pour l'outils de collaboration <span className="font-semibold">Git and Github</span>.
                                     Mon objectif <br /> est de mettre mes compétences au service de projets
                                     innovants et de contribuer à la formation des nouvelles générations de développeurs en continuant d'apprendre des nouvelle choses.

.
                                </p>
                         </div>
                 </motion.div>
                
            </div>


            <div className="flex flex-col md:flex-row justify-center items-stretch space-x-5 my-4">
                 <motion.div 
                                initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                     className="flex-1 bg-gray-900 rounded-lg shadow-2xl pt-4 p-4 hover:border">
                      <h5 className="font-bold text-lg mb-3">EXPRIENCE</h5>
                      
                      <h6 className="font-light text-lg">Projets universitaire</h6>
                      <span className="text-gray-500">Plateforme Gestion médicale en ligne</span>

                      <h6 className="font-light text-lg">Projets personnels</h6>
                      <span className="text-gray-500">Des plateforme & Interface utilisateur</span>

                      <h6 className="font-light text-lg">Collaborations étudiantes</h6>
                      <span className="text-gray-500">Travaillons sur des projets pédagogiques entre étudiants en utilisant des outils de collaboration comme GitHub.</span>
                 </motion.div>

                 <motion.div
                                initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                     className="flex-1 bg-gray-900 rounded-lg shadow-2xl pt-4 p-4 hover:border">
                      <h5 className="font-bold text-lg mb-3">EDUCATION</h5>
                      <span className="text-gray-500">2026</span>
                      <h6 className="font-light text-lg">Certification MOOC Orange No code</h6>
                      <span className="text-gray-500">Orange dégital center en ligne</span>

                      <span className="text-gray-500">Janvier 2025</span>
                      <h6 className="font-light text-lg">Certificat Intelligence artificielle pour tous </h6>
                      <span className="text-gray-500">FORCEN</span>

                      <span className="text-gray-500">2025</span>
                      <h6 className="font-light text-lg">Certificat Développement Web (Frontend)</h6>
                      <span className="text-gray-500">Les tutoriels (KL)</span>
                 </motion.div>
            </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 items-stretch">
            <motion.div 
                               initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                className="bg-gray-900 rounded-xl shadow-2xl p-4 group hover:border md:w-52 ">
            {/* Conteneur principal en colonne */}
              <div className="flex flex-col items-center">
                
                {/* Ligne du haut avec 2 icônes */}
                <div className="flex space-x-4">
                <span className="shadow-3xl rounded-full p-4 bg-gray-800 text-4xl"><CiLinkedin /></span>
                <span className="shadow-3xl rounded-full p-4 bg-gray-800 text-4xl"><TbWorld /></span>
                </div>

                {/* Icône du bas centrée */}
                <div className="flex justify-center">
                <span className="shadow-3xl rounded-full p-4 bg-gray-800 text-4xl"><IoFootballOutline /></span>
                </div>
                </div>

                 <p className="text-gray-500 mt-4">Stay whit me</p>
                  <h2>Profils</h2>
                <span className="float-end text-2xl font-bold text-gray-500 group-hover:text-white"><GiLobArrow /></span>
            </motion.div>


                <motion.div 
                               initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                       className="rounded-xl shadow-2xl bg-gray-900 px-10 pt-10 space-y-12  hover:border group md:w-1/2">
                       <div className="font-bold text-white text-2xl"><GiFastArrow /></div>  
                       <p className="text-3xl font-bold float-start">Nous <br /> collaborons <span className="text-blue-600">ensemble</span> </p> 
                       <span className="float-end text-2xl font-bold relative top-24 left-6 text-gray-500 group-hover:text-white"><GiLobArrow /></span>
                 </motion.div>

                   <motion.div 
                               initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                          className="bg-gray-900 px-5 rounded-xl py-4 shadow-2xl hover:border group md:w-52">
                       <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "160px"}} alt="" />
                             <div className="p-2 space-y-4">
                                     <span className="text-gray-500">A propos de moi</span>
                                     <h3>Credentials</h3>
                             </div>
                                 <Link to="/credentials" className="float-end text-3xl font-bold  text-gray-500 group-hover:text-white group-hover:animate-bounce"><BsFillArrowRightCircleFill /></Link> 
                        </div>
                   </motion.div>  
            </div>
        
        </div>
    )
}