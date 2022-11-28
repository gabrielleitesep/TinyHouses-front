import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UseContext from "../contexts/useContext";
import cartContext from "../contexts/cartContext";
import CadastroProdutos from "../adminPages/CadastroProdutos";
import Login from "../userPages/Login";
import Cadastro from "../userPages/Cadastro";
import Catalogo from "../userPages/catalogo/Catalogo";
import Carrinho from "../userPages/Carrinho";
import Finalizar from "../userPages/Finalizar";

export default function App() {

    const [dados, setDados] = useState("");
    const [token, setToken] = useState(null);
    const [userType, setUserType] = useState(null);
    const [productsList, setProductsList] = useState(null);
    const [cartData, setCartData] = useState([])

    return (
        <>
            <BrowserRouter>
                <UseContext.Provider value={{ dados, setDados, token, setToken, userType, setUserType, productsList, setProductsList }}>
                    <cartContext.Provider value={{ cartData, setCartData }}>
                        <Routes>
                            <Route path='/' element={<Catalogo />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/produtos-admin' element={<CadastroProdutos />} />
                            <Route path='/cadastro' element={<Cadastro />} />
                            <Route path='/carrinho' element={<Carrinho />} />
                            <Route path='/finalizar' element={<Finalizar />} />
                        </Routes>
                    </cartContext.Provider>
                </UseContext.Provider>
            </BrowserRouter>
        </>
    );
};