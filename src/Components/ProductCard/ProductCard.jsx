import React, { useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { truncateString } from '../utils'

const ProductCard = ({id, title, imageUrl, price}) => {
  const navigate = useNavigate();
  const [fullString, setFullString] = useState(false)
  return (
    <div>
      <div className="product-card" onClick={() => navigate(`/${id}`)}>
        <div className="image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="paragraphs">
          <p className="title">{fullString === false ? truncateString(title): title}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard