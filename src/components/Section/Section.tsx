import { styled } from "styled-components";
import UserImage from "../../assets/images/user-test.jpeg"

export default function Section() {
    return (
        <SectionArea>
            <TableBody>
                <TableHeader>
                    <div>
                        <h2>FOTO</h2>
                    </div>
                    <div>
                        <h2>NOME</h2>
                    </div>
                    <div>
                        <h2>CARGO</h2>
                    </div>
                    <div>
                        <h2>DATA DE ADMISSÃO</h2>
                    </div>
                    <div>
                        <h2>TELEFONE</h2>
                    </div>
                </TableHeader>
                <ItemList>
                    <div>
                        <img src={UserImage} alt="User-Image" />
                    </div>
                    <div>
                        <h1>Eloiza jjjjjjjjjjjjjj jjjjjjjjjj</h1>
                    </div>
                    <div>
                        <h1>Dev Front-End</h1>
                    </div>
                    <div>
                        <h1>07/07/2024</h1>
                    </div>
                    <div>
                        <h1>+55 (55) 55555-555</h1>
                    </div>
                </ItemList>
                <ItemList>
                    <div>
                        <img src={UserImage} alt="User-Image" />
                    </div>
                    <div>
                        <h1>Maria Eloiza kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</h1>
                    </div>
                    <div>
                        <h1>Dev Front-End</h1>
                    </div>
                    <div>
                        <h1>07/07/2024</h1>
                    </div>
                    <div>
                        <h1>+55 (55) 55555-555</h1>
                    </div>
                </ItemList>
                <ItemList>
                    <div>
                        <img src={UserImage} alt="User-Image" />
                    </div>
                    <div>
                        <h1>Maria Eloiza</h1>
                    </div>
                    <div>
                        <h1>Dev Front-End</h1>
                    </div>
                    <div>
                        <h1>07/07/2024</h1>
                    </div>
                    <div>
                        <h1>+55 (55) 55555-555</h1>
                    </div>
                </ItemList>
                <ItemList>
                    <div>
                        <img src={UserImage} alt="User-Image" />
                    </div>
                    <div>
                        <h1>Maria Eloiza</h1>
                    </div>
                    <div>
                        <h1>Dev Front-End</h1>
                    </div>
                    <div>
                        <h1>07/07/2024</h1>
                    </div>
                    <div>
                        <h1>+55 (55) 55555-555</h1>
                    </div>
                </ItemList>
                <ItemList>
                    <div>
                        <img src={UserImage} alt="User-Image" />
                    </div>
                    <div>
                        <h1>Maria Eloiza</h1>
                    </div>
                    <div>
                        <h1>Dev Front-End</h1>
                    </div>
                    <div>
                        <h1>07/07/2024</h1>
                    </div>
                    <div>
                        <h1>+55 (55) 55555-555</h1>
                    </div>
                </ItemList>
            </TableBody>
        </SectionArea>
    )
}

const SectionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px 30px 0px 30px;
`

const TableHeader = styled.div`
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
const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ItemList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
    height: 47px;
    gap: 10px;
    border-bottom: 1px solid #E0E0E0; 
    div{
        display:flex;
        align-items: center;
        width: 100%;
        height: 47px;
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