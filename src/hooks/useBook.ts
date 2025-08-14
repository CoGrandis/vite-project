import { type BookInterface, type CategoriaInterface } from "../model/bookModel";
import { useEffect, useState } from "react";

export function useBook(){
    const [book, setBook] = useState<BookInterface[]>([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/libro").then(response => response.json()).then(data => setBook(data))
    },[])

    const deleteBook = (id:number) =>{
        fetch(`http://localhost:3000/api/libro/${id}`, {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json'
            }
      ,})
        setBook((prev) =>{
        return prev.filter(book => book.id !== id)
        })
    }

    const addBook = (titulo:string, categoria:number, autor:string) => {
        const  newCategoria:CategoriaInterface ={ id:categoria}
        setBook( (prev)=>{
            const contador = prev.reduce((lastId, task) => (task.id > lastId ? task.id : lastId),0);
            const book: BookInterface = {
                id:contador+1,
                titulo: titulo,
                autor:autor,
                categoria:newCategoria,
            }
            return [...prev, book]
        })


        const bodyResponse = JSON.stringify({
            "autor":autor,
            "titulo":titulo,
            "categoriaId":categoria})
        
        fetch("http://localhost:3000/api/libro", {
            method: "POST",
            body: bodyResponse, 
            headers: {
            'Content-Type': 'application/json'
            }
      ,})
    }

    return {book, deleteBook, addBook}

}