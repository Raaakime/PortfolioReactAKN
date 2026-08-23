import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { BsHandThumbsUp } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";


export default  function SectContact(){

     const [contact, setContact] = useState()
    return(
         <div className="pt-10">
              <motion.div initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", bounce: 0.5, duration : 5 }}
                className="w-full md:w-4xl mx-auto text-white gap-4">
                <h2 className="font-medium text-3xl text-white mx-2 text-center my-20"> CONTACT </h2>
                  <div className="container flex gap-x-24 mx-auto justify-center">
                       <div className="contact-me space-y-8">  
                            <div>
                                <div className="font-bold text-xl flex gap-4 items-center my-2"><FaLocationDot /> Address</div>
                                <div className="ms-10">
                                  <span>Sénégal</span>
                                  <span>Rue22 Kaolack, Dialegne, Sénégal</span>
                               </div>
                            </div>

                             <div>
                                <div className="font-bold text-xl flex gap-4 items-center my-2"><BsTelephoneInboundFill />Phone</div>
                                <div className="ms-10">
                                  <span>+221 78 583 35 72</span><br />
                                  <span>+221 70 922 75 61</span>
                                </div>
                            </div>


                             <div>
                                <div className="font-bold text-xl flex gap-4 items-center my-2"><IoIosMail /> Mail</div>
                                <div className="ms-10">
                                  <span>abdondiaye44@gmail.com</span>
                                  <span></span>
                                </div>
                            </div>

                             <div>
                                <div className="font-bold text-xl flex gap-4 items-center my-2"><BsHandThumbsUp /> Follows Us</div>
                                <div className="flex items-center ms-6 my-3">
                                   <span  className="bg-white hover:bg-gray-300 text-gray-900 p-2 rounded-full m-1"><FaLinkedinIn className="text-2xl"/></span>
                                   <span className="bg-white hover:bg-gray-300 text-gray-900 p-2 rounded-full m-1"><SlSocialTumblr className="text-2xl "/></span>
                                   <span className="bg-white hover:bg-gray-300 text-gray-900 p-2 rounded-full m-1"><SlSocialInstagram  className="text-2xl "/></span>
                              </div>
                         </div>
                       </div>

                       <din className="parlons-en ">
                             <form action="">
                              <div className="space-y-6">
                                  
                                <div className="flex items-center gap-4">
                                   <div className="form-group">
                                        <label htmlFor="nom" className="form-label block mb-2 font-medium">Nom</label>
                                        <input type="text" className="form-control outline-1 focus:border-2 outline-gray-700 rounded p-2 w-52" name="nom" id="nom" placeholder="Votre nom"/>
                                   </div>

                                   <div className="form-group">
                                        <label htmlFor="prenom" className="form-label block mb-2 font-medium">Prénom</label>
                                        <input type="text" className="form-control focus:border-2 outline-1 outline-gray-700  rounded p-2 w-52" name="prenom" id="prenom" placeholder="Votre prénom"/>
                                   </div>
                                 </div>

                                   <div className="form-group">
                                        <label htmlFor="email" className="form-label block mb-2 font-medium">Email</label>
                                        <input type="email" className="form-control outline-1 focus:border-2 outline-gray-700  rounded p-2 w-11/11" name="email" id="email" placeholder="votre@email.com"/>
                                   </div>

                                   <div className="form-group">
                                        <label htmlFor="numero" className="form-label block mb-2 font-medium">Numéro de téléphone</label>
                                        <input type="tel" className="form-control outline-1 focus:border-2 outline-gray-700  rounded p-2 w-11/11" name="numero" id="numero" placeholder="+221 77 000 00 00"/>
                                   </div>

                                   <div className="form-group">
                                        <label htmlFor="message" className="form-label block mb-2 font-medium" >Message</label>
                                        <textarea className="outline-gray-700 outline-1 focus:border-2 rounded p-2" name="message" id="message" cols={54} rows={6} placeholder="Vorte message"></textarea>
                                   </div>
                              </div>
                                  
                                     <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="rounded-xl mt-8 bg-blue-600 py-2 px-3 text-lg font-semibold text-white"
                                   >
                                        Contactez-moi
                                   </motion.button>
                             </form>
                       </din>
                  </div>
              </motion.div>
         </div>
    )
}