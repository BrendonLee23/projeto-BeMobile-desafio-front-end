import Logo from "../../assets/images/logo.svg";
import StyledHeader from "./Header-Styles";

export default function Header() {
    return (
        <StyledHeader>
            <img src={Logo} alt="Logo" />
        </StyledHeader>
    )
}


