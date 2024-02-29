import { DataAPI } from "../../protocols";
import { Employee } from "./ItemList-Styles";

interface ItemListProps {
    item: DataAPI;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {
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
                <h1>{item.phone}</h1>
            </div>
        </Employee>
    );
};

export default ItemList;

