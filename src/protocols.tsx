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
};


