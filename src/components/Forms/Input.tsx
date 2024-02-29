import { useContext, useState } from "react";
import searchIcon from "../../assets/images/lupa.svg";
import StyledInput from "./Input-Styles";
import InfoContext from "../../contexts/InfoContext";

export default function InputArea() {
    const { setSearchTerm, setInfos, infos } = useContext(InfoContext);
    const [inputValue, setInputValue] = useState("");

    const inputChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (newValue.trim() === "") {
            window.location.reload();
            /* setInfos(infos); */
        }
    };

    const handleSearch = () => {
        setSearchTerm(inputValue);
        if (inputValue.trim() !== "") {
            console.log("Resultado da Busca:", inputValue);
        } else {
            setInfos(infos);
        }
    };

    const searchKeyDownFunction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearchIconClick = () => {
        handleSearch();
    };

    return (
        <StyledInput>
            <input
                type="text"
                placeholder="Pesquisar"
                value={inputValue}
                onChange={inputChangeFunction}
                onKeyDown={searchKeyDownFunction}
                autoComplete="on"
                autoFocus
            />
            <img src={searchIcon} alt="searchIcon" onClick={handleSearchIconClick} />
        </StyledInput>
    );
}
