import { styled } from "styled-components";

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    input {
        width: 300px;
        height: 45px;
        padding: 12px 16px;
        background-color: #FFFFFF;
        border: 1px solid #DFDFDF;
        border-radius: 8px;
        position: relative;
    }
    input::placeholder {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    img {
        width: 23px;
        height: 23px;
        cursor: pointer; /* Adiciona o cursor tipo "pointer" */
        margin-right: 12px; /* Ajusta a margem para separar o ícone do input */
        position: absolute;
    }
`;

export default StyledInput;