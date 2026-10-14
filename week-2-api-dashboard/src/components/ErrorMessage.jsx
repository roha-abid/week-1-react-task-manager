function ErrorMessage({ message, onRetry }) {
  return (
    <div className="state-box error" role="alert">
      <p>Something went wrong: {message}</p>
      {onRetry && (
        <button className="btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
