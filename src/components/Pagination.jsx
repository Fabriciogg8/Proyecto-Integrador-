// eslint-disable-next-line no-unused-vars
import React from 'react';

const Pagination = ({
  prevPage,
  nextPage,
  goToFirstPage,
  currentPage,
  totalPages
  
}) => {

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