import { DataAPI } from "../../protocols";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import { Employee } from "./ItemList-Styles";

interface ItemListProps {
    item: DataAPI;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {
    console.log(item.phone)
    const formattedPhone = formatPhoneNumber(item.phone);
    
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
                <h1>{item.admission_date}</h1>
            </div>
            <div>
                <h1>{formattedPhone}</h1>
            </div>
        </Employee>
    );
};

export default ItemList;

