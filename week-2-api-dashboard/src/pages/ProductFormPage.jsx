import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

// One page used for both "Add" (no id in the URL) and "Edit" (id in the URL)
function ProductFormPage() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const { products, addProduct, updateProduct } = useProducts()
  const existing = isEdit ? products.find((p) => p.id === Number(id)) : null

  const [title, setTitle] = useState(existing?.title ?? '')
  const [price, setPrice] = useState(existing?.price ?? '')
  const [category, setCategory] = useState(existing?.category ?? '')
  const [description, setDescription] = useState(existing?.description ?? '')
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [saving, setSaving] = useState(false)

  if (isEdit && !existing) {
    return <ErrorMessage message="Product not found. Go back to the list and try again." />
  }

  function validate() {
    const e = {}
    if (!title.trim()) e.title = 'Title is required.'
    if (price === '' || Number(price) <= 0) e.price = 'Enter a price greater than 0.'
    if (!category.trim()) e.category = 'Category is required.'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const data = {
      title: title.trim(),
      price: Number(price),
      category: category.trim(),
      description: description.trim(),
    }

    setSaving(true)
    setSubmitError('')
    try {
      if (isEdit) {
        await updateProduct(existing.id, data)
      } else {
        await addProduct(data)
      }
      navigate('/')
    } catch (err) {
      setSubmitError(err.message)
      setSaving(false)
    }
  }

  return (
    <section className="form-page">
      <h2>{isEdit ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </label>
        <label>
          Price ($)
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <span className="form-error">{errors.price}</span>}
        </label>
        <label>
          Category
          <input value={category} onChange={(e) => setCategory(e.target.value)} />
          {errors.category && <span className="form-error">{errors.category}</span>}
        </label>
        <label>
          Description
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {submitError && <p className="form-error">{submitError}</p>}
        <button className="btn" type="submit" disabled={saving}>
          {saving ? 'Saving...' : isEdit ? 'Save changes' : 'Add product'}
        </button>
      </form>
    </section>
  )
}

export default ProductFormPage
