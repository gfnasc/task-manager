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

    return (
        <div className="w-screen h-screen bg-slate-500 p-6 flex">
            <div className="flex flex-col gap-5 w-[500px]">
                <h1 className="text-3xl text-center text-slate-100 font-bold text-centetr">Gerenciador de Tarefas</h1>
                <AddTask />
                <TasksList tasks={tasks} toggleTask={toggleTask} />
            </div>
        </div>
    )
}

export default App