import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainProduct from './Components/MainProduct/MainProduct';

const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(()=> {
    axios("https://fakestoreapi.com/products").then((res) => {
      let data = res.data
      setProducts([...products].concat(data))
    });
  }, [])
console.log(products);

  return (
    <div>
      <MainProduct  product={products}/>
    </div>
  )
}

export default App
