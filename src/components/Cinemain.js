import Catalogo from "./Catalogo"
import Sessions from "./Sessions"
import Room from "./Room"
import Final from "./Final"
import styled from "styled-components"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useState } from "react"


export default function Cinemain() {

    const [reserva, setReserva] = useState(undefined);

    return (
        <Conteiner>
            <BrowserRouter>
                <Logo>
                    <Link to={'/'}>
                        <p>CINEFLEX</p>
                    </Link>
                </Logo>
                <Routes>
                    <Route path="/" element={<Catalogo />} />
                    <Route path="/sessoes/:idFilme" element={<Sessions />} />
                    <Route path="/assentos/:idSessao" element={<Room setReserva={setReserva} />} />
                    <Route path="/sucesso" element={<Final reserva={reserva} />} />
                </Routes>
            </BrowserRouter>
        </Conteiner>
    )
}
const Conteiner = styled.div`
    position: relative;
    width: 100%;
`
const Logo = styled.div`
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
    
`
