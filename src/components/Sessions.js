import { useState, useEffect } from 'react';
import axios from 'axios';
import gif from "../assets/Loading_icon.gif"
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Voltar from "./Voltar"


export default function Sessions() {
    const [sessao, setSessao] = useState(undefined);
    const { idFilme } = useParams();
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(resposta => {
            setSessao(resposta.data);
        });
        requisicao.catch((err) => alert(err.response.data.message));
    }, []);

    if (sessao === undefined) {
        return <img src={gif} alt='loading' />;
    }
    console.log(sessao.days)
    return (
        <Horarios>
            <Voltar/>
            <p>Selecione o horário</p>
            <ul>
                {sessao.days.map(s =>
                    <li data-test="movie-day">
                        {s.weekday} - {s.date}
                        <Opcoes>
                            {s.showtimes.map(horario =>
                                <Link to={`/assentos/${horario.id}`}>
                                    <button data-test="showtime">{horario.name}</button>
                                </Link>)}
                        </Opcoes>
                    </li>
                )}
            
            </ul>
            <Footer data-test="footer">
                <Foto>
                    <img src={sessao.posterURL}/>
                </Foto>
                <Titulo>
                    {sessao.title}
                </Titulo>
            </Footer>
        </Horarios>

    )
}
const Horarios = styled.div`
    width: 375px;
    height: 100%;
    p{
        width: 374px;
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
    }
    img{
        width: 375px;
    }
`
const Opcoes = styled.div`
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
    width: 169px;
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