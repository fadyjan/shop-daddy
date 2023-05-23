import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { goToNextPage, goToPreviousPage } from '../../reduxStore/store';

import modules from "../ProductsGrid/ProductsGrid.module.css";
import ProductCard from "../ProductCard/ProductCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
const ProductsGrid = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(goToNextPage());
    }, [dispatch]);



  return (
    <div id={modules.ProductsGrid}>
      {products.products ?
        products.products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        }) : <LoadingSpinner></LoadingSpinner>}
    </div>
  );
};

export default ProductsGrid;
