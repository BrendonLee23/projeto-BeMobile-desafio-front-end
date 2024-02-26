import searchIcon from "../../assets/images/lupa.svg";
import StyledInput from "./Input-Styles";

export default function InputArea() {
    return (
        <StyledInput>
            <input type="text" placeholder="Pesquisar" />
            <img src={searchIcon} alt="searchIcon" />
        </StyledInput>
    )
}

