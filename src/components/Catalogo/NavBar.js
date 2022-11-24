import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Container>
            <BoxNavBar>
                <h1>TinyHouse</h1>
                <BoxIcons>
                    <Link to={`/login`}>
                        <ion-icon name="person-outline"></ion-icon>
                    </Link>
                    <Link to={`/carrinho`}>
                        <ion-icon name="cart-outline"></ion-icon>
                    </Link>
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