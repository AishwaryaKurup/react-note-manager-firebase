import { Input } from "../Input/Input";
import { Search as SearchIcon } from "lucide-react";
import s from "./style.module.css";

export function SearchBar({onTextChange, placeholder}){
    return (
        <>
            <SearchIcon size={25} className={s.icon}/>
            <Input onTextChange={onTextChange} placeholder={placeholder}/>
        </>
    );
}
