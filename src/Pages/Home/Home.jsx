import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainProduct from '../../Components/MainProduct/MainProduct';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      let data = res.data;
      setProducts([...products].concat(data));
    });
  }, []);
  console.log(products);

  return (
    <div className="app">
      <MainProduct product={products} />
    </div>
  );
}

export default Home