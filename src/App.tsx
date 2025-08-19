import { BookList } from "./components/BookList";
import { useBookContext } from "./context/bookContext";


interface AppProps {
    children?: React.ReactNode
}
function App({children}:AppProps) {

  const {book, deleteBook,fetchData, loading, error, cancelRequest} = useBookContext();
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
      {children}
      <BookList books={book} deleteBook={deleteBook} />

  </main>);
  
}

export default App
