import GLobalStyle from "./styles/GlobalStyle.js"
import Cinemain from "./components/Cinemain"
import styled from "styled-components";
export default function App() {
  return (
    <Conteiner>
    <GLobalStyle/>
    <Cinemain/>
    </Conteiner>
  );
}

const Conteiner = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`