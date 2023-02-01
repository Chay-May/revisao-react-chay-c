import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdicionarReceitas from "../Pages/AdicionarReceitas";
import Cadastro from "../Pages/Cadastro";
import DetalheReceitas from "../Pages/DetalheReceitas";
import ErroPage from "../Pages/ErroPage";
import ListaReceitas from "../Pages/ListaReceitas";
import Login from "../Pages/Login";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaReceitas/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<ErroPage/>}/>
        <Route path="/receitas/detalhes" element={<DetalheReceitas/>}/>
        <Route path="/receitas/addreceita" element={<AdicionarReceitas/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
