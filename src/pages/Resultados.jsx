import { useState } from "react";
import Buscador from "../components/Buscador";
import { Container } from "react-bootstrap";
import '../styles/Resultados.css'

const instrumentos = [
    { id: 1, name: 'Guitarra Acústica', price: 299 },
    { id: 2, name: 'Batería Completa', price: 899 },
    { id: 3, name: 'Teclado Eléctrico', price: 399 },
    { id: 4, name: 'Bajo Eléctrico', price: 249 },
    { id: 5, name: 'Flauta Travesera', price: 99 },
    { id: 6, name: 'Violín', price: 199 },
    { id: 7, name: 'Saxofón', price: 349 },
    { id: 8, name: 'Trompeta', price: 179 },
    { id: 9, name: 'Piano de Cola', price: 1899 },
    { id: 10, name: 'Acordeón', price: 599 },
    { id: 11, name: 'Ukelele', price: 79 },
    { id: 12, name: 'Harmónica', price: 29 },
    { id: 13, name: 'Tambor', price: 69 },
    { id: 14, name: 'Maracas', price: 19 },
    { id: 15, name: 'Clarinete', price: 279 },
  ]

const productosPorCategoria = [
    { id: 1, name: 'Guitarras', img: 'url_guitarras.jpg', cantidad: 10 },
    { id: 2, name: 'Instrumentos de viento', img: 'url_viento.jpg', cantidad: 12  },
    { id: 3, name: 'Teclados', img: 'url_teclados.jpg', cantidad: 14  },
    { id: 4, name: 'Instrumentos de cuerda', img: 'url_cuerda.jpg', cantidad: 16  },
    { id: 5, name: 'Baterías y percusión', img: 'url_percusion.jpg', cantidad: 18  },
    {
      id: 6,
      name: 'Instrumentos de viento metal',
      img: 'url_viento_metal.jpg',
      cantidad: 20 
    },
    { id: 7, name: 'Instrumentos eléctricos', img: 'url_electricos.jpg', cantidad: 22  },
    { id: 8, name: 'Instrumentos de orquesta', img: 'url_orquesta.jpg', cantidad: 24  },
    { id: 9, name: 'Accesorios musicales', img: 'url_accesorios.jpg', cantidad: 26  },

]

function listarCategorias(){
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

    const handleCategoriaSeleccionada = (nombreCategoria) => {
        if(categoriaSeleccionada.includes(nombreCategoria)) {
            setCategoriaSeleccionada((prevSeleccionadas) => 
            prevSeleccionadas.filter((categoria) => categoria!== nombreCategoria))
        }
        else{
            setCategoriaSeleccionada([...categoriaSeleccionada,nombreCategoria]);
        }
    }

    const filtrarProductos = () => {
        if(categoriaSeleccionada.length === 0){
            return instrumentos;
        }
        else{
            return instrumentos.filter((producto) => 
            categoriaSeleccionada.includes(producto.name))
        }
    }
    return(
        <Container>
        <Buscador/>
        <div className="productosYCategorias">
            <div className="listaCategorias">
                <h2>Categorías</h2>
                <button onClick={() => setCategoriaSeleccionada([])}>Borrar Filtros</button>
                <ul>
                    {
                        productosPorCategoria.map(producto => (
                            <li key={producto.id}>
                                <label>
                                    <input type="checkbox" checked = {categoriaSeleccionada.includes(producto.name)} onChange={() => handleCategoriaSeleccionada(producto.name)} />
                                    {producto.name} ({producto.cantidad})
                                </label>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="productosFiltrados">
                <h2>Productos</h2>
                    {filtrarProductos().map((producto) => (
                        <li key={producto.id}>{producto.name} <p>{" Precio: "} {producto.price}</p></li>
                    ))}
            </div>
        </div>
        </Container>
    )
}

export default listarCategorias;