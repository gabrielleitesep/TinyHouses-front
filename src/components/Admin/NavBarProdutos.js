import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NavBarProdutos() {

    function logout() {
        const config = {
            // headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.delete("http://localhost:5000/sign-out", config)

        promise.then((res) => {
            alert("Até breve!");
        });
        promise.catch((err) => {
            console.log(err.response.data)
        });
    };

    return (
        <Container>
            <BoxNavBar>
                <h1>TinyHouse</h1>
                <BoxIcons>
                    <Link to={"/"}>
                        <ion-icon name="home-outline"></ion-icon>
                    </Link>
                    <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
                </BoxIcons>
            </BoxNavBar>
        </Container>
    )
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