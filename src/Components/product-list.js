import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/actions';
import { useEffect } from 'react';
import { SingleProduct } from './single-product';

export const ProductList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => dispatch(setProducts(result)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  });
  return <SingleProduct />;
};
