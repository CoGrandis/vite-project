import { createContext, useContext } from "react";
import type { BookInterface } from "../model/bookModel";
import { useBook } from "../hooks/useBook";
// interfaz de estados del Contexto (que va a proveer el contexto)
interface BookConstextState{
    book: BookInterface[];
    deleteBook: (id: number) => void;
    addBook: (titulo: string, categoria: number, autor: string) => void;
    loading: boolean;
    error: string|null;
    fetchData: () => void;
    cancelRequest: () => void;
}
// Crear el context
const BookContext = createContext<BookConstextState | undefined>(undefined);

export const BookProvider = ({children}:{children:React.ReactNode})=>{
    const bookContext = useBook()
    return (
        <BookContext.Provider value={bookContext}>
            {children}
        </BookContext.Provider>
    );

}

// hook
// eslint-disable-next-line react-refresh/only-export-components
export const useBookContext = () => {
    const context = useContext(BookContext);
    if(!context) throw Error("Error Context");
    return context
}