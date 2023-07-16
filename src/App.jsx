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

  return (
    <>
      <Header onAddTask={addTask}></Header>
      <Tasks tasks={tasks}></Tasks>
    </>
  )

}

export default App
