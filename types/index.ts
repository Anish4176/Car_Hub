import { MouseEventHandler } from 'react'
export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleclick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "submit" | "button";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?:boolean;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setmanufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
export interface FilterOptions {
   title:string;
   value:string;
}
export interface CustomFilterProps {
    title: string;
    setfilter:(value:any) => void;
    options: FilterOptions[];
}
export interface ShowMoreProps{
    pageNumber:number;
    isNext:boolean;
    setlimit:(value:number) => void;
}
export interface GoogleProviderProps {
    clientId:string;
    clientSecret:string;
}