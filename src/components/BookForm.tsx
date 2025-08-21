import { useState } from "react";
import { useBook } from "../hooks/useBook";
import type { NewBookInterface } from "../model/bookModel";


export const BookForm = () =>{

    const {addBook} = useBook();
    const {mutate } = addBook
    const [titleField, setTitle] = useState<string>("")
    const [authorField, setAuthor] = useState<string>("")
    const [categoryField, setCategory] = useState<number>(1)


    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const newBook:NewBookInterface = {
            autor:authorField,
            titulo:titleField,
            categoriaId:categoryField
        }
        mutate(newBook);
        setTitle("");
        setAuthor("");
    }
    return (
    <form onSubmit={onSubmitForm} className="mx-auto flex flex-col max-w-sm items-center gap-y-2 rounded-xl bg-blue-50 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" value={titleField} onChange={e => {setTitle(e.target.value)}} className="h-12  border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none "/>
        <label htmlFor="title">Autor</label>
        <input type="text" name="author" id="author" value={authorField} onChange={e => {setAuthor(e.target.value)}} className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"/>
        <label htmlFor="title">Categoria</label>
        <select name="category" id="category"value={categoryField} onChange={e => {setCategory(parseInt(e.target.value))}} className="h-12  border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none" >
        <option value="1">Terror</option>
        <option value="2">Drama</option>
        <option value="3">Misterio</option>
        </select>
        <button type="submit" className="bg-cyan-800 hover:bg-cyan-500 p-3 rounded-2xl text-white">Agregar Libro</button>
    </form>
    );
}