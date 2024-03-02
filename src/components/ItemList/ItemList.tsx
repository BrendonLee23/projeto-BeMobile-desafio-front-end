import formatDate from "../../utils/formatDate";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import { Employee, EmployeeHidenCard, EmployeeShort } from "./ItemList-Styles";
import { useEffect, useState } from "react";
import { ItemListProps } from "../../protocols";
import Vector from "../Forms/DisplayVector/Vector";

export default function ItemList({ item }: ItemListProps) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showEmployeeHidenCard, setShowEmployeeHidenCard] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const formattedPhone = formatPhoneNumber(item.phone);
    const formattedDate = formatDate(item.admission_date);

    const toggleEmployeeHidenCard = () => {
        setShowEmployeeHidenCard(!showEmployeeHidenCard);
    };

    return (
        <>
            {windowWidth >= 550 && (
                <Employee>
                    <div>
                        <img src={item.image} alt="User-Image" />
                    </div>
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                    <div>
                        <h1>{item.job}</h1>
                    </div>
                    <div>
                        <h2>{formattedDate}</h2>
                    </div>
                    <div>
                        <h2>{formattedPhone}</h2>
                    </div>
                </Employee>
            )}
            {windowWidth < 550 && (
                <EmployeeShort>
                    <div>
                        <img src={item.image} alt="User-Image" />
                    </div>
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                    <Vector onClick={toggleEmployeeHidenCard} />
                </EmployeeShort>
            )}
            {windowWidth < 550 && showEmployeeHidenCard && (
                <EmployeeHidenCard>
                    <div>
                        <h1>Cargo</h1>
                        <h2>{item.job}</h2>
                    </div>
                    <div>
                        <h1>Data de Admissão</h1>
                        <h2>{formattedDate}</h2>
                    </div>
                    <div>
                        <h1>Telefone</h1>
                        <h2>{formattedPhone}</h2>
                    </div>
                </EmployeeHidenCard>
            )}
        </>
    );
}


