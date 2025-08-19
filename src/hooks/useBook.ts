import { type BookInterface, type CategoriaInterface } from "../model/bookModel";
import { useEffect, useState, useRef } from "react";

export function useBook(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [book, setBook] = useState<BookInterface[]>([])

    const controllerRef = useRef<AbortController|null>(null)
    const TimeOutRef = useRef<number|null>(null)

    useEffect(()=>{
        fetchData()
        // return cuando el componente se desmonta
        return () => cancelRequest();
    },[])

    const fetchData = () =>{
        controllerRef.current = new AbortController()
        const signal = controllerRef.current.signal;
        setLoading(true)
        setError(null)
        TimeOutRef.current = setTimeout(()=>{
            fetch("http://localhost:3000/api/libro",{signal})
            .then(response => response.json())
            .then(data => setBook(data))
            .catch((error) => {setError(error.message)})
            .finally(()=>setLoading(false))
        }, 2000)

    }
  

    const deleteBook = (id:number) =>{
    try {
        fetch(`http://localhost:3000/api/libro/${id}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
        ,})
        setBook((prev) =>{
        return prev.filter(book => book.id !== id)
        })
    } catch (error) {
        if(error instanceof Error){
            setError(error.message)
        }
    }
        
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

        try {
            fetch("http://localhost:3000/api/libro", {
                method: "POST",
                body: bodyResponse, 
                headers: {
                'Content-Type': 'application/json'
                }
            ,})
        } catch (error) {
            if(error instanceof Error){
                setError(error.message)
            }
        }
        

    }


    const cancelRequest = () =>{
        if (controllerRef.current) {
                controllerRef.current.abort();
        }
        if(TimeOutRef.current !== null) clearTimeout(TimeOutRef.current);
        setLoading(false)
    }
    return {book, deleteBook, addBook, loading, error, fetchData, cancelRequest}

}