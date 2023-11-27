import './footer.css';
function Footer () {
    return (
        <footer>
            <div className='limite-container'>
               <div className='rodape'>

                    <nav className='lista-links'>
                        <ul type='none'>
                            <li><a className='github' href='https://github.com/AlvaroCastroC' target='blank'>Github</a></li>
                            <li><a className='linkedin' href='www.linkedin.com/in/alvarocastroc' target='blank'>LinkedIn</a></li>
                        </ul>
                        
                    </nav>
                    <div className='consideracoes'>
                        <h4>Considerações</h4>
                    <p>Esse projeto foi criado por meios didáticos, sem fins lucrativos.</p>
                    <p>Todos recursos usados, foi por via pública, como: imagens ou informações.</p>
                    </div>
                    
               </div>
               
            </div>
            <div className='fim-rodape'>
                 <p>Desenvolvido por <span>Álvaro de C. Cunha</span></p>
            </div>
        </footer>
    );
}
export default Footer;