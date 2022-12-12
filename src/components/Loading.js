import styled from "styled-components";
import load from "../assets/Loading_icon.gif"
export default function Loading(){
    return(
        <Style>
            <img src={load} alt='loading' />
        </Style>
        
    )
}

const Style = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`