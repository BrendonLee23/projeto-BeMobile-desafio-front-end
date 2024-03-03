import { useContext, useState, useEffect, useRef } from "react";
import searchIcon from "../../../assets/images/lupa.svg";
import StyledInput from "./Input-Styles";
import InfoContext from "../../../contexts/InfoContext";
import Swal from "sweetalert2";

export default function InputArea() {
    const { setSearchTerm, setInfos, infos } = useContext(InfoContext);
    const [inputValue, setInputValue] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (formSubmitted) {
            runSearch();
            setFormSubmitted(false); // Redefine formSubmitted para false após a execução de runSearch
        }
    }, [formSubmitted]);

    const inputChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (newValue.trim() === "") {
            setSearchTerm(""); 
            setInfos(infos);
        }
    };

    const runSearch = () => {
        setSearchTerm(inputValue);
        if (inputValue.trim() !== "") {
            console.log("Resultado da Busca:", inputValue);
        } else {
            setInfos(infos);
            Swal.fire({
                title: "Pesquisa vazia",
                text: "Por favor, insira os dados de pesquisa.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    const searchKeyDownFunction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setFormSubmitted(true);
        }
    };

    const runSearchIconClick = () => {
        setFormSubmitted(true);
    };

    return (
        <StyledInput>
            <input
                ref={inputRef}
                type="text"
                placeholder="Pesquisar"
                value={inputValue}
                onChange={inputChangeFunction}
                onKeyDown={searchKeyDownFunction}
                autoComplete="on"
            />
            <img src={searchIcon} alt="searchIcon" onClick={runSearchIconClick} />
        </StyledInput>
    );
}
