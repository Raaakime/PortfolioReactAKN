import { useState } from "react"
import {Link} from 'react-router-dom'

export default function Footer(){

    const liens =[
        {label: 'Accueil',  href: '/'},
        {label: 'Projects', href: '/projets'},
        {label: 'Compétences', href: '/competences'},
        {label: 'A propos',  href: '/apropos'},
        
    ]

    const [open, setOpen] = useState(false)
    
   return <>
            <footer className=" bg-gray-950 text-white m-auto mt-16 mb-4 space-y-8">
                  {/* Logo */}
                       <div className="text-lg font-bold text-gray-300 hover:text-gray-100 text-center ">
                            <a href="/">
                                <span>
                                    <span className="">{'<'}</span>
                                    <span> AKN</span>
                                    <span className=""> {'/>'}</span>
                                </span>
                            </a>
                        </div>

                <div className=" py-4 space-y-6">
                  
                            {/* Descktop Link*/}
                            <nav className="hidden md:flex gap-4 items:center font-normal">
                                
                                            { liens.map((lien, index)=>(
                                                <Link className="text-sm text-gray-400 hover:text-white focus:underline focus:text-white font-semibold " key={index} to={lien.href}>{lien.label}</Link>
                                                    
                                            ))}
                                                    

                                    
                            </nav>

                             <p class="text-sm text-center">&copy; 2026 <span className="text-blue-500">Abdou Karime NDIAYE</span> . Tous droits réservés.</p>
                        

                   
                </div>

            

                  
            </footer>
            </>
}

