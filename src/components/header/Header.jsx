import { useState } from "react"
import {CgClose, CgMenu } from "react-icons/cg";
import {Link} from 'react-router-dom'

export default function Header(){

    const liens =[
        {label: 'Accueil',  href: '#'},
        {label: 'Projects', href: 'projects'},
        {label: 'Compétences', href: 'competences'},
        {label: 'A propos',  href: 'apropos'},
        
    ]

    const [open, setOpen] = useState(false)
    
   return <>
            <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4xl bg-gray-950 text-white px-36 md:px-4">
                <div className="flex items-center justify-around py-4">
                    {/* Logo */}
                       <div className="text-xl font-bold text-gray-300 hover:text-gray-100">
                            <a href="#">
                                <span>
                                    <span className="">{'<'}</span>
                                    <span> AKN</span>
                                    <span className=""> {'/>'}</span>
                                </span>
                            </a>
                        </div>

                            {/* Descktop Link*/}
                            <nav className="hidden md:flex gap-4 items:center font-normal">
                                
                                            { liens.map((lien, index)=>(
                                                <Link className="text-gray-400 hover:text-white focus:underline focus:text-white font-semibold" key={index} to={lien.href}>{lien.label}</Link>
                                                    
                                            ))}
                                                    

                                    
                            </nav>

                            <div className="hidden md:flex">
                                <a className="rounded-xl bg-gray-700 text-gray-50 py-2 px-4  text-sm font-semibold hover:bg-gray-600 hover:text-gray-50" href="">Contact SN</a>
                            </div>
                        

                    {/* Mobile toggle */}
                    <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                         {open ? <span className="text-gray-100"><CgClose /></span> : <span className="text-gray-100"><CgMenu /></span> }
                    </button>
                </div>

                  {/* Menu mobile */}

                    {open && (
                        <div className="md:hidden my-4">
                           <div className="container flex flex-col gap-4 items-center font-normal">
                            
                                     { liens.map((lien, index)=>(
                                                <Link className="text-gray-400 hover:text-white focus:underline focus:text-white font-normale" key={index} to={lien.href}>{lien.label}</Link>
                                            
                                    ))}
                            
                            <a className="rounded-xl bg-gray-700 text-gray-50 p-2 text-sm font-semibold hover:bg-gray-600 hover:text-gray-50" href="">Contact SN</a>
                        </div>
                    </div>
                )}
            </header>
            </>
}

