import { ChevronRightIcon, TrashIcon } from "lucide-react";

function TasksList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">Não há tarefas a serem exibidas.</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button onClick={() => toggleTask(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.completed ? "line-through" : ""}`}>
              {task.name}
            </button>
            <button className="bg-blue-400 text-white p-2 rounded-md">
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