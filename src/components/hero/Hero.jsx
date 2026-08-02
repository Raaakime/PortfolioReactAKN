


export default function Hero(){


    return(
        <div className="mx-auto bg-gray-950 w-4xl text-gray-50 flex space-x-4 my-32 pt-20 ">

             <div className="flex space-x-8 items-center bg-gray-900 pt-8 pb-24 px-5 rounded-xl shadow-2xl hover:border">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "150px"}} alt="Profil" />
                <div className="space-y-2">
                    <div className="text-gray-500">Développeur web</div>
                    <h1 className="text-2xl font-semibold">Abdou Karime <br /> Ndiaye</h1>
                    <p className="text-gray-500">Je suis un développeur web basé <br /> a kaolack</p>
                 </div> 
             </div>
             <div className="">
                    <div className=" py-3  rounded-4xl overflow-hidden whitespace-nowrap bg-gray-900 border shadow-xl">
                         <p className="inline-block w-sm animate-marquee">
                              Dernière travail ou  <span className="text-gray-500"> dernière réalisation </span> &nbsp;&nbsp;
                              Dernière travail ou  <span className="text-gray-500"> dernière réalisation </span>&nbsp;&nbsp;
                              Dernière travail ou  <span className="text-gray-500"> dernière réalisation </span>&nbsp;&nbsp;
                         </p>
                     </div>

                    <div className="flex justify-around gap-2">
                            <div className="bg-gray-900 px-5 rounded-xl py-4 mt-2 shadow-2xl hover:border">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "140px"}} alt="" />
                                 <div>
                                        <div>
                                                <a href="">A propos de moi</a>
                                                <h3>Credentials</h3>
                                        </div>
                                        <span>icon</span>
                                 </div>
                            </div>

                            <div className="bg-gray-900 px-5 rounded-xl py-4 mt-2 shadow-2xl hover:border">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbsxYPDUoCbpdL4PJmeh7X7B4zYYKB769LmXNCdB2WG0Z8dNlFwwLYVS&s=10" style={{width: "140px"}} alt="" />
                                 <div>
                                    <div>
                                        <a href="">Voir plus  </a>
                                        <h3>Projets</h3>
                                    </div>
                                    <span>icon</span>
                                 </div>
                            </div>
                    </div>
             </div>
        </div>
    )
}