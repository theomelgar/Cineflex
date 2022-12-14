import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Final({ reserva }) {
    const navigate = useNavigate()

    function home() {
        navigate("/");
      }
 
    return (
        <Sucesso>
            <Titulo>
                Pedido feito com sucesso!
            </Titulo>
            <Informacoes>
                <Informacao data-test="movie-info">
                    Filme e sessão
                    <p>
                        {reserva.assentos.movie.title}
                    </p>
                    <p>
                        {reserva.assentos.day.date} {reserva.assentos.name}
                    </p>
                </Informacao>
                <Informacao data-test="seats-info">
                    Ingressos
                    {reserva.ids.map((seatId) => {
                        const [seat] = reserva.assentos.seats.filter(
                            (s) => s.id === seatId
                        );

                        return <p key={seat}>Assento {seat.name}</p>;
                    })}
                    <p>
                        Valor total: R${reserva.valor},00
                    </p>
                </Informacao>
                <Informacao data-test="client-info">
                    Comprador
                    <p>
                        Nome: {reserva.name}
                    </p>
                    <p>
                        CPF: {reserva.cpf}
                    </p>
                </Informacao>
            </Informacoes>
            <Home data-test="go-home-btn" onClick={home}>
                Voltar pra Home
            </Home>

        </Sucesso>
    )
}
const Sucesso = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:150px;
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
const Home = styled.div`
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
    &:hover{
        opacity: 60%;
        transform: scale(110%);
        transition: all 0.2s linear;
        cursor: pointer;
    }
`