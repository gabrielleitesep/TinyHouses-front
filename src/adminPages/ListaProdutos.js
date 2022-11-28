import styled from "styled-components";
import { useContext } from "react";
import UseContext from "../contexts/useContext";

export default function ListaProdutos() {

    const { productsList } = useContext(UseContext);

    if (productsList === null) {
        return (
            <BoxList>
                <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt={'Carregando...'} />
            </BoxList>
        );
    };

    return (
        <BoxList>
            <h1>Lista de Produtos Cadastrados</h1>
            {productsList.map((l) =>
                <p key={l._id}>{l.title}</p>
            )}
        </BoxList>
    );
};

const BoxList = styled.div`
    width: 100vw;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
img {
    width: 300px;
    height: auto;
}
h1 {
    font-weight: 700;
    margin: 15px;
}
p {
    font-weight: 400;
    font-size: 20;
    text-align: center;
    word-break: break;
    margin: 5px;
}
`