// Section.tsx
import { useContext, useEffect, useState } from "react";
import { SectionArea, TableBody, TableHeader } from "./Section-Styles";
import InfoContext from "../../contexts/InfoContext";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import { CustomImportMeta } from "../../protocols";


export default function Section() {
    const { infos, setInfos, searchTerm } = useContext(InfoContext);
    const [isLoading, setIsLoading] = useState(true);
    const { VITE_API_URL } = (import.meta as CustomImportMeta).env;

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get(VITE_API_URL + "employees")
            .then((response) => {
                setInfos(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredInfos = infos.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.includes(searchTerm)
        );
    });

    const renderItems = isLoading ? (
        <div>Carregando...</div>
    ) : (
        filteredInfos.map((item, indice) => (
            <ItemList key={indice} item={item} />
        ))
    );

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
                {renderItems}
            </TableBody>
        </SectionArea>
    );
}
