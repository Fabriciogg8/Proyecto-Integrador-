import { useState } from "react";
import Buscador from "../components/buscador/Buscador";
import { Container } from "react-bootstrap";
import "../styles/Resultados.css";
import ProductList from "../components/ProductList";

function Resultados({ productos, productosPorCategoria }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const handleCategoriaSeleccionada = (nombreCategoria) => {
    if (categoriaSeleccionada.includes(nombreCategoria)) {
      setCategoriaSeleccionada((prevSeleccionadas) =>
        prevSeleccionadas.filter((categoria) => categoria !== nombreCategoria)
      );
    } else {
      setCategoriaSeleccionada([...categoriaSeleccionada, nombreCategoria]);
    }
  };

  const handleBorrarFiltros = () => {
    setCategoriaSeleccionada([]);
  };

  const filtrarProductos = () => {
    if (categoriaSeleccionada.length === 0) {
      return productos;
    } else {
      return productos.filter((producto) =>
        categoriaSeleccionada.includes(producto.name)
      );
    }
  };

  return (
    <Container>
      <div className="productosYCategorias">
        <div className="listaCategorias">
          <button onClick={() => setMostrarCategorias(!mostrarCategorias)}>
            {mostrarCategorias ? "Ocultar Categorias" : "Mostrar Categorias"}
          </button>
          {mostrarCategorias && (
            <>
              <button onClick={handleBorrarFiltros}>Borrar Filtros</button>
              <ul>
                {productosPorCategoria.map((categoria) => (
                  <li key={categoria.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={categoriaSeleccionada.includes(categoria.name)}
                        onChange={() =>
                          handleCategoriaSeleccionada(categoria.name)
                        }
                      />
                      {categoria.name} ({categoria.cantidad})
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="productosFiltrados">
          <h2>Productos</h2>
          <ProductList products={filtrarProductos()} />
        </div>
      </div>
    </Container>
  );
}

export default Resultados;
