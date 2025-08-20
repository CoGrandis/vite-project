interface NewBook {
    titulo: string;
    categoria: number;
    autor: string;
};

async function fetchData(){
    const response = await fetch('http://localhost:3000/api/libro/');
    if (!response.ok) {
        throw new Error('Error');
    }
    const books = await response.json()
    return books
}

async function postBook({ titulo, categoria, autor }: NewBook) {
    const bodyResponse = JSON.stringify({
        autor,
        titulo,
        categoriaId: categoria
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