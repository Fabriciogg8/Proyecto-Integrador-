// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CardProduct from './product/CardProduct';
import Pagination from './Pagination';

export const productsPerPage = 10;

const ProductList = ({ products, currentPage, nextPage, prevPage, goToFirstPage }) => {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(products.length / productsPerPage));
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className='row cardsContainers'>
        {currentProducts.map(instrumento => (
          <CardProduct
            key={instrumento.id}
            id={instrumento.id}
            name={instrumento.name}
            price={instrumento.price}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToFirstPage={goToFirstPage}
      />
    </div>
  );
};

export default ProductList;
