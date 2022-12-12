import styled from "styled-components"
import { useParams } from "react-router-dom"

export default function Final() {
    const {assentos.movie.title} = useParams()
    return (
        <Sucesso>
            <Titulo>
                Pedido feito com sucesso!
            </Titulo>
            <Informacoes>
                <Informacao>
                Filme e sessão
                <p>
                Enola Holmes
                </p>
                <p>
                24/06/2021 15:00
                </p>
                </Informacao>
                <Informacao>
                Ingressos
                <p>
                Enola Holmes
                </p>
                <p>
                24/06/2021 15:00
                </p>   
                </Informacao>
                <Informacao>
                Comprador
                <p>
                Enola Holmes
                </p>
                <p>
                24/06/2021 15:00
                </p>
                </Informacao>
            </Informacoes>

            <Home>
            Voltar pra Home
            </Home>
        </Sucesso>
    )
}
const Sucesso=styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Titulo = styled.div`
    width: 374px;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`
const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
const Informacao = styled.div`
    width: 374px;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    letter-spacing: 0.04em;
    color: #293845;
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`
const Home = styled.button`
    margin-top: 70px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
`