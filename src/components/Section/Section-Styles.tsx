import { styled } from "styled-components"

export const SectionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px 30px 0px 30px;
`

export const TableHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 47px;
    border-radius: 8px 8px 0px 0px;
    gap:10px;
    div{
        display:flex;
        align-items: center;
        width: 100%;
        height: 47px;
        padding-left: 30px;
    }
    h2{ 
        color: rgba(255, 255, 255, 1);
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
`
export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

