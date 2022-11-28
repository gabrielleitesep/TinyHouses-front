import axios from "axios";
import { useEffect, useContext } from "react";
import UseContext from "../../contexts/useContext";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import BoxProduct from "./BoxProduct";
import { useNavigate } from "react-router-dom";

export default function Catalogo() {

    const { productsList, setProductsList, userType } = useContext(UseContext);
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get("http://localhost:5000/get-products");
        promise.then((res) => setProductsList(res.data));
        promise.catch((err) => console.log(err.response.data));

    }, []);

    if (productsList === null) {
        return (
            <BoxProducts>
                <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt={'Carregando...'} />
            </BoxProducts>
        );
    };

    return (
        <Container>
            <NavBar />
            <BoxProducts>
                {userType === "admin" &&
                    <BoxAdmin onClick={() => navigate("/produtos-admin")}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h1>Cadastrar produto</h1>
                    </BoxAdmin>
                }
                {productsList.map((p) => (
                    <BoxProduct
                        key={p._id}
                        title={p.title}
                        image={p.image}
                        description={p.description}
                        maker={p.maker}
                        guarantee={p.guarantee}
                        area={p.area}
                        price={p.price}
                    />
                ))}
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
    margin-top: 100px;
    width: 90%;
    height: auto;
    min-height: 100vh;
    margin-bottom: 100px;
`
const BoxAdmin = styled.div`
    color: brown;
    margin-top: 40px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    border: 1px solid #FFD700;
    border-radius: 7px;
    padding: 15px;
    cursor: pointer;
ion-icon {
    font-size: 100px;
}
`