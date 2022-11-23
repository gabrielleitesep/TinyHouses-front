import styled from "styled-components";

export default function BoxProduct() {
    return (
        <Product>
            <h1>Casa pré-fabricada de madeira Eco Lodge 18,14 m2</h1>
            <img src={"https://st3.idealista.pt/news/arquivos/styles/fullwidth_xl/public/2022-01/eco_lodge.png?VersionId=WS0sBiDHZwkpVTEQhdw_LksF0KZaxr0E&itok=rGDtbaYK"} alt={"casa"} />
            <p>Esta casa pré-fabricada é construída com madeira de pinho escandinavo e possui duas janelas oscilobatentes com vidros duplos, que proporcionam uma excelente iluminação. Além disso, tem um bom isolamento térmico de lã de vidro nas paredes e no telhado.</p>
            <p>Fabricante: Leroy Merlin</p>
            <p>Garantia: 3 anos</p>
            <p>Área: 18,14 m2</p>
            <p>R$60.000,00</p>
            <button>Adicionar ao carrinho</button>
        </Product>
    )
};

const Product = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #FFD700;
    border-radius: 7px;
    padding: 15px;
    margin-top: 15px;
h1 {
    color: black;
    font-weight: 700;
    font-size: 25px;
    line-height: 28px;
    text-align: center;
    @media (max-width: 400px){
        font-size: 20px;
        line-height: 22px;
        margin: 2px;
    }
}
img {
    margin: 15px;
    @media (max-width: 400px){
        width: 100%;
        height: auto;
    }
}
p {
    color: darkgrey;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    margin: 3px;
    @media (max-width: 400px){
        font-size: 14px;
        line-height: 18px;
        margin: 2px;
    }
}
button {
    width: 260px;
    height: 52px;
    background-color: #FFD700;
    border-radius: 7px;
    border: none;
    color: brown;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid #FFD700;
    margin-top: 10px;
}
`