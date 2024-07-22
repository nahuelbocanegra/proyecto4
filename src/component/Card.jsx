
import img from "../assets/js/img"

function Card(){
    
    return(
        <>
            <article className="Card">

                {
                    img.map(( url,index)=>(
                                    
                        <img key={index}  className={`imgArray${index} img` } src={url} alt=""  />                                        
                                    
                    ))
                }

            </article>
            
        </>
    )
}
export default Card;