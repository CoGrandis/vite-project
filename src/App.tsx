import { TaskList } from "./components/TaskList";
import { useState } from "react"
import { useTask } from "./hooks/useTask";

function App() {

  const { tareas, borrarTarea, addTask } = useTask();
  const [titleField, setTitle] = useState<string>("")
  const [contentField, setContent] = useState<string>("")

  
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addTask(titleField, contentField);
    setTitle("");
    setContent("");
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
