import { Link } from 'react-router-dom'

function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="muted">{product.category}</p>
        <p className="price">${product.price}</p>
        <div className="card-actions">
          <Link className="btn btn-small" to={`/products/${product.id}`}>
            View
          </Link>
          <Link className="btn btn-small" to={`/products/${product.id}/edit`}>
            Edit
          </Link>
          <button
            className="btn btn-small btn-danger"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
