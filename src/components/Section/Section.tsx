import { useContext, useEffect, useState } from "react";
import { SectionArea, TableBody, TableHeader } from "./Section-Styles";
import InfoContext from "../../contexts/InfoContext";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import { DataAPI } from "../../protocols"; 


export default function Section() {
    const { infos, setInfos } = useContext(InfoContext);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setIsLoading(true);
        axios.get("http://localhost:3000/employees")
            .then(response => {
                setInfos(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

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
                {infos.map((item: DataAPI, indice: number) => (
                    <ItemList key={indice} item={item} />
                ))}
            </TableBody>
        </SectionArea>
    );
}
