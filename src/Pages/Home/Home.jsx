import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainProduct from '../../Components/MainProduct/MainProduct';
import Layout from '../../Components/Layout/Layout';
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar';
import RightBar from '../../Components/RightBar/RightBar';

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
      <div className='main-wrapper'>
    <SideBar />
    <div className="app">
      <MainProduct products={products} />
    </div>
    <RightBar/>
      </div>
    </Layout>
  );
}

export default Home