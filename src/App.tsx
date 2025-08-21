import { BookList } from "./components/BookList";
import { useBook } from "./hooks/useBook";
import { useEffect, useState } from "react";
function App() {
  const [debounceSearch, setDebounceSearch] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const {fetchData, cancelRequest} = useBook(debounceSearch);
  const { data, isPending, isError, refetch } = fetchData;

  useEffect(()=>{
    const handler = setTimeout(()=>{
        setDebounceSearch(search)
    }, 1000)
    return () =>{
      clearTimeout(handler)
    };
  },[search])

  useEffect(()=>{
    if(debounceSearch){
      console.log(debounceSearch)
    }
  },[debounceSearch])


  if (isPending) {
    return( 
    <main>
      <div className='flex flex-col space-y-10 justify-center items-center bg-white h-screen'>
        <div className="flex space-x-2">
          <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-5 w-5 bg-black rounded-full animate-bounce'></div>
        </div>
        <button  onClick={cancelRequest} className="bg-red-500 hover:bg-red-400">Cancelar</button>
      </div>
    </main>
    )
  }
  if(isError){
    return( 
      <main className="flex justify-center items-center  h-screen">
        <div className="flex flex-col justify-center space-y-2" >
          <div className="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <h3 className="font-bold">Hubo un error al realizar la consulta</h3>
          </div>
          <button onClick={() => refetch()} className="bg-cyan-800 hover:bg-cyan-500">Volver a Intentar</button>
      </div>
      </main>
    )
  }
  return  (
  <main className="p-5 flex flex-col space-y-10  w-screen">
    <div className="">
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-white p-2 border border-black rounded-3xl"/>
    </div>
    <BookList books={data ?? []} deleteBook={() => {}} />

  </main>);
  
}

export default App
