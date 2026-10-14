function Loader({ message = 'Loading...' }) {
  return (
    <div className="state-box" role="status">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  )
}

export default Loader
