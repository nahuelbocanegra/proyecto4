import img from "../assets/js/img"

function Card(){
    
    const cambioFondo=(index)=>{
        document.body.style.backgroundImage=`url(${index})`
    }
    return(
        <>  
            <article className="Card">

                {
                    img.map(( url,index)=>(
                        <div   
                            key={index}                           
                            className={`imgArray${index} contenedor`}
                            >
                            <img  
                                onClick={()=>{cambioFondo(url)}}
                                className="img"  src={url} alt=""  />                                        
                        </div>   
                    ))
                }

            </article>

            
        </>
    )
}
export default Card;