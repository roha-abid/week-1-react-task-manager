function SearchFilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search products"
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="all">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchFilterBar
