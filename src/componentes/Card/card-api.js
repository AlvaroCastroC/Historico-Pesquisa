import React from 'react';
import './card-api.css';
import { Link } from 'react-router-dom';




function Card ({id, nome, capital, img}){
   
   
    return(
        
        <div className="box-card" key={id}>
            <div className="card">
                
                <h3>{nome}</h3>
                <h5>Sua Capital: <span>{capital}</span></h5>
                
                <div className='box-imagem'>
                <img src={img} alt="Imagem da bandeira" />
                </div>

                <p>Conheça mais sobre em:</p>
            </div>
            <div className='box-link'>
                <Link className='link' to={`/sobre/${id}`}>Saiba mais</Link>
            </div>
        </div> 

    )
    
}
export default Card;