import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardCategory from '../components/product/CardCategory';
import Buscador from '../components/buscador/Buscador';
import BrandSlider from '../components/buscador/BrandSlider';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import '../styles/Home.css';
import Hero from '../components/hero/Hero';
import WhatsappButton from '../components/WhatsappButton'
import { USER_FAVORITES, GET_CURRENT_PRODUCT } from '../helpers/endpoints'
import { useAuthStore } from '../hooks/useAuthStore'


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productos, setProductos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${GET_CURRENT_PRODUCT}?page=${currentPage}&order=random`);
        const data = await response.json();
        setProductos(data.content);
        setTotalPages(data.totalPages);
        } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [currentPage]);
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };


  const categorias = [
    // ... (código de categorías)
  ];
  
  //-------favoritos-------------

  const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])  

 
  return (
    <>
      <Hero />
      <Buscador />
      <Container>
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

        <ProductList
          products={productos}
        />
        <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <BrandSlider />
      <WhatsappButton/>
    </Container>
  </>
  );
};

export default Home;
