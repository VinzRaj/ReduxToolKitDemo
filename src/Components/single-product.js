import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SingleProduct = () => {
  debugger;
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    return (
      <Link to={`product/${product.id}`}>
        <div key={product.id}>
          <h4>{product.title}</h4>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};
