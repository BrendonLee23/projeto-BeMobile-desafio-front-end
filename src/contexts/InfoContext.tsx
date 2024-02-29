import { createContext } from "react";
import { InfoContextType } from "../protocols";

export const InfoContext = createContext<InfoContextType>({
    infos: [],
    setInfos: () => {},
});

export default InfoContext;