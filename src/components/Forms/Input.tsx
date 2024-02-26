import { SetStateAction, useState } from "react";
import searchIcon from "../../assets/images/lupa.svg";
import StyledInput from "./Input-Styles";

export default function InputArea() {
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)

    const inputChangeFunction = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    const searchFunction = () => {
        // Adicinar Lógica de Busca pelos dados na API
        console.log("Pesquisando por:", searchTerm);
    };

    const searchKeyDownFunction = (event: { key: string; }) => {
        if (event.key === "Enter") {
            searchFunction();
        }
    };

    return (
        <StyledInput>
            <input 
                type="text" 
                placeholder="Pesquisar" 
                value={searchTerm} 
                onChange={inputChangeFunction} 
                onKeyDown={searchKeyDownFunction} 
                autoComplete="on"
            />
            <img src={searchIcon} alt="searchIcon" onClick={searchFunction} /> 
        </StyledInput>
    );
}
