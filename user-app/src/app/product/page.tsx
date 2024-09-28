"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/api/products";
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="container mx-auto">
      {" "}
      <h1>Products</h1>
      {products &&
        products.length > 0 &&
        products.map((user: any) => (
          <div key={user.id} className="my-4 bg-white rounded-2xl p-2">
            <p className="text-black">Name: {user.name}</p>
            <p className="text-black">Price: {user.price}</p>
            <p className="text-black">Stock: {user.stock}</p>x{" "}
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
