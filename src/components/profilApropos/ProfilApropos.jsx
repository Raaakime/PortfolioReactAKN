import { AiOutlineHolder } from "react-icons/ai";


export default function ProfilApropos(){


    return(
        <div className="w-full md:w-4xl mx-auto text-white gap-4">

            <div className="flex flex-col md:flex-row justify-between items-center space-x-4 mt-36">
                 <div className="bg-gray-800 rounded-lg shadow-2xl p-4 hover:border">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" alt="profil" style={{width:500, height:310}}/>
                 </div>
                 <div className="space-y-3 ">
                        <div className="flex items-center ps-5">
                            <AiOutlineHolder className="text-gray-400 text-2xl"/> <h2 className="font-medium text-3xl text-white mx-2"> SELF-SUMMARY </h2> <AiOutlineHolder  className="text-gray-400 text-2xl"/>
                        </div>
                         <div className="font-light bg-gray-900 rounded-lg hover:border shadow-2xl p-4">
                                <h3 className="text-xl font-semibold">Abdou Karime NDIAYE</h3>
                                <p>Bonjour ! Je suis <span className="font-semibold"> Abdou Karime NDIAYE</span>, développeur web passionné <br /> par la création de sites web responsives, 
                                    d’interfaces modernes et fluides <br /> ainsi que de produits dynamiques. 
                                    Je suis spécialisé <br />en front-end et back-end. Mon stack de développement 
                                    inclut <br /><span className="font-semibold"> HTML, CSS, JavaScript, PHP, React, Tailwind <br /> CSS, Bootstrap et Laravel </span>.
                                    Pour l'outils de collaboration <span className="font-semibold">Git and Github</span>.
                                     Mon objectif <br /> est de mettre mes compétences au service de projets
                                     innovants et de contribuer à la formation des nouvelles générations de développeurs en continuant d'apprendre des nouvelle choses.

.
 </p>
                         </div>
                 </div>
                
            </div>


            <div className="flex flex-col md:flex-row justify-around">
                 <div></div>
                 <div></div>
            </div>
        
        </div>
    )
}