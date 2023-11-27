import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import ufsApi from "../conexao/config";

import './sobre.css';
import BannerSobre from "../Banner/banner-sobre";


function Sobre() {
    const [subDados, setSubDados] = useState([]);

    const [infoCulinaria, setInfoCulinaria] =useState([]);

    //Essa função irá pegar o id passado pelo Link, convertendo para uma constante
    //que será usada posteriormente para listar os dados do objeto igual ao id
    const {id} = useParams();

    //Função que irá retornar para a pagina principal
    const navigate = useNavigate();

    const voltarHome = (e) => {
        navigate('/');

    };
    
    //Função que irá filtrar apartir do endpoint, o objeto informado pela const id
    const getUfID = (e) => {
        try {
          ufsApi.get("/"+e).then( res =>{
            setSubDados([res.data])

            setInfoCulinaria(res.data.info.pratos)
          }
          )
          
        }
        catch(error) {
          console.log(error)
        }
      };
     
    //usando a const id para retornar o objeto apartir do id do endpoint
     useEffect(() => {
        getUfID(id);
        console.log(subDados)
     },[])


    return (
        <div className="container-secao">
           <button onClick={voltarHome} title="Voltar a página principal"><img src='/assets/home.png' alt="Home"/></button>
           <BannerSobre />
            {
                subDados.map(dado =>
                <div key={dado.id} className="limite-container">
                    <h2>{dado.nome}</h2>

                    <section className="secoes secao-sobre">
                      <h3>Sobre o Estado</h3>
                      <p>{dado.info.sobre}</p>
                    </section>

                    <section className="secoes secao-sobre-culinaria">
                      <h3>Culinaria regional</h3>
                      <p>{dado.info.culinaria}</p>
                    </section>

                    {
                      infoCulinaria.map( dado =>
                      <section key={dado.id} className="secoes secao-culinaria">
                        <h4>{dado.comida}</h4>
                        <div className="card-pratos">
                          <img src={dado.img} alt="imagem"/>
                          <p>{dado.info}</p>
                        </div> 
                      </section>  
                      )
                    }
                    <p className="link-saiba-mais">Para saber mais, acesse: <a href={dado.info.fonte} target="blank">{dado.nome}</a></p>
                </div>)
            }
           
        </div>
    )

}export default Sobre;