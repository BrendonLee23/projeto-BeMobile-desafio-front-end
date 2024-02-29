import { DataAPI } from "../../protocols";
import formatDate from "../../utils/formatDate";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import { Employee } from "./ItemList-Styles";

interface ItemListProps {
    item: DataAPI;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {

    const formattedPhone = formatPhoneNumber(item.phone);
    const formattedDate = formatDate(item.admission_date);

    return (
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
                <h1>{formattedDate}</h1>
            </div>
            <div>
                <h1>{formattedPhone}</h1>
            </div>
        </Employee>
    );
};

export default ItemList;

