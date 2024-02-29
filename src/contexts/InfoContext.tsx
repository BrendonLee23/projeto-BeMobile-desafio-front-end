import { SetStateAction, createContext } from "react";
import { InfoContextType } from "../protocols";

export const InfoContext = createContext<InfoContextType>({
    infos: [],
    setInfos: () => { },
    searchTerm: "",
    setSearchTerm: function (value: SetStateAction<string>): void {
        throw new Error("Function not implemented.");
    }
});

export default InfoContext;