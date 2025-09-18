import {useState} from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function clearForm() {
    setTitle("")
    setDescription("")
  }
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="border rounded-md border-slate-600 outline-slate-400 px-4 py-2" placeholder="Enter the task name" />
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} className="border rounded-md border-slate-600 outline-slate-400 px-4 py-2" placeholder="Enter the task description"/>
      <button onClick={() => { addTask(title, description); clearForm() }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Add</button>
    </div>
  )
}

export default AddTask