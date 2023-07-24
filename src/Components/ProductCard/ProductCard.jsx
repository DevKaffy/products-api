import React from 'react'
import './ProductCard.css'

const ProductCard = ({id, title, imageUrl, desc, price}) => {
  return (
    <div className='product-card'>
        <div className='image'>
            <img src={imageUrl} alt="" />
        </div>
        <div className='paragraphs'>
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
            <p className='price'>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard