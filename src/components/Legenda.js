import styled from "styled-components"
export default function Legenda() {
    return (
        <Legend>
            <Disposicao>
                <Selecionado />
                <p>Selecionado</p>
            </Disposicao>
            <Disposicao>
                <Disponivel />
                <p>Disponivel</p>
            </Disposicao>
            <Disposicao>
                <Indisponivel />
                <p>Indisponivel</p>
            </Disposicao>
        </Legend>
    )
}
const Legend = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-around;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`
const Disposicao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Disponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
`
const Indisponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
`

const Selecionado = styled.div`
    width: 25px;
    height: 25px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
`