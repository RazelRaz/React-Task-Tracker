import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Tasks from "./components/Tasks/Tasks"

let LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {

  const [tasks, setTasks] = useState([])

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    // console.log(saved);
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  },[])

  const setTasksAndSave = (newTask) => {
    setTasks(newTask)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
  }

  const addTask = (taskTitle) => {
    setTasksAndSave([
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
    setTasksAndSave(newTask)
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
    setTasksAndSave(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}></Header>
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskbyId}></Tasks>
    </>
  )

}

export default App
