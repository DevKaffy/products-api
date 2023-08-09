import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, title, imageUrl, price}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-card" onClick={() => navigate(`/${id}`)}>
        <div className="image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="paragraphs">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard