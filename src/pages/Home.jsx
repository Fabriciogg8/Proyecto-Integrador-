
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import CardCategory from '../components/product/CardCategory'
import Buscador from '../components/buscador/Buscador'
import BrandSlider from '../components/buscador/BrandSlider'
import { ProductContext } from '../conexts/ProductContext'
import ProductList, { productsPerPage } from '../components/ProductList';
import '../styles/Home.css';
import Hero from '../components/hero/Hero'
import WhatsappButton from '../components/WhatsappButton'

const Home = () => {
  const { state, fetchProducts } = useContext(ProductContext);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const instrumentos = state.products

  

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
    // Verifica si la categoría ya está seleccionada
    if (selectedCategories.includes(categoryName)) {
      // Si ya está seleccionada, quítala
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((category) => category !== categoryName)
      );
    } else {
      // Si no está seleccionada, agrégala
      setSelectedCategories((prevSelected) => [...prevSelected, categoryName]);
    }
  };

  const clearFilters = () => {
    // Limpiar los filtros reiniciando el estado de las categorías seleccionadas
    setSelectedCategories([]);
  };

  // Filtra los productos según las categorías seleccionadas
  const filteredProducts = selectedCategories.length > 0
  ? instrumentos.filter((producto) =>
      producto.categories && producto.categories.some((category) =>
        selectedCategories.includes(category)
      )
    )
  : instrumentos;

  const totalProductsCount = instrumentos.length;
  const filteredProductsCount = filteredProducts.length;

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
    <>
    <Hero />
    <Buscador />
      <Container>
        <Row className='justify-content-start flex-wrap'>
          {categorias.length
            ? categorias.map((categoria) => (
                <CardCategory key={categoria.id} name={categoria.name} onClick={handleCategoryClick} />
              ))
            : null}
        </Row>
      
      {selectedCategories.length > 0 && (
        <button className="botonFiltro" onClick={clearFilters}>Limpiar Filtros</button>
      )}

      <p className='leyendaFiltros'>
        Productos filtrados: {filteredProductsCount} / Total: {totalProductsCount}
      </p>

      {filteredProducts.length > 0 ? (
        <ProductList
          products={filteredProducts}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          goToFirstPage={goToFirstPage}
          productsPerPage={productsPerPage}
        />
      ) : (
        <p className='leyendaFiltros'>No existen productos para las categorías seleccionadas.</p>
      )}

      <BrandSlider />
      <WhatsappButton/>
    </Container>
  </>
  );
};

export default Home;

