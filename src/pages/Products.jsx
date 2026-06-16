import "../styles/Products.css";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "Rs 99",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "Rs 149",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 3,
      name: "Laptop",
      price: "Rs 899",
      image: "https://via.placeholder.com/250"
    },
  ];

  return (
    <div>
      <h1>Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;