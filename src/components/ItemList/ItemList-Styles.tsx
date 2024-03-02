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
        height: 50px;
        padding-left: 30px;
        } @media (max-width: 1000px) {
        div {
            width: 100px;
            justify-content: center;
            padding-left: 30px;
            justify-content: flex-start;
        }
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
        max-width: 170px;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
    h2{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: rgba(28, 28, 28, 1);
        max-width: 170px;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }@media (max-width: 1000px) {
        h2 {
            margin-left: -25px;
            justify-content: flex-start;
        }
    }
`
export const EmployeeShort = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    height: 55px;
    gap: 10px;
    border-top: 1px solid #E0E0E0; 
    div{
        display:flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 50px;
        }
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%; 
        object-fit: cover;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); 
        }
    h1 {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: rgba(28, 28, 28, 1);
        max-width: 170px;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
`