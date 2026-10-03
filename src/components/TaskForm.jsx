import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function handleChange(e) {
    setText(e.target.value)
    if (error) setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()

    if (trimmed.length === 0) {
      setError('Type something before adding a task.')
      return
    }

    if (trimmed.length > 120) {
      setError('Keep tasks under 120 characters.')
      return
    }

    onAddTask(trimmed)
    setText('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <input
          type="text"
          className="task-input"
          placeholder="What needs to get done?"
          value={text}
          onChange={handleChange}
          maxLength={120}
          autoComplete="off"
        />
        <button type="submit" className="btn btn-add">
          Add task
        </button>
      </div>
      <p className="form-error" role="alert" aria-live="polite">
        {error}
      </p>
    </form>
  )
}

export default TaskForm
