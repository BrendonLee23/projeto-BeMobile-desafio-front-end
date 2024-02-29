import { SetStateAction, Dispatch } from "react";

export type DataAPI = {
    id: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
};

export type InfoContextType = {
    infos: DataAPI[];
    setInfos: Dispatch<SetStateAction<DataAPI[]>>;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
};

export interface CustomImportMeta extends ImportMeta {
    env: {
        VITE_API_URL: string;
    };
}

export interface InputAreaProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<SetStateAction<string>>;
}
