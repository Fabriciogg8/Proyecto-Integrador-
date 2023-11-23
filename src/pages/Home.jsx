// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardCategory from '../components/product/CardCategory';
import Buscador from '../components/buscador/Buscador';
import BrandSlider from '../components/buscador/BrandSlider';
import { ProductContext } from '../conexts/ProductContext';
import ProductList, { productsPerPage } from '../components/ProductList';
import '../styles/Home.css';

const Home = () => {
  const { products, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const instrumentos = products;

  const categorias = [
    // ... (código de categorías)
  ];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(instrumentos.length / productsPerPage);

  return (
    <Container>
      <Buscador />
      <div className='card-container d-flex flex-row overflow-auto justify-content-start'>
        {categorias.length
          ? categorias.map((categoria) => (
              <CardCategory
                key={categoria.id}
                name={categoria.name}
                img={categoria.img}
              />
            ))
          : null}
      </div>

      {/* Asegúrate de pasar productsPerPage a ProductList */}
      <ProductList
        products={instrumentos}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToFirstPage={goToFirstPage}
        productsPerPage={productsPerPage}
      />

      <BrandSlider />
    </Container>
  );
};

export default Home;