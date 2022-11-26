import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Finalizar() {
    return (
        <Container>
            <NavBar />
            <TextBox>
                <h1>Obrigada por comprar com a gente!</h1>
                <h2>Dados da compra</h2>
                <p>Casa pré-fabricada de madeira Eco Lodge 18,14 m2</p>
                <p>1 unidade</p>
                <span>R$60.000,00</span>                
                <p>Casa pré-fabricada de madeira Eco Lodge 18,14 m2</p>
                <p>1 unidade</p>
                <span>R$60.000,00</span>   
                <h2>Total: R$120.000,00</h2>
                <h2>Dados do comprador</h2>
                <p>Nome: Dayane Piccoli</p>
                <p>E-mail: dayane@hotmail.com</p>
                <p>CPF: 12345678911</p>
                <h2>Dados da entrega</h2>
                <p>Endereço de entrega: Rua Marquês de Paraná, 1111 - Niterói/RJ</p>
                <h2>Entrega em até 30 dias úteis</h2>
            </TextBox>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextBox = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    width: 90vw;
    margin-top: 140px;
img {
    width: 100px;
}
h1 {
    font-size: 25px;
    line-height: 28px;
    text-align: center;
    @media (max-width: 400px){
        font-size: 22px;
        line-height: 22px;
        margin: 2px;
    }
}
h2 {
    font-size: 20px;
    margin: 20px 0;
}
p{
    font-weight: 400;
    font-size: 17px;
    margin: 10px 0;
}
`