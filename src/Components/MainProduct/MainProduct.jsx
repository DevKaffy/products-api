import React from "react";
import "./MainProduct.css";
import ProductCard from "../ProductCard/ProductCard";
import {  useSearchParams } from "react-router-dom";

const MainProduct = ({ products }) => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="main-product">
      {products
        .filter((product) =>
          tab == "All" || !tab
            ? product
            : product.category.toLowerCase() === tab?.toLowerCase()
        )
        .map((product, index) => (
          <ProductCard
            product={product}
            key={`product - ${index}`}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default MainProduct;
