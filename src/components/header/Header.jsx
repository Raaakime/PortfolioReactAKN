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
            <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white px-10 shadow-emerald-600">
                <div className="flex items-center justify-between space-x-5 py-4">
                    {/* Logo */}
                       <div>
                            <a href="#">
                                <span>
                                    <span>{'<'}</span>
                                    <span> AKN</span>
                                    <span> {'/>'}</span>
                                </span>
                            </a>
                        </div>

                            {/* Descktop Link*/}
                            <nav className="hidden md:flex gap-10 items:center">
                                
                                            { liens.map((lien, index)=>(
                                                <Link key={index} to={lien.href}>{lien.label}</Link>
                                                    
                                            ))}
                                                    

                                    
                            </nav>

                            <div className="hidden md:flex">
                                <a className="" href="">Contact SN</a>
                            </div>
                        

                    {/* Mobile toggle */}
                    <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                         {open ? <span className=""><CgClose /></span> : <span><CgMenu /></span> }
                    </button>
                </div>

                  {/* Menu mobile */}

                    {open && (
                        <div className="md:hidden">
                           <div className="container flex flex-col gap-4 items-center">
                            
                                     { liens.map((lien, index)=>(
                                                <Link key={index} to={lien.href}>{lien.label}</Link>
                                            
                                    ))}
                            
                            <a href="">Contact SN</a>
                        </div>
                    </div>
                )}
            </header>
            </>
}

