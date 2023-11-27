import React, { useEffect, useState} from 'react';

//Chamando o componente Card para passar os valores em props
import Card from '../Card/card-api';

//importando a função para poder acessar a api
import ufsApi from '../conexao/config';
import './home.css';
import Banner from '../Banner/banner';

function Conex() {
  //Guardará os dados recebidos
  const [dados, setDados] = useState([]);
  
  //Irá salvar qualquer valor inserido no input
  const [textoBusca, setTextoBusca] = useState("");

//Função que irá chamar a api e guardará os dados recebidos
  const getUFs = async (e) => {
    try {
      const response = await ufsApi.get(e);

      const data = response.data;
      setDados(data);
    }
    catch(error) {
      console.log(error);
    }
  };

  //O uso do userEffect serve para que não seja chamada várias vezes a api
  useEffect(() => {
    getUFs();
  }, []);
 
//Função para buscar um certo valor apartir do endpoint da api
  const buscagemDado = (valor) => {
    setTextoBusca(valor);

    //verificará se o valor é ou não um número
    if(isNaN(valor)){
      let url = "?busca="+valor;

      return getUFs(url)
    }else if(valor){
      //Caso o valor seja um Number, posteriormente verificara se o valor inserido em menor que 28
      // Caso seja o valor maior que 28 e maior que 0 ele retornará o valor da id
      if(valor > 0 && valor < 28) {
        return ufsApi.get("/"+valor).then(
          res =>{ setDados([res.data])
          }
        )
        
      }//Caso a condição não seja atendida, irá espawmar o 
      else {
        setTextoBusca("");
        alert(`Valor inserido não encontrado >>> ${valor} <<<, tente usar valor menor do que 28!!`)
        return (
          getUFs()
        )
        
      }
    }
    //Caso não tenha nenhum valor, será retornado todos os dados
    else {
      return getUFs();
    }

  };

  //Função que irá limpar o input digitado e retornará os dados
  const limparFiltro = () => {
      getUFs();
    setTextoBusca("") 
  }



  return (
    <section className='home'>
      <Banner />
      <div className='limite-container'>
        <div className='titulo-home'>
          <h2>Sobre</h2>
          <p>O território nacional brasileiro tem grandes variedades de culturas e belezas naturais. Compondo com <span>27 Unidades Federativas</span>. E pode acreditar, cada estado sua própria beleza, que vale a pena visitar, seja para saborear uma delicíosa comida típica, visitar lugares íncriveis.</p>

          <p>Pesquise aqui em baixo.</p>
        </div>
        <div className='container-input'>
          <input type='text' value={textoBusca} placeholder='Digite aqui...' onChange={(event) => buscagemDado(event.target.value)}/>
          <button className='btnLimparFiltro' onClick={limparFiltro}><img src='assets/lixeira.png' alt='Lixeira' title='Apagar' /></button>
        </div>
        <div className="cointainer-card">
          {
            dados.map(dado => 
              <Card 
              id={dado.id}
              capital={dado.capital}
              nome={dado.nome}
              img={dado.img}
            />)
          }
        </div>

      </div>
    </section>
  )
  
  

};


export default Conex;

