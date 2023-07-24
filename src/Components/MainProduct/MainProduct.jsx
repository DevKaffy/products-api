import React from 'react'
import './MainProduct.css'
import ProductCard from '../ProductCard/ProductCard'

const MainProduct = ({product}) => {
  return (
    <div className='main-product'>
        {
            product.map((product, index)=>
            <ProductCard product={product}
            key= {`product - ${index}`}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            />
            )
        }
    </div>
  )
}

export default MainProduct