import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/useContext";
import LoginAdmin from "./Admin/LoginAdmin";
import CadastroProdutos from "./Admin/CadastroProdutos";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Catalogo from "./Catalogo/Catalogo";
import Carrinho from "./Carrinho";
import Finalizar from "./Finalizar";

export default function App() {

    const [dados, setDados] = useState("");

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ dados, setDados }}>
                    <Routes>
                        <Route path='/' element={<Catalogo />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/login-admin' element={<LoginAdmin />} />
                        <Route path='/produtos-admin' element={<CadastroProdutos />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                        <Route path='/carrinho' element={<Carrinho />} />
                        <Route path='/finalizar' element={<Finalizar />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    );
};