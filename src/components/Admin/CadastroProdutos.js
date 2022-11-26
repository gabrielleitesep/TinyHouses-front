import axios from "axios";
import styled from "styled-components";
import NavBarProdutos from "./NavBarProdutos";
import ListaProdutos from "./ListaProdutos";

export default function CadastroProdutos() {

    const body = {
        title: "",
        image: "",
        description: "",
        maker: "",
        guarantee: "",
        area: "",
        price: "",
    };

    function cadastrar(e) {
        e.preventDefault()

        const promise = axios.post("http://localhost:5000/cadastro-produtos", body);

        promise.then(res => {
            console.log(res.data);
        });

        promise.catch(err => {
            console.log(err.response.data.message);
            alert("Os campos devem ser preenchidos corretamente!");
        });
    };

    return (
        <Container>
            <NavBarProdutos />
            <form onSubmit={cadastrar}>
                <input placeholder="Título" type="text" onChange={e => body.title = e.target.value} required></input>
                <input placeholder="Imagem" type="url" onChange={e => body.image = e.target.value} required></input>
                <input placeholder="Descrição" type="text" onChange={e => body.description = e.target.value} required></input>
                <input placeholder="Fabricante" type="text" onChange={e => body.maker = e.target.value} required></input>
                <input placeholder="Garantia" type="text" onChange={e => body.guarantee = e.target.value} required></input>
                <input placeholder="Área" type="text" onChange={e => body.area = e.target.value} required></input>
                <input placeholder="Preço" type="text" onChange={e => body.price = e.target.value} required></input>
                <button type="submit" >Cadastrar produto</button>
            </form>
            <ListaProdutos />
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
form {
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    width: 85vw;
    height: 52px;
    margin-bottom: 16px;
    border-radius: 7px;
    padding-left: 14px;
    font-size: 17px;
    color: black;
}
input::placeholder {
    font-family: 'Roboto', sans - serif;
    font-weight: 400;
    font-size: 17px;
    margin-left: 55px;
    color: grey;
}
button {
    width: 300px;
    height: 52px;
    background-color: #FFD700;
    border-radius: 7px;
    border: none;
    color: brown;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid #FFD700;
    margin-top: 13px;
}
`
