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
        <div className='image-wrapper'>
          <img
            className="bg-cover w-full rounded-[5px]"
            src={productDetail.image}
            alt=""
          />
        </div>
        <div className="details">
          <p className="font-bold text-4xl">{productDetail.title}</p>
          <p className="font-medium text-2xl">{productDetail.category}</p>
          <p>{productDetail.description}</p>
          <button className="bg-[#2664ec] w-[8rem] h-[3rem] text-white rounded-[2rem] text-xl font-bold mt-[2rem]">
            ${productDetail.price}
          </button>
          <button className="bg-[#2664ec] h-[3rem] text-white rounded-[25rem] py-10 px-8 text-xl mt-[2rem] flex items-center gap-20">
            <p>+</p>
            <p>Add To Cart</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail