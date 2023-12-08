// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import CardProduct from './product/CardProduct';
import Pagination from './Pagination';

export const productsPerPage = 6;

const ProductList = ({ products, currentPage, nextPage, prevPage, goToFirstPage, productsPerPage }) => {

  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://174.129.92.139:8001/api/v1/products?page=${currentPage}&order=random`);
        const data = await response.json();
        setTotalPages(data.totalPages);
        setPageSize(data.pageable.pageSize);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);
  // useEffect(() => {
  //   setTotalPages();
  // }, [products, productsPerPage]);

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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToFirstPage={goToFirstPage}
        productsPerPage={pageSize}
      />
    </div>
  );
};

export default ProductList;

