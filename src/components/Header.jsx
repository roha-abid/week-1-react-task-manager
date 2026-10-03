function Header({ taskCount }) {
  return (
    <header className="app-header">
      <h1>Ledger</h1>
      <p className="app-sub">
        A running list of what needs doing.{' '}
        {taskCount > 0 && <span className="count-pill">{taskCount} total</span>}
      </p>
    </header>
  )
}

export default Header
