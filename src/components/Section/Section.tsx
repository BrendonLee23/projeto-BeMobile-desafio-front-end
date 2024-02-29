import UserImage from "../../assets/images/user-test.jpeg"
import { ItemList, SectionArea, TableBody, TableHeader } from "./Section-Styles";

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
