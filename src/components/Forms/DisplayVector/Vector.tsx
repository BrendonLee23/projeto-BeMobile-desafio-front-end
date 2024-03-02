// Vector.tsx
import { useState } from "react";
import VectorIcon from "../../../assets/images/Vector.svg";
import VectorArea from "./Vector-Styles";

interface VectorProps {
    onClick: () => void;
}

export default function Vector({ onClick }: VectorProps) {
    const [flipped, setFlipped] = useState(false);

    const executeClick = () => {
        setFlipped(!flipped);
        onClick(); 
    };

    return (
        <VectorArea onClick={executeClick}>
            <img
                src={VectorIcon}
                alt="Vector"
                style={{ transform: flipped ? "scaleY(-1)" : "scaleY(1)" }}
            />
        </VectorArea>
    );
}

