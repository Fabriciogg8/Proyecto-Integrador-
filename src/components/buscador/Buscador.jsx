import '../../styles/Buscador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMusic, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect, useContext } from 'react';
import Calendario from './Calendario';
import { ProductContext } from '../../conexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {

  const [showSearchButton, setShowSearchButton] = useState(false);
  const { state, dispatch, findProductsByName } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const searchContainerHeight = document.querySelector('.search-bar').offsetHeight;
      if (scrollPosition > searchContainerHeight) {
        setShowSearchButton(true);
      } else {
        setShowSearchButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch =  (e) => {
    e.preventDefault();
    findProductsByName(state.searchInput); 
    navigate(`/resultados?name=${state.searchInput}`);
    
  };

  const setSearchInput = (name) => {
    dispatch({type: "searchInput", payload: name});
    // await getSuggestions(name);
   
  }

  // TODO : suggestions
  // const handleSuggestionClick = (suggestion) => {
  // };

  
  // const renderSuggestions = () => {
  //   if (!state.suggestions || state.suggestions.length === 0) {
  //     return null;
  //   }

  //   return (
  //     <ul>
  //       {state.suggestions.map((suggestion) => (
  //         <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
  //           {suggestion.name}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <>
      <div className='search-bar-wrapper'>
        <div className='search-bar'>
          <div className='container'>
            <h5 className='search-bar-title'>Encuentra los instrumentos adecuados para tu melodía</h5>
            <form className="form-inline" onSubmit={(e) =>handleSearch(e)}>
              <div className="row">
                <div className="col-xs-12 col-sm-6 input-field-wrapper">
                  <label htmlFor="search-instrumento">
                    <span className='search-bar-label'>Instrumento</span>
                  </label>

                  <div className='input-wrapper'>
                    <span>
                      <FontAwesomeIcon icon={faMusic} />
                    </span>                                                     
                    <input type="text" className="form-control form-control-lg" id='search-instrumento' placeholder="El instrumento que buscas"  value={state.searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
                     
                  </div>
                </div>
                <div className='col-xs-12 col-sm-3 datepicker-wrapper'>
                  <label>
                    <span className='search-bar-label'>Fecha</span>
                  </label>
                  <div className='input-wrapper'>
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <Calendario /> 
                  </div>
                </div>
                <div className='col-xs-12 col-sm-3 button-wrapper'>
                  <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faSearch} />Buscar
              </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Buscador;

