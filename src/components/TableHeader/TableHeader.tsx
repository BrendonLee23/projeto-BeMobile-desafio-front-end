import { useState, useEffect } from "react";
import { TableHeaderArea } from "./TableHeader-Styles";
import Dote from "../../assets/images/dote.svg";

export default function TableHeader() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const layoutResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", layoutResize);

        return () => {
            window.removeEventListener("resize", layoutResize);
        };
    }, []);

    return (
        <TableHeaderArea>
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
                <h3>TELEFONE</h3>
            </div>
            {windowWidth < 550 && (
                <div>
                    <img src={Dote} alt="dote" />
                </div>
            )}
        </TableHeaderArea>
    );
}


