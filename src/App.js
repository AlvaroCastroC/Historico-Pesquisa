import React from 'react';
import './componentes/Responsive/responsive.css';

import './App.css';
import Header from './componentes/Header&Footer/header';
import Rota from './componentes/Rotas/index';
import Footer from './componentes/Header&Footer/footer';

function App() {

  return (
    <div>
      <Header />
      <Rota />
      <Footer />
    </div>

  )

}

export default App;
