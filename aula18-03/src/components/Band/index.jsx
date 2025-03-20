
import Style from "./Band.module.css";
import { React, useState }  from "react";


function Band({imagem, nome, descricao}) {

     const [like, setLike] = useState(0)
     const [curiosidade, setCuriosidade] = useState()


    return (
        
     


        <section className={Style.Band}>
        <div className="Band">
            <img src={imagem} alt={nome}></img>
            <div className="Bandinfo">
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>Curtidas: {like}</p>

            </div>
            <button onClick={() =>setLike(like+1)}>Curtir </button>
            <button onClick={() =>setDisLike( Dislike +1 && Dislike -1)}>Dislike</button>
           
        </div>

        


        </section>
    
)

}
export default Band;