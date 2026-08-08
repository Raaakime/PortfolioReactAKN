
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiMaterialdesign } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { GiFastArrow } from "react-icons/gi";
import { GiLobArrow } from "react-icons/gi";
import { GiPentarrowsTornado } from "react-icons/gi";



export default function SectionCentre(){


    return(
        <div className=" mx-auto bg-gray-950 w-full md:w-4xl text-gray-50 my-4 gap-2">

          <div className="container flex md:flex-row flex-col justify-between gap-2">
                <div className="bg-gray-900 p-4 rounded-xl shadow-2xl hover:border group">
                        <div><img src="https://i.pinimg.com/originals/f8/7c/ec/f87cecd14257bb8f07ec58c7e3f3cd18.gif" alt="" style={{width: "160px", height:"120px"}}/></div>
                        <p className="text-gray-500">Articles</p>
                        <h2>Blog</h2>
                          <span className="float-end text-2xl font-bold  text-gray-500 group-hover:text-white"><GiLobArrow /></span>
                </div>
                <div className="bg-gray-900 py-10 px-8 rounded-xl shadow-2xl hover:border group">
                        <div className="flex justify-between space-y-8 space-x-16 px-10">
                                <span className="text-3xl"><SiMaterialdesign /></span>
                                <span className="text-3xl"><LiaLaptopCodeSolid /></span>
                                <span className="text-3xl"><FiDatabase /></span>
                                <span className="text-3xl"><FaFigma /></span>
                        </div>
                        <p className="text-gray-500">Spécialisation</p>
                        <h2>Services offerts</h2>
                          <span className="float-end text-2xl font-bold  text-gray-500 group-hover:text-white"><GiLobArrow /></span>
                </div>
                <div className="bg-gray-900 rounded-xl shadow-2xl hover:border p-4 group">
                        <div className="rounded-xl bg-gray-950 border flex px-4 py-8 space-x-4">
                                <span className="border rounded-full p-2 bg-gray-900 text-3xl"><CiLinkedin /></span>
                                 <span className="border rounded-full p-2 bg-gray-900 text-3xl"><TbWorld /></span>
                                <span className="border rounded-full p-2 bg-gray-900 text-3xl"><IoFootballOutline /></span>
                               
                        </div>
                        <p className="text-gray-500">Stay whit me</p>
                        <h2>Profils</h2>
                        <span className="float-end text-2xl font-bold  text-gray-500 group-hover:text-white"><GiLobArrow /></span>
                </div>
        
          </div>

          <div className="mt-3 flex gap-2 md:flex-row justify-between flex-col  w-full md:w-4xl">
                <div className="flex bg-gray-900 rounded-xl shadow-2xl p-8 space-x-4 hover:border">
                    <div className="bg-gray-900 px-8 py-10 shadow-lg shadow-indigo-500/90 rounded-xl hover:border">
                        <span className="text-xl font-bold">+10</span><br />
                        <span className="text-gray-500">Total <br /> Projects</span>
                    </div>
                    <div className="bg-gray-900 px-8 py-10 shadow-lg shadow-indigo-500/90 rounded-xl hover:border">
                        <span className="text-xl font-bold">+0</span>
<br />                        <span className="text-gray-500">Exprience</span>
                    </div>
                    <div className="bg-gray-900 px-8 py-10 shadow-lg shadow-indigo-500/90 rounded-xl hover:border">
                        <span className="text-xl font-bold">+20</span><br />
                        <span className="text-gray-500">Clients<br /> Satisfait</span>
                    </div>
                </div>

                <div className="rounded-xl shadow-2xl bg-gray-900 px-10 py-8 space-y-8 hover:border group">
                      <div className="font-bold text-white text-2xl"><GiFastArrow /></div>  
                      <p className="text-3xl font-bold float-start">Nous <br /> collaborons <span className="text-blue-600">ensemble</span> </p> 
                      <span className="float-end text-2xl font-bold relative top-12 left-6 text-gray-500 group-hover:text-white"><GiLobArrow /></span>
                </div>
          </div>

                  <div className="bg-gray-900 rounded-full w-16 h-16 p-4 m-auto my-8 animate-spin">
                        <span className="text-5xl font-extrabold relative right-2 bottom-2"><GiPentarrowsTornado /></span>
                  </div>
        </div>
    )
}