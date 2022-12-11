import { useState, useEffect } from 'react';
import axios from 'axios';
import gif from "../assets/Loading_icon.gif"
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Footer from "./Footer"

export default function Room() {
    const [assentos, setAssentos] = useState(undefined);
    const { idSessao } = useParams();
    const [resultado, setResultado] = useState("#FBE192")
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
        requisicao.catch((err) => alert(err.response.data.message));
    }, []);

    if (assentos === undefined) {
        return <img src={gif} alt='loading' />;
    }
    console.log(assentos.seats)

    return (
        <Seats>
            <Texto>Selecione o(s) assento(s)</Texto>
            <ul>
                {assentos.seats.map(assento =>
                    // if(assentos.isAvaiable) {
                    //     setResultado("#C3CFD9");
                    //     color={resultado};
                    //     }
                    
                    <Seat>
                        {assento.name}
                    </Seat>
                )}
            </ul>
            <Legenda>
                <Disposicao>
                    <Selecionado />
                    <p>Selecionado</p>
                </Disposicao>
                <Disposicao>
                    <Disponivel />
                    <p>Disponivel</p>
                </Disposicao>
                <Disposicao>
                    <Indisponivel />
                    <p>Indisponivel</p>
                </Disposicao>
            </Legenda>
            Nome do comprador:
            <Nome></Nome>
            CPF do comprador:
            <Cpf></Cpf>
            <Link to={"/sucesso"}>
                <Reservar>
                    Reservar assento(s)
                </Reservar>
            </Link>
            <Footer>
                <Foto>
                    <img src={assentos.movie.posterURL}/>
                </Foto>
                <Titulo>
                    {assentos.movie.title} - {assentos.name}
                </Titulo>
            </Footer>
        </Seats>
    )
}
const Seats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    ul{
        width: 375px;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: aliceblue;
        gap: 10px;
    }
`
const Texto = styled.div`
    margin-top: 30px;
    width: 375px;
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
`
const Seat = styled.div`
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    background: ${resultado => resultado.color};
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;    
        
`
const Legenda = styled.div`
    display: flex;
    justify-content: space-around;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`
const Disposicao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Disponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
`
const Indisponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
`

const Selecionado = styled.div`
    width: 25px;
    height: 25px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
`

const Nome = styled.input``

const Cpf = styled.input``

const Reservar = styled.button`

`
const Foto = styled.div`
    position: absolute;
    width: 64px;
    height: 89px;
    left: 10px;
    bottom: 14px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 48px;
        height: 72px;
        background: url(image.png);
    }
`
const Titulo = styled.div`
    position: absolute;
    width: 280px;
    height: 40px;
    left: 88px;
    bottom: 39px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
`