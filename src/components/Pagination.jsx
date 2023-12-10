// eslint-disable-next-line no-unused-vars
import React from 'react';

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  // nextPage,
  // prevPage,
  // goToFirstPage,
  
}) => {
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
  return (
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
  );
};

export default Pagination;