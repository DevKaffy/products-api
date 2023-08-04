import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainProduct from '../../Components/MainProduct/MainProduct';
import Layout from '../../Components/Layout/Layout';
import SideBarItems from '../../Components/SideBar/SideBarItems';

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
    <Layout>
      <div className='grid grid-cols-2'>
    <SideBarItems />
    <div className="app">
      <MainProduct products={products} />
    </div>
      </div>
    </Layout>
  );
}

export default Home