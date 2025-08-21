import type { NewBookInterface } from "../model/bookModel";

async function fetchData(){
    const response = await fetch('http://localhost:3000/api/libro/');
    if (!response.ok) {
        throw new Error('Error');
    }
    const books = await response.json()
    return books
}

async function postBook({autor, categoriaId, titulo}:NewBookInterface) {
    const bodyResponse = JSON.stringify({
        autor,
        titulo,
        categoriaId:categoriaId
    });

    const response = await fetch('http://localhost:3000/api/libro/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyResponse,
    });

    if (!response.ok) {
        throw new Error("Error al agregar libro");
    }

    const books = await response.json();
    return books;
}
async function deleteBook(id:number) {
    const response = await fetch(`http://localhost:3000/api/libro/${id}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
    ,})  

    if (!response.ok) {
        throw new Error("Error al eliminar el libro");
    }

    const books = await response.json();
    return books;
} 


export {
    fetchData,
    postBook,
    deleteBook
}