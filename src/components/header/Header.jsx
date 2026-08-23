import { useState } from "react"
import {CgClose, CgMenu } from "react-icons/cg";
import {Link} from 'react-router-dom'

export default function Header(){

    const liens =[
        {label: 'Accueil',  href: '/'},
        {label: 'Projets', href: '/projets'},
        {label: 'Contact SN', href: '/contact'},
        {label: 'A propos',  href: '/apropos'},
      
        
    ]

    const [open, setOpen] = useState(false)
    
   return <>
            <header className="fixed top-0 left-0 right-0 z-50  bg-gray-950 text-white px-36 md:px-4">
                <div className="flex items-center justify-evenly  py-4">
                    {/* Logo */}
                       <div className="text-xl font-bold text-gray-300 hover:text-gray-100">
                            <Link to="/">
                                <span>
                                    <span className="">{'<'}</span>
                                    <span> AKN</span>
                                    <span className=""> {'/>'}</span>
                                </span>
                            </Link>
                        </div>

                            {/* Descktop Link*/}
                            <nav className="hidden md:flex gap-4 items:center font-normal">
                                
                                              {liens.map((lien, index) => {
                                         const isActive = location.pathname === lien.href;
        return (
                <Link
                    key={index}
                    to={lien.href}
                    className={
                    isActive
                        ? "hover:text-white hover:underline font-bold"
                        : "text-gray-400 font-semibold"
                    }
                >
                    {lien.label}
                </Link>
        );
      })}
                                                    

                                    
                            </nav>

                            <div className="hidden md:flex">
                                <a className="rounded-xl bg-gray-700 text-gray-50 py-2 px-4  text-sm font-semibold hover:bg-gray-600 hover:text-gray-50" href="">Parlons</a>
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
                            
                                     {liens.map((lien, index) => {
        const isActive = location.pathname === lien.href;
        return (
          <Link
            key={index}
            to={lien.href}
            className={
              isActive
                ? "hover:text-white hover:underline  font-bold"
                : "text-gray-400 font-normal"
            }
          >
            {lien.label}
          </Link>
        );
      })}
                            
                            <a className="rounded-xl bg-gray-700 text-gray-50 p-2 text-sm font-semibold hover:bg-gray-600 hover:text-gray-50" href="">Parlons</a>
                        </div>
                    </div>
                )}
            </header>
            </>
}

