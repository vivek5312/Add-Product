import React, { useState } from "react";
import "./productform.css";
const ProductForm = ({ onSubmit }) => {
  const [id, setid] = useState("");
  const [productName, setName] = useState("");
  const [price, setPrice] = useState(0);

  const updateId = (event) => {
    setid(event.target.value);
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id, productName, price });
    // Reset the input fields after submitting the form.
    setid("");
    setName("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Id</label>
      <input type="text" value={id} onChange={updateId}></input>
      <label>Product Name</label>
      <input type="text" value={productName} onChange={updateName}></input>
      <label>Product Price</label>
      <input type="number" value={price} onChange={updatePrice}></input><br/>
      <button type="submit" className="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

