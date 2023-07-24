import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, title, imageUrl, price}) => {
  const navigate = useNavigate();
  return (
    <div className='product-card'>
        <div className='image'>
            <img src={imageUrl} alt={title}  
            onClick={() => navigate(`/${id}`)}/>
        </div>
        <div className='paragraphs'>
            <p className='title'>{title}</p>
            <p className='price'>Price: {price}</p>
        </div>
    </div>
  )
}

export default ProductCard