import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext.jsx'
import { getProductById } from '../api/products.js'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

function ProductDetailPage() {
  const { id } = useParams()
  const productId = Number(id)
  const { products } = useProducts()
  const fromList = products.find((p) => p.id === productId)

  const [fetched, setFetched] = useState(null)
  const [loading, setLoading] = useState(!fromList)
  const [error, setError] = useState('')

  useEffect(() => {
    if (fromList) return // already have it, no request needed
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError('')
      try {
        setFetched(await getProductById(productId, controller.signal))
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [productId, fromList])

  const product = fromList || fetched

  if (loading) return <Loader message="Loading product..." />
  if (error) return <ErrorMessage message={error} />
  if (!product) return <ErrorMessage message="Product not found" />

  return (
    <section className="detail">
      <Link to="/" className="back-link">
        &larr; Back to products
      </Link>
      <div className="detail-layout">
        {product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
        <div>
          <h2>{product.title}</h2>
          <p className="muted">
            {product.category}
            {product.brand ? ` · ${product.brand}` : ''}
          </p>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          {product.rating !== undefined && <p>Rating: {product.rating} / 5</p>}
          {product.stock !== undefined && <p>In stock: {product.stock}</p>}
          <Link className="btn" to={`/products/${product.id}/edit`}>
            Edit product
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailPage
