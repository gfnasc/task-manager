import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


function TasksList({ tasks, toggleTask, deleteTask }) {
  const navigate = useNavigate()

  function toogleDetails(task) {
    const query = new URLSearchParams({ name: task.name, description: task.description }).toString()
    navigate(`/task?${query}`)
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">There are no tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button onClick={() => toggleTask(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.completed ? "line-through" : ""}`}>
              {task.name}
            </button>
            <button onClick={() => toogleDetails(task)} className="bg-blue-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-2 rounded-md">
              <TrashIcon />
            </button>
          </li>
        ))
      )}
    </ul>
  )
}

export default TasksList