

import Details from "./Details"


export default function PageDetails({ detailsData }){
    
    return(
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-28 w-full md:w-4xl mx-auto">
               <>
                
                       <Details detailsData={detailsData}
                        key={detailsData.id}
                        id={detailsData.id}
                        themeProjet={detailsData.themeProjet}
                        imgProjet={detailsData.imgProjet}
                        desImg={detailsData.desImg}
                        aproposProjet={detailsData.aproposProjet}
                        objectifProject={detailsData.objectifProject}
                        fonctionnaliteProject={detailsData.fonctionnaliteProject}
                        competenceProject={detailsData.competenceProject}
                         
                       />
                  
               </>
          </div>
        </>
    )
}