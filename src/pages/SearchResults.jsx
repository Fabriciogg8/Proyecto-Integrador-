import { useState, useEffect, useContext } from "react";
import Buscador from "../components/buscador/Buscador";
import { Container } from "react-bootstrap";

import ProductList from '../components/ProductList'
import { ProductContext } from '../conexts/ProductContext';
import '../styles/Buscador-Search-Results.css'


const SearchResults = () => {
    const [searchTitle, setSearchTitle] = useState("");
    const { state, findProductsByName } = useContext(ProductContext);
    
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
                <ProductList products={state.searchResults} />
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