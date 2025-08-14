import type { BookInterface } from "../model/bookModel";
import { Card } from "./Card";

interface BookListProps{
    books:BookInterface[];
    deleteBook(id:number):void ;

}

export const BookList = ({deleteBook,books}:BookListProps) =>{

    const cards = books.map((book)=>{
        return (
            <Card key={book.id}>
                <h3>{book.titulo}</h3>
                <span>Autor: {book.autor}</span>
                <span>Categoria: {book.categoria.categoria}</span>
                <button onClick={() => deleteBook(book.id)}>Eliminar</button>

            </Card>
        )
    })

    return (
        <div className="cardContainer">
            {cards}
        </div>
    )

}