import React from 'react'
import './MainProduct.css'
import ProductCard from '../ProductCard/ProductCard'

const MainProduct = ({product}) => {
  return (
    <div className='main-product'>
        {
            product.map((product)=>
            <ProductCard product={product}
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            desc={product.description}
            price={product.price}
            />
            )
        }
    </div>
  )
}

export default MainProduct