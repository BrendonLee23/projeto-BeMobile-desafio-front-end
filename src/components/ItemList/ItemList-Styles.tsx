import { styled } from "styled-components";

export const Employee = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    height: 50px;
    gap: 10px;
    border-bottom: 1px solid #E0E0E0; 
    div{
        display:flex;
        align-items: center;
        width: 100%;

        padding-left: 30px;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%; 
        object-fit: cover;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); 
    } h1 {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: rgba(28, 28, 28, 1);
        max-width: 170px; /* Defina o tamanho máximo para o texto */
        overflow: hidden; /* Oculta o texto além do tamanho máximo */
        white-space: nowrap; /* Impede que o texto quebre em várias linhas */
        text-overflow: ellipsis; /* Adiciona reticências (...) quando o texto é truncado */
    }
`