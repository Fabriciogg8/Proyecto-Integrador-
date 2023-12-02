import { createContext, useState, useReducer } from 'react'
import { GET_RANDOM_PRODUCTS, GET_CURRENT_PRODUCT } from '../helpers/endpoints'

export const ProductContext = createContext();

export const initialState = { products: [], currentProduct: [], searchResults: [], searchInput: "", token: localStorage.getItem("token") || [], suggestions: [] };


export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch(action.type) {
      case "fetchProducts":
        return{
          ...state,
          products: action.payload
        };
      case "fetchCurrentProduct":
        return {
          ...state,
          currentProduct: action.payload
        };
      case "searchResults":
        return {
          ...state,
          searchResults: action.payload
        };
      case "searchInput":
        return{
          ...state,
          searchInput: action.payload
        };
      case "tokenUpdate":
        return {
          ...state,
          token: action.payload
        };
      case "updateSuggestions":
        return {
          ...state,
          suggestions: action.payload
        }
      default:
        return state;
    }
  }

  async function fetchProducts() {
    try {
      const response = await fetch(GET_RANDOM_PRODUCTS)
      if (response.ok) {
        const data = await response.json()
        const { content } = data

        dispatch({type: "fetchProducts" , payload: content})
      } else {
        throw new Error('Error al obtener los productos')
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  async function fetchCurrentProduct(id) {
    console.log(id)
    try {
      const response = await fetch(`${GET_CURRENT_PRODUCT}/${id}`)
      if (response.ok) {
        const data = await response.json()
        console.log("product", data)
       dispatch({ type: "fetchCurrentProduct", payload: data })
      } else {
        throw new Error('Error al obtener el producto')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }


  const token = "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTcwMDc1MDE4NSwiZXhwIjoxNzAwODM2NTg1fQ.ZwxvpBko4odFtTnH8gDSCl3xEjMNyqhf-3S0U3SaGG4"

  const findProductsByName = async (name) => {
    try {
      const response = await fetch(`${GET_CURRENT_PRODUCT}?name=${name}`)
      if (response.ok) {
        const data = await response.json()
        const { content } = data
        console.log(content)
        dispatch({ type: "searchResults", payload: content})
      } else {
        console.error('Error en la solicitud - respuesta no exitosa:', response);
        throw new Error('Error al obtener los productos')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  const getSuggestions = async (value) => {
    try {
      const response = await fetch(`${GET_CURRENT_PRODUCT}?name=${value}&limit=5`, {
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener sugerencias');
      }
  
      const data = await response.json();
      const { content } = data
      dispatch({ type: "setSuggestions", payload: content})
      console.log("Suggestions:", content);

    } catch (error) {
      console.error('Error al obtener sugerencias:', error);
      dispatch({ type: "setSuggestions", payload: [] });
    }
  };

  return (
    <ProductContext.Provider value={{state, dispatch, fetchProducts, fetchCurrentProduct, findProductsByName }}>
      {children}
    </ProductContext.Provider>
  )
}

