import { useState } from "react"
import Header from "./components/Header/Header"
import Tasks from "./components/Tasks/Tasks"


function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  const deleteTaskbyId = (taskId) => {
    const newTask = tasks.filter(task => task.id != taskId)
    setTasks(newTask)
  }

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map( task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}></Header>
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskbyId}></Tasks>
    </>
  )

}

export default App
