import "../styles/card.css"
import { Card } from "./Card";
import { type TaskInterface } from "../model/taskModel";

interface TaskListProps{
  tareas: TaskInterface[];
  borrarFunction(id:number):void ;
}

export const TaskList = ({borrarFunction,tareas}:TaskListProps) =>{
  
    const cards = tareas.map((tarea)=>{
        return (
          <Card key={tarea.id}>
            <h3>{tarea.title}</h3>
            <p>{tarea.content}</p>
            <span>{tarea.status}</span>
            <button onClick={() => borrarFunction(tarea.id)}>Eliminar</button>
            </Card>
        )
    }) 

    return (
        <div className="cardContainer">
            {cards}
        </div>
    )
    

}