import { styled } from "styled-components";

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 550px) {
        width: 100%;
    }
    input {
        width: 300px;
        height: 45px;
        padding: 12px 16px;
        background-color: #FFFFFF;
        border: 1px solid #DFDFDF;
        border-radius: 8px;
        position: relative;
    }
    @media (max-width: 550px) {
        input {
            width: 100%;
        }
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
        cursor: pointer; 
        margin-right: 12px; 
        position: absolute;
    }
`;

export default StyledInput;