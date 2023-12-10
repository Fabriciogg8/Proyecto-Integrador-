import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardCategory from '../components/product/CardCategory';
import Buscador from '../components/buscador/Buscador';
import BrandSlider from '../components/buscador/BrandSlider';
import { ProductContext } from '../conexts/ProductContext';
import ProductList, { productsPerPage } from '../components/ProductList';
import Pagination from '../components/Pagination';
import '../styles/Home.css';
import Hero from '../components/hero/Hero';
import WhatsappButton from '../components/WhatsappButton'
import { USER_FAVORITES } from '../helpers/endpoints'
import { useAuthStore } from '../hooks/useAuthStore'


const Home = () => {
  const { state, fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productos, setProductos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://174.129.92.139:8001/api/v1/products?page=${currentPage}&order=random`);
        const data = await response.json();
        setProductos(data.content);
        setTotalPages(data.totalPages);
        setPageSize(data.pageable.pageSize);
        } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [currentPage]);
  
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
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <BrandSlider />
      <WhatsappButton/>
    </Container>
  </>
  );
};

export default Home;
