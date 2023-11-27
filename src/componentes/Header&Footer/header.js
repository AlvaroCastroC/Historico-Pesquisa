import './header.css';

function Header(){
   return(
    <header id="header">
       <div className='limite-container'>
            <div className="topo">
                <div className="titulo-cabecalho">
                    <h2>Pesquisa de Estados</h2>
                <img src='assets/globe-alt.png' alt='Logo' title='Logo da página' />
                </div>
            </div>
       </div>
    </header>
   );
}
export default Header;