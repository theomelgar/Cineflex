import Catalogo from "./Catalogo"
import styled from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function Cinemain() {
    return (
        <BrowserRouter>
            <Logo>
                CINEFLEX
            </Logo>
            <Routes>
                <Route path="/" element={<Catalogo />} />
            </Routes>
        </BrowserRouter>
    )
}
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