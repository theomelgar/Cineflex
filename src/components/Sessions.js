import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Voltar from "./Voltar"
import Loading from './Loading';


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
        return <Loading />;
    }
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
                                    <div data-test="showtime">{horario.name}</div>
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
    width: 100%;
    height: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    letter-spacing: 0.02em;
    color: #293845;
    margin-bottom:150px;
    p{
        margin: 0 auto;
        width: 100%;
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
    ul{
        margin: 0 auto;
    }
    li{
        margin-bottom: 30px ;
    }
`
const Opcoes = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 auto;
    width: 100%;
    div{
        width: 0 auto;
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        width: 83px;
        height: 43px;
        left: 23px;
        top: 227px;
        background: #E8833A;
        border-radius: 3px;
}
`
const Foto = styled.div`
    width: 64px;
    height: 89px;
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
    width: 169px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #293845;
`