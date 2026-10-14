import { useState } from 'react'
import { useProducts } from '../context/ProductsContext.jsx'
import SearchFilterBar from '../components/SearchFilterBar.jsx'
import ProductList from '../components/ProductList.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'

function ProductsPage() {
  const { products, loading, error, reload, deleteProduct } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [actionError, setActionError] = useState('')

  if (loading) return <Loader message="Loading products..." />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const categories = [...new Set(products.map((p) => p.category))]

  const visible = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.trim().toLowerCase())
    const matchesCategory = category === 'all' || p.category === category
    return matchesSearch && matchesCategory
  })

  async function handleDelete(id) {
    if (!window.confirm('Delete this product?')) return
    setActionError('')
    try {
      await deleteProduct(id)
    } catch (err) {
      setActionError(err.message)
    }
  }

  return (
    <section>
      <h2>Products ({visible.length})</h2>
      <SearchFilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      {actionError && <p className="form-error">{actionError}</p>}
      {visible.length === 0 ? (
        <EmptyState message="No products found. Try a different search or filter." />
      ) : (
        <ProductList products={visible} onDelete={handleDelete} />
      )}
    </section>
  )
}

export default ProductsPage
