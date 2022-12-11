import Catalogo from "./Catalogo"
import Sessions from "./Sessions"
import Room from "./Room"
import Final from "./Final"
import styled from "styled-components"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

export default function Cinemain() {
    return (
        <Conteiner>
            <BrowserRouter>
                <Link to={'/'}>
                    <Logo>
                        CINEFLEX
                    </Logo>
                </Link>
                <Routes>
                    <Route path="/" element={<Catalogo />} />
                    <Route path="/sessoes/:idFilme" element={<Sessions />} />
                    <Route path="/assentos/:idSessao" element={<Room />} />
                    <Route path="/sucesso" element={<Final/>} />
                </Routes>
            </BrowserRouter>
        </Conteiner>
    )
}
const Conteiner = styled.div`
    width: 375px;
`
const Logo = styled.div`
width: 375px;
height: 67px;
left: 0px;
top: 0px;

background: #C3CFD9;
left: 0px;
top: 0px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: #E8833A;


`