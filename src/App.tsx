import { TaskList } from "./components/TaskList";
import { type TaskInterface } from "./model/taskModel";
import { useState } from "react"

const initialTarea: TaskInterface[] = [
  {
    id:1,
    title:"Tarea 1",
    status:"Pendiente",
    content:"Contenido tarea 1",
  },
  {
    id:2,
    title:"Tarea 2",
    status:"Pendiente",
    content:"Contenido tarea 2",
  },
  {
    id:3,
    title:"Tarea 3",
    status:"Pendiente",
    content:"Contenido tarea 3",
  }
]

function App() {

  const [tareas, setTarea] = useState<TaskInterface[]>(initialTarea)
  const [titleField, setTitle] = useState<string>("")
  const [contentField, setContent] = useState<string>("")
  const borrarTarea = (id:number) =>{setTarea((prev) =>{
    return prev.filter(tarea => tarea.id !== id)
  })}

  
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }

  return  (
  <main>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" value={titleField} onChange={e => {setTitle(e.target.value)}}/>
        <label htmlFor="content">Descripción</label>
        <input type="text" name="content" id="content" value={contentField} onChange={e => {setContent(e.target.value)}}/>
        <button type="submit">Agregar Tarea</button>
      </form>
      <TaskList borrarFunction={borrarTarea} tareas={tareas}/>
  </main>);
  
}

export default App
