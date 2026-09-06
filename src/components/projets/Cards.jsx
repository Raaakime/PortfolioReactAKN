import { Link } from "react-router-dom"


export default function Cards({id, image, description, title, descImg, text, demo, code, details, imgClass}){


    return(
        <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-400 px-6 py-3 space-y-5 hover:border-2 hover:shadow-2xs items-stretch">
             <img src={image} alt={descImg} width={350} className={imgClass}/>
             <div className="text-white text-xl font-bold">{title}</div>
             <span className="text-blue-500 font-semibold" >{description}</span>
             <p className="w-80 line-clamp-3">{text}</p>
             <div className="flex justify-between items-center font-semibold">
                 <div className="space-x-2">
                      <Link to="" className="text-gray-500 font-semibold hover:text-blue-600 hover:font-bold">{demo}</Link>
                      <Link to="" className="text-gray-500 font-semibold hover:text-blue-600 hover:font-bold">{code}</Link>
                 </div>

          
                     <Link to={`/details/${id}`} className="text-gray-500 font-semibold hover:text-blue-600 hover:font-bold">{details}</Link>
          
             </div>
        </div>
    )
}