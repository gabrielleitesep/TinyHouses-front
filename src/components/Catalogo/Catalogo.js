import styled from "styled-components";
import NavBar from "./NavBar";
import BoxProdut from "./BoxProduct";

export default function Catalogo() {
    return (
        <Container>
            <NavBar />
            <BoxProducts>
                <BoxProdut />
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
    width: 90%;
    height: auto;
    min-height: 100vh;
`