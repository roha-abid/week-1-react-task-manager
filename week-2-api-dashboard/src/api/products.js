const BASE_URL = 'https://dummyjson.com/products'

async function request(url, options = {}) {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Request failed (status ${response.status})`)
  }
  return response.json()
}

// GET /products?limit=30
export async function getProducts(signal) {
  const data = await request(`${BASE_URL}?limit=30`, { signal })
  return data.products
}

// GET /products/:id
export function getProductById(id, signal) {
  return request(`${BASE_URL}/${id}`, { signal })
}

// POST /products/add
export function createProduct(product) {
  return request(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
}

// PUT /products/:id
export function updateProductById(id, changes) {
  return request(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(changes),
  })
}

// DELETE /products/:id
export function deleteProductById(id) {
  return request(`${BASE_URL}/${id}`, { method: 'DELETE' })
}
