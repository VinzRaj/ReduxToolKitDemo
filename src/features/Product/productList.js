import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './productSlice';

export const ProductList = () => {
  const products = useSelector((state) => {
    return state.products.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <p>{product.title}</p>;
      })}
    </div>
  );
};
