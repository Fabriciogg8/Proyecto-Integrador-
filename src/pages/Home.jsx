
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardCategory from '../components/product/CardCategory';
import Buscador from '../components/buscador/Buscador';
import BrandSlider from '../components/buscador/BrandSlider';
import { ProductContext } from '../conexts/ProductContext';
import ProductList, { productsPerPage } from '../components/ProductList';
import '../styles/Home.css';
import Hero from '../components/hero/Hero';
import WhatsappButton from '../components/WhatsappButton';

const Home = () => {
  const { state, fetchProducts } = useContext(ProductContext);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch para obtener categorías
        const responseCategorias = await fetch("http://174.129.92.139:8001/api/v1/categories");
        const categoriasData = await responseCategorias.json();
        setCategorias(categoriasData);

        // Fetch para obtener productos
        await fetchProducts();
      } catch (error) {
        console.error("Error al obtener categorías y productos:", error);
      }
    };

    fetchData();
  }, [fetchProducts]);

  useEffect(() => {
    // Verifica si state.products está definido antes de intentar acceder a él
    if (state.products) {
      // Obtener categorías únicas de los productos
      const uniqueCategories = Array.from(
        new Set(state.products.map((producto) => producto.category.name))
      ).filter(Boolean); // Filtra las categorías sin nombre

      // Crear un array de objetos de categoría con la cantidad de productos por categoría
      const categoriasConCantidad = uniqueCategories.map((categoria) => ({
        name: categoria,
        count: state.products.filter(
          (producto) => producto.category.name === categoria
        ).length,
      }));

      // Actualizar el estado con las categorías y la cantidad de productos
      setCategorias(categoriasConCantidad);

      // Actualizar el estado con los productos
      setProductos(state.products);
    }
  }, [state.products]);

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

  // Filtra los productos solo si hay categorías seleccionadas
  const filteredProducts = selectedCategories.length > 0
    ? productos.filter((producto) =>
        selectedCategories.includes(producto.category.name)
      )
    : productos;
  
  const [currentPage, setCurrentPage] = useState(1);
  const instrumentos = state.products
  
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

  const totalPages = Math.ceil(productos.length / productsPerPage);

  return (
    <>
      <Hero />
      <Buscador />
      <Container>
        <Row className='justify-content-start flex-wrap'>
          {categorias.length
            ? categorias.map((categoria) => (
                <CardCategory
                  key={categoria.name}
                  name={categoria.name}
                  onClick={() => handleCategoryClick(categoria.name)}
                />
              ))
            : null}
        </Row>

        {selectedCategories.length > 0 && (
          <button className="botonFiltro" onClick={clearFilters}>
            Limpiar Filtros
          </button>
        )}

        <p className='leyendaFiltros'>
          Productos filtrados: {filteredProducts.length} / Total: {productos.length}
        </p>

        {filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            currentPage={1}
            nextPage={nextPage}
            prevPage={prevPage}
            goToFirstPage={goToFirstPage}
            productsPerPage={productsPerPage}
          />
        ) : (
          <p className='leyendaFiltros'>No existen productos para las categorías seleccionadas.</p>
        )}

        <BrandSlider />
        <WhatsappButton />
      </Container>
    </>
  );
};

export default Home;
