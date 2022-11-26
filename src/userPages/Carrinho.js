import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Catalogo() {

    const [cart, setCart] = useState([])

    function removeProduct(product){
        const cartArray = cart.filter((p) => p.id !== product.id)
        setCart(cartArray)
    }

    return (
        <Container>
            <NavBar/>
            <BoxProducts>
                <Product>
                    <h1>Casa pré-fabricada de madeira Eco Lodge 18,14 m2</h1>
                    <img src={"https://st3.idealista.pt/news/arquivos/styles/fullwidth_xl/public/2022-01/eco_lodge.png?VersionId=WS0sBiDHZwkpVTEQhdw_LksF0KZaxr0E&itok=rGDtbaYK"} alt={"casa"} />
                    <p>R$60.000,00</p>
                <BoxIcons>
                <ion-icon name="trash"></ion-icon>
                </BoxIcons>
                </Product>
                <Link to={`/`}>
                    <Button>Continuar comprando</Button>
                </Link>
                <Link to={`/finalizar`}>
                    <Button>Finalizar compra</Button>
                </Link>
            </BoxProducts>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BoxProducts = styled.div`
    margin-top: 120px;
    width: 90%;
    height: auto;
    min-height: 100vh;
`
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
`
const Button = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    line-height: 20px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`
const BoxIcons = styled.div`
    margin: 5px;
ion-icon {
    color: red;
    font-size: 30px;
    margin-top: 15px;
}
`