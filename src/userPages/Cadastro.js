import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Cadastro() {

    const navigate = useNavigate();

    const body = {
        name: "",
        email: "",
        cpf: "",
        address: "",
        password: ""
    };

    function cadastrar(e) {
        e.preventDefault();

        if (body.password !== body.confirmPassword) {
            alert("A senha e a confirmação de senha devem ser iguais!");
            return;
        };

        const promise = axios.post("http://localhost:5000/cadastro", body);

        promise.then(res => {
            console.log(res.data);
            navigate("/");
        });

        promise.catch(err => {
            console.log(err.response.data.message);
            alert("Dados cadastrais inválidos!");
        });
    };

    return (
        <>
            <NavBar />
            <div className="containerCadastrar">
                <div className="containerInput">
                    <form onSubmit={cadastrar}>
                        <input placeholder="Nome" type="text" min={2} max={50} onChange={e => body.name = e.target.value} required></input>
                        <input placeholder="E-mail" type="email" min={6} max={50} onChange={e => body.email = e.target.value} required></input>
                        <input placeholder="CPF" type="number" onChange={e => body.cpf = e.target.value} required></input>
                        <input placeholder="Endereço completo" type="text" min={20} max={100} onChange={e => body.address = e.target.value} required></input>
                        <input placeholder="Senha" type="password" min={4} max={8} onChange={e => body.password = e.target.value} required></input>
                        <input placeholder="Confirmação de senha" type="password" min={4} max={8} onChange={e => body.confirmPassword = e.target.value} required></input>
                        <button type="submit" >Cadastrar</button>
                    </form>
                    <Link to="/">
                        <button>Continuar comprando</button>
                    </Link>
                </div>
                <div className="containerCadastro">
                    <Link to="/login">
                        <h1>Já sou cliente</h1>
                    </Link>
                </div>
            </div>
        </>
    );
};