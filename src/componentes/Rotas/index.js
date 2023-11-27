import {BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Sobre from "../Pages/sobre";

//Criação de rotas SPA usando oreact-router-dom
export default function Rota() {
    return(
       <div>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/sobre/:id' element={<Sobre />} />
                
            </Routes>
        </BrowserRouter>
       </div>
    )
}