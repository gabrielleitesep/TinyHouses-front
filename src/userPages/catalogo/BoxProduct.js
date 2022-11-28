import styled from "styled-components";
import { useEffect, useState} from "react";
import axios from "axios";

export default function BoxProduct({title, image, description, maker, guarantee, area, price}) {
    
    function AddToCart() {

        const [pedido, setPedido] = useState(null)


        useEffect(() => {

            const promise = axios.post("http://localhost:5000/carrinho", {title, image, price});
            promise.then((res) => setPedido(res.data));
            promise.catch((err) => console.log(err.data));
        
        }, []);
    
    };

    return (
        <Product>
            <h1>{title}</h1>
            <img src={image} alt={"casa"} />
            <p>{description}</p>
            <p>Fabricante: {maker}</p>
            <p>Garantia: {guarantee}</p>
            <p>Área: {area}</p>
            <p>R${parseInt(price).toLocaleString("pt-BR")},00</p>
            <button onClick={() => AddToCart()}>Adicionar ao carrinho</button>
        </Product>
    );
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
    margin-top: 25px;
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