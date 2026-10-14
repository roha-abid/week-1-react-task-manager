import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className="navbar">
      <span className="brand">Product Dashboard</span>
      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/add" className={linkClass}>
          Add Product
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
