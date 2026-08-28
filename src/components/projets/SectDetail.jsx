import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SectDetail(){



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-28 w-full md:w-4xl mx-auto">
      {/* Section gauche (fixe) */}
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

      {/* Section droite (scrollable) */}
      <motion.div className="space-y-12 overflow-y-auto text-white mx-auto"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration:  3, ease: easeInOut}}
       >
        <section className="">
             <h1 className="text-xl font-semibold mb-5">A PROPOS DE MOI</h1>
           <div className="font-light shadow-2xl p-2">
           
                               
                                <p>
                                     Bonjour ! Je suis <span className="font-medium"> Abdou Karime NDIAYE</span>, étudiant en développement web passionné <br /> par la création de sites web responsives, 
                                     d’interfaces modernes et fluides <br /> ainsi que de produits dynamiques. 
                                     Je suis spécialisé <br />en front-end et back-end. Mon stack de développement 
                                     inclut <br /><span className="font-medium"> HTML, CSS, JavaScript, PHP, React, Tailwind <br /> CSS, Bootstrap et Laravel </span>.
                                     Pour l'outils de collaboration <span className="font-medium">Git and Github</span>.
                                     Mon objectif <br /> est de mettre mes compétences au service de projets
                                     innovants et de contribuer à la formation des nouvelles générations de développeurs en continuant d'apprendre des nouvelle choses.


                                </p>
                         </div>
        </section>

        <section className="">
             <h1 className="text-xl font-semibold mb-5">EXPRIENCE</h1>
           <div className="font-light shadow-2xl p-2">
                          
              <span className="text-gray-500 font-medium">2026</span>
                <h6 className="font-semibold text-xl text-blue-700">Projets personnels</h6>
                <span className="text-gray-500 font-medium">Plateforme Gestion Hotelier</span>
            
                    <ul className="list-disc text-white ms-8 mt-y">
                        <li>Réservation de chambres avec calcul automatique du montant</li>
                        <li>Commande au restaurant</li>
                        <li> Paiement (carte bancaire, mobile money, PayPal) avec mise à jour automatique des statuts</li>
                        <li>Back-office administrateur : statistiques (Chart.js), gestion des chambres, réservations, clients, paiements, services, rapports, paramètres</li>
                        
                    </ul>


                    <span className="text-gray-500 font-medium">Portfolio</span>
            
                    <ul className="list-disc text-white ms-8 my-2">
                        <li>Réservation de chambres avec calcul automatique du montant</li>
                        <li>Commande au restaurant</li>
                        <li> Paiement (carte bancaire, mobile money, PayPal) avec mise à jour automatique des statuts</li>
                        <li>Back-office administrateur : statistiques (Chart.js), gestion des chambres, réservations, clients, paiements, services, rapports, paramètres</li>
                        
                    </ul>


                     <span className="text-gray-500 font-medium">2026</span>
                     <h6 className="font-semibold text-xl text-blue-700">Projets  universitaire</h6>
                     <span className="text-gray-500 font-medium">Des plateforme & Interface utilisateur</span>
            
                    <ul className="list-disc text-white ms-8 mt-y">
                        <li>Réservation de chambres avec calcul automatique du montant</li>
                        <li>Boutique Eléctronique en ligne</li>
                        <li> Paiement (carte bancaire, mobile money, PayPal) avec mise à jour automatique des statuts</li>
                        <li>Back-office administrateur : statistiques (Chart.js), gestion des chambres, réservations, clients, paiements, services, rapports, paramètres</li>
                        
                    </ul>


                      <span className="text-gray-500 font-medium">2025</span>
                      <h6 className="font-semibold text-xl text-blue-700">Collaborations étudiantes</h6>
                        <span className="text-gray-500 font-medium">Travaillons sur des projets pédagogiques entre étudiants en utilisant des outils de collaboration comme GitHub.</span>
            
                    <ul className="list-disc text-white ms-8 mt-y">
                        <li>Plateforme Gestion Médical</li>
                        <li>Commande au restaurant</li>
                        <li> Paiement (carte bancaire, mobile money, PayPal) avec mise à jour automatique des statuts</li>
                        <li>Back-office administrateur : statistiques (Chart.js), gestion des chambres, réservations, clients, paiements, services, rapports, paramètres</li>
                        
                    </ul>

                         </div>
        </section>

          <section className="">
             <h1 className="text-xl font-semibold mb-5">EDUCATION</h1>
           <div className="font-light shadow-2xl p-2 space-y-8">
                  <div>
                     <span className="text-gray-500 font-medium">Juillet 2026</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certification MOOC Orange No code</h6>
                     <span className="text-gray-500 font-medium">Orange dégital center en ligne</span>
                </div>
                     
                <div>
                     <span className="text-gray-500 font-medium">Janvier 2026</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certification développement PHP & Laravel</h6>
                     <span className="text-gray-500 font-medium">FORCE-N</span>
                </div>  

                <div>
                     <span className="text-gray-500 font-medium">Mars 2025</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certificat Développement Web (Frontend)</h6>
                     <span className="text-gray-500 font-medium">Les tutoriels (KL)</span>
                </div> 

                <div>   
                     <span className="text-gray-500 font-medium">Janvier 2025</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certificat Intelligence artificielle pour tous </h6>
                     <span className="text-gray-500 font-medium">FORCE-N</span>
               </div>      

                <div>  
                     <span className="text-gray-500 font-medium">2025</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certificat traitement de données(Basic) </h6>
                     <span className="text-gray-500 font-medium">FORCE-N</span>
                </div>

                <div>    
                    <span className="text-gray-500 font-medium">Septembre 2024</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certificat Computer_Hardware_Basics </h6>
                     <span className="text-gray-500 font-medium">CISCO ACADEMY</span>
                </div>

                <div>
                     <span className="text-gray-500 font-medium">Juin 2024</span>
                     <h6 className="font-semibold text-xl text-blue-700">Certificat Informatique & Internet</h6>
                     <span className="text-gray-500 font-medium">FORCE-N</span>
                </div>

                <div>
                     <span className="text-gray-500 font-medium">Juin 2023</span>
                     <h6 className="font-semibold text-xl text-blue-700">Baccalauréat LA</h6>
                     <span className="text-gray-500 font-medium">LYCEE FRANCO ARABE DE KAOLACK</span>
                </div>

             </div>
        </section>

          <section className="">
            <h1 className="text-xl font-semibold mb-5">COMPETENCES</h1>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2">
                  <div className="space-y-4">
                        <div>
                            <h6 className="font-semibold  text-white">HTML</h6>
                            <span className="text-gray-500 font-medium">Front-end</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">CSS</h6>
                            <span className="text-gray-500 font-medium">Front-end</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">JavaScript</h6>
                            <span className="text-gray-500 font-medium">Front-end</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">BOOTSTRAP</h6>
                            <span className="text-gray-500 font-medium">Fromwork CSS</span>
                        </div> 

                       
                  </div>


                  <div className="space-y-4">
                        <div>
                            <h6 className="font-semibold text-white">PHP</h6>
                            <span className="text-gray-500 font-medium">Back-end</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">Laravel</h6>
                            <span className="text-gray-500 font-medium">Fromwork PHP</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">MYSQL</h6>
                            <span className="text-gray-500 font-medium">Data Bases</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">TAILWINDCSS</h6>
                            <span className="text-gray-500 font-medium">Fromwork utilitaire de CSS</span>
                        </div> 

                       
                  </div>
             </div>
        </section>


        <section className="">
            <h1 className="text-xl font-semibold mb-5">CENTRE D'INTERET</h1>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2">
                  <div className="space-y-4">
                        <div>
                            <h6 className="font-semibold  text-white">DOCUMENTATION</h6>
                            <span className="text-gray-500 font-medium">Faire des recherches, documenter...</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">ACTUALITES</h6>
                            <span className="text-gray-500 font-medium">Qautidiennes</span>
                        </div> 

                        <div>
                            <h6 className="font-semibold text-white">SPORT</h6>
                            <span className="text-gray-500 font-medium">À part le développement, le football est ma passion d’amour.</span>
                        </div> 

                      

                       
                  </div>

             </div>
        </section>

        
      </motion.div>
    </div>


 
  );
}

