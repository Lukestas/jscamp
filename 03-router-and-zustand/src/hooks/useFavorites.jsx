import { useContext } from "react";
import { FavoritesContext } from "../context/FavContext";

export function useFavorite(){
    const context=useContext(FavoritesContext)
    return context
}