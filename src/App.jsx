import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask.jsx";
import { useState } from "react";
import { v4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([])

  function toggleTask(taskId) {
    const newtasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task,
          completed: !task.completed
        }
      }
      return task
    })
    setTasks(newtasks)
  }

  function deleteTask(taskId) {
    const newtasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newtasks)
  }

  function addtask(title, description) {
    if (!title.trim() || !description.trim()) {
      return alert('Fill in the fields correctly!')
    } else {
      const newTask = {
        name: title,
        description: description,
        completed: false,
        id: v4()
      }
      setTasks([...tasks, newTask])
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-800 p-6 flex">
      <div className="flex flex-col gap-5 w-[500px]">
        <h1 className="text-3xl text-center text-slate-100 font-bold text-centetr">Task Manager</h1>
        <AddTask addTask={addtask} />
        <TasksList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App