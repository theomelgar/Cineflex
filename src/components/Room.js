import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from "./Footer"
import Legenda from './Legenda';
import "../styles/style.css"
import Voltar from "./Voltar"
import Loading from './Loading';


export default function Room({ setReserva }) {
    const [assentos, setAssentos] = useState(undefined);
    const { idSessao } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState([]);
    const [cpf, setCpf] = useState([]);
    const [valor, setValor] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
        requisicao.catch((err) => alert(err.response.data.message));
    }, []);
    if (assentos === undefined) {
        return <Loading />;
    }
    function enviar(event) {

        event.preventDefault(); // impede o redirecionamento

        const reserva = {
            ids: selectedSeats.map((s) => s.id),
            name: name,
            cpf: cpf,
        };

        setReserva({ ...reserva, assentos: assentos, valor:valor });
        axios
            .post(
                "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
                reserva
            )
            .then(() => navigate("/sucesso"));
    }
    //Faz o click em cada componente Seat
    function handleSeat(seat) {
        //Se o assento estiver indisponível não faz nada
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
            return;
        }
        //Toggle - "Liga e desliga" a seleção
        seat.selected = !seat.selected;

        //Se o estado atual é não selecionado precisamos remover o assento
        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.name === seat.name));
            setSelectedSeats([...filteredSeats]);
            setValor(valor-10)
            return;
        }
        //Adicionamos o assento a lista de assentos selecionados
        setSelectedSeats([...selectedSeats, seat]);
        setValor(valor+10)
        return;
    }
    return (
        <Seats>
            <Voltar />
            <Texto>Selecione o(s) assento(s)</Texto>
            <ul>
                {assentos.seats.map(seat =>
                    <Seat >
                        {!seat.selected ? (
                            <div className={`seat ${seat.isAvailable}`} data-test="seat" onClick={() => handleSeat(seat)}>
                                {Number(seat.name) < 10 ?
                                    (`0 ${seat.name}`)
                                    : (seat.name)
                                }

                            </div>
                        ) : (
                            <div className={`seat selected`} data-test="seat" onClick={() => handleSeat(seat)}>
                                {Number(seat.name) < 10 ?
                                    (`0 ${seat.name}`)
                                    : (seat.name)
                                }
                            </div>
                        )}
                    </Seat>
                )}
                <span>TELA</span>
            </ul>
            <Legenda />

            <Formulario>
                <form onSubmit={enviar}>
                    <p>{`Total a pagar: R$ ${valor},00`}</p>
                    <Nome>
                        <label for="nome">Nome do comprador:</label>
                        <input id="nome" data-test="client-name" type="text" placeholder="Digite seu nome..."
                            value={name} required onChange={e => setName(e.target.value)} />
                    </Nome>
                    <Cpf>
                        <label for="cpf">CPF do comprador:</label>
                        <input id="cpf" type="text" data-test="client-cpf" placeholder="Digite seu CPF..."
                            value={cpf} required onChange={e => setCpf(e.target.value
                                .replace(/\D/g, "")
                                .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                                .substring(0, 14))} />
                    </Cpf>
                    <Reservar data-test="book-seat-btn" type='submit'>
                        Reservar assento(s)
                    </Reservar>
                </form>
            </Formulario>
            <Footer data-test="footer">
                <Foto>
                    <img src={assentos.movie.posterURL} />
                </Foto>
                <Titulo>
                    {assentos.movie.title} - {assentos.day.weekday} - {assentos.name} - {`R$ ${valor},00`}
                </Titulo>
            </Footer>
        </Seats>
    )
}
const Seats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom:150px;
    width: 100%;
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
    span{
        width: 150px;
        background-color: aquamarine;
        text-align: center;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;    
        
`
const Formulario = styled.div`
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: flex-start;
        gap: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        
}
`
const Nome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    color: #293845;
    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        &::placeholder{
            
            color: #AFAFAF;
        }
    }
`

const Cpf = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    color: #293845;
    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        &::placeholder{
            
            color: #AFAFAF;
        }
    }
`

const Reservar = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin: 0 auto;
    &:hover{
        opacity: 60%;
        transform: scale(110%);
        transition: all 0.2s linear;
        cursor: pointer;
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
    width: 280px;
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