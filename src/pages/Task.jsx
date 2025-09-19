import {useNavigate, useSearchParams} from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react";

function Task() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const name = searchParams.get("name")
  const description = searchParams.get("description")

  return (
    <div className="w-screen h-screen bg-gray-800 p-6 flex">
      <div className="flex flex-col gap-5 w-[500px]">
        <div className="flex gap-4">
          <button onClick={() => navigate(-1)} className="bg-blue-400 text-white p-2 rounded-md">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-center text-slate-100 font-bold text-centetr">Task Details</h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-slate-800 font-bold">{name}</h2>
          <p className="text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Task
