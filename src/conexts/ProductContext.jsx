import { createContext, useState } from 'react'
import { GET_RANDOM_PRODUCTS } from '../helpers/endpoints'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])


    async function fetchProducts () {
        try {
        const response = await fetch(GET_RANDOM_PRODUCTS)
        if (response.ok) {
            const data = await response.json()
            const {content} = data
            setProducts(content) // Actualiza el estado con los datos obtenidos
        } else {
            throw new Error('Error al obtener los productos')
        }
        } catch (error) {
        console.error('Error fetching products:', error)
        }
    }

    const value = {
        products,
        fetchProducts
    }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

