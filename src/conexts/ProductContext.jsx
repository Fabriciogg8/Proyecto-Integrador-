import { createContext, useState } from 'react'
import { GET_RANDOM_PRODUCTS, GET_CURRENT_PRODUCT } from '../helpers/endpoints'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})


    async function fetchProducts () {
        try {
        const response = await fetch(GET_RANDOM_PRODUCTS)
        if (response.ok) {
            const data = await response.json()
            const {content} = data
            setProducts(content) 
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
            const response = await fetch(`GET_CURRENT_PRODUCT/${id}`)
            console.log(response)
            if (response.ok) {
              const data = await response.json()
              console.log(data)
              const { content } = data
              setCurrentProduct(content) 
            } else {
              throw new Error('Error al obtener el producto')
            }
          } catch (error) {
            console.error('Error fetching product:', error)
          }
        }


    const value = {
      products,
      currentProduct,
      fetchProducts,
      fetchCurrentProduct,
    }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

