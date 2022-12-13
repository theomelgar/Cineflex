import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Voltar() {
    return (
        <Link to={(-1)} data-test="go-home-header-btn">
            <Back>
            <ion-icon name="arrow-back-sharp"></ion-icon>
            </Back>
        </Link>
    )
}
const Back = styled.div`
    position: absolute;
    top: 12px;
    left: 15px;
    width: 70px;
    font-size: 40px;
`