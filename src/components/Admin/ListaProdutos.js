import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function ListaProdutos() {

    const [lista, setLista] = useState(null);
    const config = {
        // headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/get-events", config)

        promise.then((res) => {
            setLista(res.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });
    }, []);

    if (lista === null) {
        return (
            <BoxList>
                <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt={'Carregando...'} />
            </BoxList>
        );
    };

    return (
        <BoxList>
            <h1>Lista de Produtos Cadastrados</h1>
            {lista.map((l) =>
                <p key={l._id}>{l.title}</p>
            )}
        </BoxList>
    );
};

const BoxList = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`