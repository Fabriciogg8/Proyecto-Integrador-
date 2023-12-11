import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import CardCategory from '../components/product/CardCategory'
import Buscador from '../components/buscador/Buscador'
import BrandSlider from '../components/buscador/BrandSlider'
import { ProductContext } from '../conexts/ProductContext'
import ProductList, { productsPerPage } from '../components/ProductList';
import Pagination from '../components/Pagination';
import '../styles/Home.css';
import Hero from '../components/hero/Hero';
import WhatsappButton from '../components/WhatsappButton'
import { useAuthStore } from '../hooks/useAuthStore'
import { USER_FAVORITES, GET_CURRENT_PRODUCT } from '../helpers/endpoints'

const Home = () => {
  const { state, fetchProducts } = useContext(ProductContext);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // const [selectedCategory, setSelectedCategory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [productos, setProductos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  /*const categorias = [*/
    // ... (código de categorías)
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch("http://174.129.92.139:8001/api/v1/categories");
          const data = await response.json();
          // Actualizar el estado con las categorías obtenidas
          setCategorias(data);
        } catch (error) {
          console.error("Error al obtener categorías:", error);
        }
      };
    
      fetchCategories();
    }, [])

  const handleCategoryClick = (categoryName) => {

    if (selectedCategories.includes(categoryName)) {
  
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((category) => category !== categoryName)
      );
    } else {
      
      setSelectedCategories((prevSelected) => [...prevSelected, categoryName]);
    }
  };

  const clearFilters = () => {
    // Limpiar los filtros reiniciando el estado de las categorías seleccionadas
    setSelectedCategories([]);
  };

  const filteredProducts = selectedCategories.length > 0
  ? productos.filter((producto) =>
      producto.category && selectedCategories.includes(producto.category)
    )
  : productos;

  console.log(filteredProducts)

  const totalProductsCount = productos.length;
  const filteredProductsCount = filteredProducts.length;

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
      {selectedCategories.length > 0 && (
        <button className="botonFiltro text-light" onClick={clearFilters}>Limpiar Filtros</button>
      )}

      <p className='leyendaFiltros text-light'>
        Productos filtrados: {filteredProductsCount} / Total: {totalProductsCount}
      </p>
      <p className='leyendaFiltros text-light'>
        Categorías filtradas: {selectedCategories.join(' - ')}
      </p>

    
        <div className='card-container d-flex flex-row overflow-auto justify-content-start'>
          {categorias.length
            ? categorias.map((categoria) => (
                <CardCategory
                  key={categoria.id}
                  name={categoria.name}
                  img={categoria.img}
                  onClick={handleCategoryClick} 
                />
              ))
            : null}
        </div>
{filteredProducts.length > 0 ? (
  <>
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
  </>
        ) : (
        <p className='leyendaFiltros text-light'>No existen productos para las categorías seleccionadas.</p>)}
      <BrandSlider />
      <WhatsappButton/>
    </Container>
  </>
  );
};

export default Home;