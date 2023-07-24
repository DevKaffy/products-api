import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './ProductDetail.css'

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
    <>
    <div className='product-detail'>
    <div className='w-full'>
      <img className='bg-cover' src={productDetail.image} alt="" />
    </div>
    <div>
      <p>{productDetail.title}</p>
      <p>{productDetail.category}</p>
      <p>{productDetail.description}</p>
      <p>Price: {productDetail.price}</p>
    </div>
    </div>
    </>
  )
}

export default ProductDetail