import React from "react";
import "./list.css";
const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div>
      <h2>Product List:</h2>
      <div>
        {products.map((data, index) => (
          <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
            <span>
              Product Id: {data.id}, Product Name: {data.productName}, Product Price: {data.price}
            </span>
            <button onClick={() => onDeleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

