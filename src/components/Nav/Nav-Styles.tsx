import { styled } from "styled-components";

const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    h1 {
        color: #1C1C1C;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;

    }
    @media (max-width: 550px) {
            height: 135px;
            padding: 20px 20px 20px 20px;
            flex-direction: column;
            align-items: flex-start;
    }
`

export default StyledNav;
