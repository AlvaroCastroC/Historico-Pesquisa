# Historico-Pesquisa

  Este site foi uma idéia criada apartir da API em que uso como dados os estados e suas Unidades Federais.

## Visão sobre o projeto

  A principio de tudo, este site não era pra ser tão complexo como é. Porém eu quis ir além, quis aproveitar as ferramentas que eu podia usar com react.
  Como, por exemplo o: 
  
   -React-Router-Dom, para criar a linkagem em uma pagina a outra.
    
   - Axios, para poder consumir a API
     
## Problemas

  Os primeiros problemas que encontrei foram:
  
  - Bloqueio de segurança da aPI, o CORS.
      Nela eu tive que ter o acesso do url original da API. Modifiquei minha API,
      para que o acesso não fosse barrado pelo servidor que o protegia.
      
  - O consumo com os dados da API.
      Esse prolema levei um tempo para resolver, a mais que o CORS, tive que achar uma forma que o meu site (deste repositorio),
      conseguisse trazer os dados referentes aos Ids já configurados, mais como?
      Essa era pergunta que ficou rodeando minha cabeça por um tempo.
      Até que tive a ideia de usar o React-Router-Dom, para que eu pudesse, apartir da rota selecionada,
      conseguisse pegar o ID, adicionando no ENDPOINT da API, para que eu obtivesse o retorno dos valores.

  ## Conclusão

  Projeto criado, e desenvolvido com uso pessoaç, sem fins lucrativos. Neste projeto apresento algumas de minhas habilidades com react.
  Consumindo a API, e usando os dados fornecidos pela API ao site.
      
  
  
