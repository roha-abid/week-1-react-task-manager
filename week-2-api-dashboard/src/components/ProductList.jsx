import ProductCard from './ProductCard.jsx'

function ProductList({ products, onDelete }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ProductList
