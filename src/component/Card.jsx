import arq from "../assets/js/arq"
import ini from "../assets/js/ini"
import autos from "../assets/js/autos"
import dep from "../assets/js/dep"
import mus from "../assets/js/mus"
import pas from "../assets/js/pas"
import esp from "../assets/js/esp"




function Card(){
    const arrayImg=[arq,ini,autos,dep,mus,pas,esp]

    return(
        <>
                <article className="Card">
             
                <section>
                        {
                            arrayImg[0].map((url,index)=>(
                                <img key={index} className="imgArray" src={url} alt=""  />
                            ))
                        }
                </section>
                    
            </article>
            
        </>
    )
}
export default Card;