function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`task-item${task.completed ? ' is-complete' : ''}`}>
      <input
        type="checkbox"
        className="task-check"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        aria-label="Mark task complete"
      />
      <p className="task-text">{task.text}</p>
      <button
        type="button"
        className="icon-btn danger"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
