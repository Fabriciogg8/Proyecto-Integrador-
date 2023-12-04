import { useState, useEffect, useContext } from "react";
import Buscador from "../components/buscador/Buscador";
import { Container } from "react-bootstrap";

import ProductList from '../components/ProductList'
import { ProductContext } from '../conexts/ProductContext';
import '../styles/Buscador-Search-Results.css'

export const productsPerPage = 6;

const SearchResults = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const { state, findProductsByName } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        if(searchTitle) {
            findProductsByName(searchTitle);
        }
    }, [searchTitle])

    
    useEffect(() => {
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);
        const searchName = queryParams.get('name');
        setSearchTitle(searchName);
    }, )
    
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

      const totalPages = Math.ceil(state.searchResults.length / productsPerPage);

    return(
        <div className="search-results-page">
            <Buscador />
            <Container>
            <div>
                <div className="search-results-title-wrapper">
                   <span className="search-results-title"><h4>Resultados para:</h4> {searchTitle}</span>
                </div>
            {state.searchResults.length > 0 ? 
                (<div className='container d-flex justify-content-center align-items-center h-100'>
                <ProductList products={state.searchResults}  
                    totalPages={totalPages}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    goToFirstPage={goToFirstPage}
                    productsPerPage={productsPerPage}
                />
            </div>)
             :
                (<div className="no-results-found-wrapper">
                    <p className="no-results-found-text">No se encontraron resultados para esta búsqueda</p>
                </div>)
            
            } 
            </div>
            </Container>
        </div> 
    );
}

export default SearchResults;