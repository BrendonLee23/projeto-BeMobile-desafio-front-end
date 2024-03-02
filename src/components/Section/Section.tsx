import { useContext, useEffect, useState } from "react";
import { SectionArea, TableBody } from "./Section-Styles";
import InfoContext from "../../contexts/InfoContext";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import { CustomImportMeta } from "../../protocols";
import TableHeader from "../TableHeader/TableHeader";
import Swal from "sweetalert2";

export default function Section() {
    const { infos, setInfos, searchTerm } = useContext(InfoContext);
    const [isLoading, setIsLoading] = useState(true);
    const { VITE_API_URL } = (import.meta as CustomImportMeta).env;

    const bringData = () => {
        setIsLoading(true);
        axios
            .get(VITE_API_URL + "employees")
            .then((response) => {
                setInfos(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Erro ao obter dados do clima",
                    text: "Os dados retornados pela API não estão no formato esperado.",
                    icon: "error",
                    confirmButtonText: "😢 okay..."
                });
                setIsLoading(false);
            });
    };

    useEffect(() => {
        bringData();
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
                <TableHeader/>
                {renderItems}
            </TableBody>
        </SectionArea>
    );
}
