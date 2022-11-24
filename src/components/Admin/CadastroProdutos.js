import axios from "axios";
import imgLogo from "../../assets/House.png";
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
        <>
            <NavBarProdutos />
            <div className="containerCadastrar">
                <div className="containerLogoCadastro">
                    <img src={imgLogo} alt="logo do site" />
                </div>
                <div className="containerInput">
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
                </div>
            </div>
            <ListaProdutos/>
        </>
    );
};