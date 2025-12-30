function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Product List</h3>

      {products.slice(0, 5).map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => onSelectProduct(product)}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
