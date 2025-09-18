import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask.jsx";

function App() {
    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <AddTask />
            <TasksList />
        </div>
    )
}

export default App