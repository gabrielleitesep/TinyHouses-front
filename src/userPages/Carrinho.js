import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../contexts/useContext";
import cartContext from "../contexts/cartContext";

export default function Carrinho() {

    const [cart, setCart] = useState([])
    const {token} = useContext(UseContext)
    const {setCartData} = useContext(cartContext)

        useEffect(() => {

            const promise = axios.get("http://localhost:5000/carrinho");
            promise.then((res) => setCart(res.data));
            promise.catch((err) => console.log(err.response.data));
    
        }, []);
    
    

        async function deleteProduct() {

            const config = {headers: { "Authorization": `Bearer ${token}` }};

                try {
                    await axios.delete("http://localhost:5000/carrinho", config);
                } catch (err) {
                    console.log(err.response.data);
                }
            }
        


    if (cart === null) {
        return (
            <BoxProducts>
                <h1>Seu carrinho está vazio!</h1>
            </BoxProducts>
        );
    } else {
        return (
            <Container>
                <NavBar/>
                <BoxProducts>
                    <Product>
                    {cart.map((c) => <div>
                        <h1>{c.title}</h1>
                        <img>{c.image}</img>
                        <p>{c.price}</p>
                         </div>)}
                    <BoxIcons>
                    <ion-icon name="trash" onClick={() => deleteProduct()}></ion-icon>
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
    }
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