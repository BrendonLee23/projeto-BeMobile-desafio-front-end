import { createContext } from "react";
import { InfoContextType } from "../protocols";

export const InfoContext = createContext<InfoContextType>({
    infos: [],
    setInfos: () => {},
    searchTerm: "",
    setSearchTerm: function (): void {
        throw new Error("Function not implemented.");
    }
});



export default InfoContext;