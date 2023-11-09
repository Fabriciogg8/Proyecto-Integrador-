import { useState } from 'react'
import CardProduct from './product/CardProduct' 

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  const totalPages = Math.ceil(products.length / productsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
  }

  return (
    <>
      <div className='row cardsContainers'>
        {currentProducts.map(instrumento => {
          const imagen =
            instrumento.images && instrumento.images.length > 0
              ? instrumento.images[0]
              : null
          return (
            <CardProduct
              key={instrumento.id}
              id={instrumento.id}
              name={instrumento.name}
              price={instrumento.price}
              image={imagen}
            />
          )
        })}

        {/* Bloque de paginación*/}
        <div className='pagination'>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            Ir al Inicio
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
        </div>
      </div>
    </>
  )
}

export default ProductList
