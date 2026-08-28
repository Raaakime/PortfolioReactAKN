import { Link } from "react-router-dom"

export default function Cards({image, description, title, pText, text, demo, code, details}){


    return(
        <div className="bg-gray-900 rounded-lg shadow-2xl border px-6 py-3">
             <img src={image} alt={description} />
             <div className="text-white">{title}</div>
             <span className="text-blue-600">{pText}</span>
             <p>{text}</p>
             <div className="flex justify-between items-center">
                 <div className="space-x-2">
                      <Link to="" className="text-gray-500 text-semibold hover:text-blue-600">{demo}</Link>
                      <Link to="" className="text-gray-500 text-semibold hover:text-blue-600">{code}</Link>
                 </div>
                 
                 <Link to="../projets/SectDetail.jsx" className="text-gray-500 text-semibold hover:text-blue-600">{details}</Link>
             </div>
        </div>
    )
}