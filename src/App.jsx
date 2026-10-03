import { useState } from 'react'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    const newTask = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      text,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="page">
      <Header taskCount={tasks.length} />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
