import { useState } from "react";
import type { TaskInterface } from "../model/taskModel";

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

export function useTask(){
    const [tareas, setTarea] = useState<TaskInterface[]>(initialTarea)

    const borrarTarea = (id:number) =>{setTarea((prev) =>{
        return prev.filter(tarea => tarea.id !== id)
    })}
    const addTask = (title:string, content:string) => {
    setTarea( (prev)=>{
      prev.reduce((lastId, task)=>(task.id>lastId ? task.id ?? 0 : lastId),0 )
    })
    const tarea: TaskInterface = {
      id:4,
      title:title,
      content:content,
      status: "Pendiente,"
    }
    setTarea((prev)=>[...prev, tarea])

    }

    return {tareas, borrarTarea, addTask}

}

