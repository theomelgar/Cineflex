import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function Catalogo() {

    const [filmes, setFilmes] = useState(undefined);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);

        });
    }, []);

    if (filmes === undefined) {
        return <Loading/>
    }
    return (
        <Catalogue>
            <p>Selecione o filme</p>
            <ul>
                {filmes.map(filme =>
                    <Link to={`/sessoes/${filme.id}`}>
                        <li data-test="movie">
                            <img src={filme.posterURL} alt="filme" />
                        </li>
                    </Link>)}
            </ul>
        </Catalogue>
    );
}

const Catalogue = styled.div`
    p{
        height: 110px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
        margin: 0 auto ;
    }
    ul{ 

        width: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 145px;
        height: 209px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        &:hover{
        transform: scale(110%);
        }
    }
    img{
        width: 129px;
        height: 193px;
    }
`