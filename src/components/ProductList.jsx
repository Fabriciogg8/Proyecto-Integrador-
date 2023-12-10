// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CardProduct from './product/CardProduct';

export const productsPerPage = 10;

const ProductList = ({ products, currentPage}) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(currentProducts);
  return (
    <div>
      <div className='row cardsContainers'>
        {products.map(instrumento => {
          const imagen =
            instrumento.images && instrumento.images.length > 0 
              ? instrumento.images[0]
              : null
          return (
            <CardProduct
              key={instrumento.id}
              id={instrumento.id}
              name={instrumento.name}
              price={instrumento.price}
              image={imagen}
              
            />
          )
        })}
      </div>
    </div>
  );
};

export default ProductList;

