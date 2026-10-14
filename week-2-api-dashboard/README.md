# AUREX Internship — Month 2, Week 2

**Name:** Roha Abid
**Domain:** Full-Stack Engineering — React.js, REST APIs
**Week:** Month 2, Week 2 — API-Based Product Dashboard

**Live Deployment Link:** https://week-1-react-task-manager-q6ik.vercel.app/

## Project Description

A React dashboard that gets its data from a public REST API (DummyJSON Products) instead of hardcoded data. Users can browse products, search, filter by category, view details, and add, edit and delete products. The app handles loading, error and empty states, and has a responsive layout.

**API used:** `https://dummyjson.com/products`

## Running the Project Locally

```bash
git clone https://github.com/roha-abid/week-1-react-task-manager.git
cd week-1-react-task-manager/week-2-api-dashboard
npm install
npm run dev
```

Open `http://localhost:5173`. No API key or `.env` file is needed.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Implemented API Operations

| Operation | Method | Endpoint |
|-----------|--------|----------|
| List products | GET | `/products?limit=30` |
| Product details | GET | `/products/:id` |
| Add product | POST | `/products/add` |
| Update product | PUT | `/products/:id` |
| Delete product | DELETE | `/products/:id` |

> DummyJSON only simulates POST, PUT and DELETE (it does not save changes). After a successful response the app also updates its own state so the change is visible. A page refresh loads the original data again.

## Features Implemented

* Product list fetched from the API with `useEffect`
* Search by title and filter by category
* Product details page (route with an `id` parameter)
* Add product (POST) and edit product (PUT) using one form with validation
* Delete product (DELETE) with confirmation
* Loading, error (with "Try again") and empty states
* Navigation bar with React Router
* Shared state with the Context API
* Responsive layout

## Component Structure

```text
App
├── Navbar
├── ProductsPage
│   ├── SearchFilterBar
│   ├── Loader / ErrorMessage / EmptyState
│   └── ProductList
│       └── ProductCard
├── ProductDetailPage
└── ProductFormPage   (used for both Add and Edit)
```

## Technologies Used

* React 18
* Vite
* React Router
* Fetch API
* Context API
* Plain CSS

## Project Structure

```text
week-2-api-dashboard/
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── api/products.js
    ├── context/ProductsContext.jsx
    ├── components/
    └── pages/
```

## Learning Outcomes

* How a React app sends requests to a REST API and reads JSON responses
* Why `fetch()` needs a `response.ok` check
* Using `useEffect` with a dependency array and a cleanup function
* Lifting state up and sharing state with the Context API
* Handling loading, error and empty states in the UI
