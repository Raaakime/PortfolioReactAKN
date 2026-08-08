import { GiLobArrow } from "react-icons/gi";


export default function Hero(){


    return(
        <div className="flex flex-col md:flex-row mx-auto bg-gray-950 w-full md:w-4xl text-gray-50  space-x-4 mt-20 pt-20 gap-2">

             <div className="flex justify-center space-x-8 items-center bg-gray-900 pt-8 pb-20 px-5 rounded-xl shadow-2xl hover:border group">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "150px"}} alt="Profil" />
                <div className="space-y-2">
                    <div className="text-gray-500">Développeur web</div>
                    <h1 className="text-2xl font-semibold">Abdou Karime <br /> Ndiaye</h1>
                    <p className="text-gray-500">Je suis un développeur web basé <br /> a kaolack</p>
                    <a href="/apropos" className=""> <span className="float-end text-5xl font-bolder  text-gray-500 group-hover:text-white"><GiLobArrow /></span> </a>
                 </div> 
             </div>
             <div className="">
                    <div className=" py-3  rounded-4xl overflow-hidden whitespace-nowrap bg-gray-900 border shadow-xl mb-2">
                         <p className="inline-block w-sm animate-marquee">
                              Dernière  <span className="text-gray-500">travail ou  dernière réalisation </span> &nbsp;&nbsp;
                              Dernière   <span className="text-gray-500">travail ou dernière réalisation </span>&nbsp;&nbsp;
                              Dernière   <span className="text-gray-500">travail ou dernière réalisation </span>&nbsp;&nbsp;
                         </p>
                     </div>

                    <div className="flex justify-around gap-4">
                            <div className="bg-gray-900 px-5 rounded-xl py-4 gap-2 shadow-2xl hover:border group">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "160px"}} alt="" />
                                 <div>
                                        <div className="p-2 space-y-4">
                                                <a href="" className="text-gray-500">A propos de moi</a>
                                                <h3>Credentials</h3>
                                        </div>
                                            <span className="float-end text-2xl font-bold  text-gray-500 group-hover:text-white"><GiLobArrow /></span>                                 </div>
                            </div>

                            <div className="bg-gray-900 px-5 rounded-xl py-4 gap-2 shadow-2xl hover:border group">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "160px"}} alt="" />
                                 <div>
                                    <div className="p-2 space-y-4">
                                        <a href="" className="text-gray-500">Voir plus  </a>
                                        <h3>Projets</h3>
                                    </div>
                                      <span className="float-end text-2xl font-bold  text-gray-500 group-hover:text-white"><GiLobArrow /></span>    
                                 </div>
                            </div>
                    </div>
             </div>
        </div>
    )
}