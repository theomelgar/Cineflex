import GLobalStyle from "./styles/GlobalStyle.js"
import styled from "styled-components";
import Cinemain from "./components/Cinemain.js";

export default function App() {
  return (
      <Conteiner>
        <GLobalStyle />
        <Cinemain/>
      </Conteiner>
  )
}

const Conteiner = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`