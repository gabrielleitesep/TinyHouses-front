import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UseContext from "../contexts/useContext";
import NavBar from "../components/NavBar";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setToken, setUserType } = useContext(UseContext);

    function fazerLogin(e) {
        e.preventDefault();

        const body = {
            email: email,
            password: password
        };

        const promise = axios.post("http://localhost:5000/login", body);

        promise.then(res => {
            setToken(res.data.token);
            setUserType(res.data.userType);
            navigate("/");
        });

        promise.catch(err => {
            console.log(err.response.data);
            alert("Usuário ou senha inválidos");
        });
    };

    return (
        <>
            <NavBar />
            <div className="containerLogin">
                <div className="containerInput">
                    <form onSubmit={fazerLogin}>
                        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                        <button type="submit" >Entrar</button>
                    </form>
                    <Link to="/">
                        <button>Continuar comprando</button>
                    </Link>
                </div>
                <div className="containerCadastro">
                    <Link to="/cadastro">
                        <h1>Criar conta</h1>
                    </Link>
                </div>
            </div>
        </>
    );
};