import React, { useState } from "react";
import './TodoApp.css';
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const addTask = (e) => {
    if (task !== ""){
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false
      }
      setTasks([...tasks, taskDetails]);
    }
    e.target.previousElementSibling.value = "";
  }

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completedTask = (e, id) => {
    e.preventDefault();
    const index = tasks.findIndex(task => task.id === id);
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index], isCompleted: true
    }
    setTasks(newTasks)
  }
  

  return (
    <div className="todo">
      <input onChange={handleChange}type="text" name="text" id="text" placeholder="Add task here..."></input>
      <button onClick={addTask}className="add-btn">Add</button>
      {tasks !== [] ? 
      <ul>
        {tasks.map(task => {
           return (
             <li className={task.isCompleted ? "crossText" : "listitem"}>
               {task.value}
               <button onClick={e => deleteTask(e, task.id)} className="delete">Delete</button>
               <button onClick={e => completedTask(e, task.id)}className="completed">Completed</button>
             </li>
           );
           
                
        })}
      </ul>
      : null}
    </div>
  )
}
export default TodoApp;