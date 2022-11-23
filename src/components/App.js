import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Cadastro from './Cadastro'
import Catalogo from './Catalogo/Catalogo'
import Carrinho from './Carrinho'
import Finalizar from "./Finalizar"
import UserContext from "../contexts/useContext"
import { useState } from "react"


export default function App() {

    const [dados, setDados] = useState('')

    return (

        <>
            <BrowserRouter>
                <UserContext.Provider value={{ dados, setDados }}>
                    <Routes>
                        <Route path='/' element={<Catalogo />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                        <Route path='/carrinho' element={<Carrinho />} />
                        <Route path='/finalizar' element={<Finalizar />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}