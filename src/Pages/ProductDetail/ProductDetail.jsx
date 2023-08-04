import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './ProductDetail.css'
import Layout from '../../Components/Layout/Layout'

const ProductDetail = () => {
    const {id} = useParams()
    console.log("id: ", id)
    const [productDetail, setProductDetail] = useState("")
    console.log(productDetail)
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products/' + id
        );
        const data  = response.data;
        setProductDetail(data)
      } catch (error) {
      console.error("Error fetching products:", error);
    } 
    };
    useEffect(() => {
      fetchProduct();
    }, [id]);
  return (
    <Layout>
      <div className="product-detail">
        <div className="w-full">
          <img
            className="bg-cover rounded-[5px]"
            src={productDetail.image}
            alt=""
          />
        </div>
        <div className="details">
          <p className="font-bold text-4xl">{productDetail.title}</p>
          <p className="font-medium text-2xl">{productDetail.category}</p>
          <p>{productDetail.description}</p>
          <p className="font-bold text-xl">Price: {productDetail.price}</p>
          <button className='bg-blue-600 w-[10rem] h-[3rem] text-white rounded-[5px] mt-[2rem]'>Buy Now</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail