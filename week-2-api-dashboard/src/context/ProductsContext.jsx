import { createContext, useContext, useEffect, useState } from 'react'
import {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
} from '../api/products.js'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  // Fetch the product list when the app loads (and when "Try again" is clicked)
  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError('')
      try {
        const data = await getProducts(controller.signal)
        setProducts(data)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort() // cleanup
  }, [reloadKey])

  function reload() {
    setReloadKey((k) => k + 1)
  }

  // The fake API does not save changes, so we also update our local state
  async function addProduct(data) {
    const created = await createProduct(data)
    // the API always returns the same id for new items, so give ours a unique one
    const withUniqueId = { ...created, id: Date.now() }
    setProducts((prev) => [withUniqueId, ...prev])
    return withUniqueId
  }

  async function updateProduct(id, changes) {
    const isLocalOnly = id > 1000 // items we created locally do not exist on the server
    const updated = isLocalOnly ? changes : await updateProductById(id, changes)
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated, id } : p))
    )
  }

  async function deleteProduct(id) {
    if (id <= 1000) await deleteProductById(id)
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const value = {
    products,
    loading,
    error,
    reload,
    addProduct,
    updateProduct,
    deleteProduct,
  }

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts must be used inside ProductsProvider')
  return ctx
}
