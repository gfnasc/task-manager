import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask.jsx";
import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Task 1",
      description: "Description for Task 1",
      completed: false,
      id: 1
    },
    {
      name: "Task 2",
      description: "Description for Task 2",
      completed: true,
      id: 2
    },
    {
      name: "Task 3",
      description: "Description for Task 2",
      completed: true,
      id: 3
    }
  ])

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
    if (!title || !description) {
      return alert('Preencha os campos corretamente!')
    } else {
      const newTask = {
        name: title,
        description: description,
        completed: false,
        id: tasks.length + 1
      }
      setTasks([...tasks, newTask])
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-800 p-6 flex">
      <div className="flex flex-col gap-5 w-[500px]">
        <h1 className="text-3xl text-center text-slate-100 font-bold text-centetr">Gerenciador de Tarefas</h1>
        <AddTask addTask={addtask} />
        <TasksList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App