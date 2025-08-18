import { useState } from "react"
import { useBook } from "./hooks/useBook";
import { BookList } from "./components/BookList";

function App() {

  const {book,addBook, deleteBook,fetchData, loading, error, cancelRequest} = useBook()

  const [titleField, setTitle] = useState<string>("")
  const [authorField, setAuthor] = useState<string>("")
  const [categoryField, setCategory] = useState<number>(1)

  
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addBook(titleField, categoryField, authorField);
    setTitle("");
    setAuthor("");
  }
  if (loading) {
    return( 
    <main>
      <div className='flex flex-col space-y-10 justify-center items-center bg-white h-screen'>
        <div className="flex space-x-2">
          <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-5 w-5 bg-black rounded-full animate-bounce'></div>
        </div>
        <button onClick={cancelRequest} className="bg-red-500 hover:bg-red-400">Cancelar</button>
      </div>
    </main>
    )
  }
  if(error){
    return( 
      <main className="flex justify-center items-center  h-screen">
        <div className="flex flex-col justify-center space-y-2" >
          <div className="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <h3 className="font-bold">Hubo un error al realizar la consulta</h3>
          </div>
          <button onClick={fetchData} className="bg-cyan-800 hover:bg-cyan-500">Volver a Intentar</button>
      </div>
      </main>
    )
  }
  return  (
  <main className="p-5 flex flex-col space-y-10  w-screen">
      <form onSubmit={onSubmitForm} className="mx-auto flex flex-col max-w-sm items-center gap-y-2 rounded-xl bg-blue-100 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
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
        <button type="submit" className="bg-cyan-800 hover:bg-cyan-500">Agregar Libro</button>
        </form>
      <BookList books={book} deleteBook={deleteBook} />

  </main>);
  
}

export default App
