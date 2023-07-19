import React, { useState, useEffect } from "react";
import ProductForm from "./Productform";
import ProductList from "./Productlist";

const Input = () => {
  const [submitData, setSubmitdata] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      setSubmitdata(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(submitData));
  }, [submitData]);

  const handleAddProduct = ({ id, productName, price }) => {
    setSubmitdata((prevdata) => [
      ...prevdata,
      {
        id: id,
        productName: productName,
        price: price,
      },
    ]);
  };

  const handleDeleteProduct = (index) => {
    setSubmitdata((prevdata) => prevdata.filter((_, i) => i !== index));
  };

  // Calculate total product price
  const totalProductPrice = submitData.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  return (
    <div>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={submitData} onDeleteProduct={handleDeleteProduct} />
      <h1>Total Product Price is: {totalProductPrice}</h1>
    </div>
  );
};

export default Input;


