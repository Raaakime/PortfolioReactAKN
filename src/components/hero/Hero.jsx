import { GiLobArrow } from "react-icons/gi";
import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";


export default function Hero(){

//     const [show, setShow] = useState(false)

//     useEffect(()=>{
//         setShow(true)
//     }, [])
//  transition-opacity duration-[2000ms] ${show ? "opacity-100" : "opacity-0"}`

    return(
        <div className={"flex flex-col md:flex-row mx-auto bg-gray-950 w-full md:w-4xl text-gray-50  space-x-4 mt-20 pt-20 gap-2 "}>

             <motion.div
             
               initial={{opacity : 0, scale: -1}}
               animate={{opacity : 1, scale: 1}}
               exit={{opacity : 0, scale: 0.8}}
               transition={{duration : 2, ease : easeInOut}}
               className="flex justify-center space-x-8 items-center bg-gray-900 pt-8 pb-20 px-5 rounded-xl shadow-2xl hover:border group">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "150px"}} alt="Profil" />
                <div className="space-y-2 mt-10">
                    <div className="text-gray-500">Développeur web</div>
                    <h1 className="text-2xl font-semibold">Abdou Karime <br /> Ndiaye</h1>
                    <p className="text-gray-500">Je suis un développeur web basé <br /> a kaolack</p>
                    <Link to="/apropos" className="float-end mt-4 text-4xl font-bold  text-gray-500 group-hover:text-white group-hover:animate-bounce"><BsFillArrowRightCircleFill /></Link>   
                 </div> 
             </motion.div>
             <div className="">
                    <motion.div
                      initial={{opacity : 0, scale: 0.8}}
                      animate={{opacity : 1, scale: 1}}
                      exit={{opacity : 0, scale: 0.8}}
                      transition={{duration : 2, ease : easeInOut}}
                     className=" py-3 rounded-4xl overflow-hidden whitespace-nowrap bg-gray-900 border shadow-xl mb-2 animate-pulse">
                         <p className="inline-block w-sm animate-marquee">
                              Dernière  <span className="text-gray-500">travail ou  dernière réalisation </span> &nbsp;&nbsp;
                              Dernière   <span className="text-gray-500">travail ou dernière réalisation </span>&nbsp;&nbsp;
                              Dernière   <span className="text-gray-500">travail ou dernière réalisation </span>&nbsp;&nbsp;
                         </p>
                     </motion.div>

                    <div className="flex justify-around gap-4">
                            <motion.div
                                    initial={{opacity : 0, scale: 0.8}}
                                    animate={{opacity : 1, scale: 1}}
                                    exit={{opacity : 0, scale: 0.8}}
                                    transition={{duration : 2, ease : easeInOut}}
                             className="bg-gray-900 px-5 rounded-xl py-4 gap-2 shadow-2xl hover:border group">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "160px"}} alt="" />
                                 <div>
                                        <div className="p-2 space-y-4">
                                                <span className="text-gray-500">A propos de moi</span>
                                                <h3>Credentials</h3>
                                        </div>
                                            <Link to="/credentials" className="float-end text-3xl font-bold  text-gray-500 group-hover:text-white group-hover:animate-bounce"><BsFillArrowRightCircleFill /></Link>                                 </div>
                            </motion.div>

                            <motion.div 
                                initial={{opacity : 0, scale: 0.7}}
                                animate={{opacity : 1, scale: 1}}
                                exit={{opacity : 0, scale: 0.7}}
                                transition={{duration : 3, ease : easeInOut}}
                             className="bg-gray-900 px-5 rounded-xl py-4 gap-2 shadow-2xl hover:border group">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "160px"}} alt="" />
                                 <div>
                                    <div className="p-2 space-y-4">
                                        <span className="text-gray-500">Voir plus  </span>
                                        <h3>Projets</h3>
                                    </div>
                                      <Link to="#" className="float-end text-3xl font-bold  text-gray-500 group-hover:text-white group-hover:animate-bounce"><BsFillArrowRightCircleFill /></Link>   
                                 </div>
                            </motion.div>
                    </div>
             </div>
        </div>
    )
}