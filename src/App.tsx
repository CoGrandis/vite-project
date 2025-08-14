import { useState } from "react"
import { useBook } from "./hooks/useBook";
import { BookList } from "./components/BookList";

function App() {

  const {book,addBook, deleteBook} = useBook()

  const [titleField, setTitle] = useState<string>("")
  const [authorField, setAuthor] = useState<string>("")
  const [categoryField, setCategory] = useState<number>(1)

  
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addBook(titleField, categoryField, authorField);
    setTitle("");
    setAuthor("");
  }

  return  (
  <main>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" value={titleField} onChange={e => {setTitle(e.target.value)}} className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"/>
        <label htmlFor="title">Autor</label>
        <input type="text" name="author" id="author" value={authorField} onChange={e => {setAuthor(e.target.value)}} className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"/>
        <label htmlFor="title">Categoria</label>
        <select name="category" id="category"value={categoryField} onChange={e => {setCategory(parseInt(e.target.value))}} className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none" >
          <option value="1">Terror</option>
          <option value="2">Drama</option>
          <option value="3">Misterio</option>
        </select>
        <button type="submit">Agregar Libro</button>
      </form>
      <BookList books={book} deleteBook={deleteBook} />
  </main>);
  
}

export default App
