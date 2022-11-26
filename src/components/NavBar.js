import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UseContext from "../contexts/useContext";
import axios from "axios";

export default function NavBar() {

    const { token } = useContext(UseContext);
    const navigate = useNavigate();

    function logout() {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.delete("http://localhost:5000/logout", config);

        promise.then((res) => {
            navigate("/");
            alert("Até breve!");
        });    
        promise.catch((err) => console.log(err.response.data));
    };

    return (
        <Container>
            <BoxNavBar>
                <Link to={`/`}>
                    <h1>TinyHouses</h1>
                </Link>
                <BoxIcons>                
                    <Link to={`/carrinho`}>
                        <ion-icon name="cart-outline"></ion-icon>
                    </Link>
                    <Link to={`/login`}>
                        <ion-icon name="person-outline"></ion-icon>
                    </Link>
                    <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
                </BoxIcons>
            </BoxNavBar>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
`
const BoxNavBar = styled.div`
    background-color: #FFD700;
    color: brown; 
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    margin: 20px;
}
`
const BoxIcons = styled.div`
    margin: 20px;
ion-icon {
    color: brown;
    font-size: 30px;
    margin: 5px;
}
`