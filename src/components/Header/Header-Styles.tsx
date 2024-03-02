import { styled } from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px 0px #00000033;
    img {
        margin-left: 30px;
        width: 45px;
        height: 45px;
    } @media (max-width: 550px) {
        img{
            margin-left: 20px;
        }
    }
`
export default StyledHeader;