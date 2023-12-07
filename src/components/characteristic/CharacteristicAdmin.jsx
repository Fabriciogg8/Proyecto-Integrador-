import { Table, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import '../../styles/CharacteristicAdmin.css'
import { DELETE_CHARACTERISTIC, GET_CHARACTERISTIC } from '../../helpers/endpoints';

const CharacteristicAdmin = () => {
    const [reservas, setReservas] = useState([]);
    const token = localStorage.getItem('token')

    const handleDelete = async (name) => {
        try {
            const response = await fetch(`${DELETE_CHARACTERISTIC}${name}`, {
                method: 'DELETE',
                headers: {
                'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok){
                console.log("ANDUVO")
            }
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };
    

    const getData = async () => {
    try {
        const response = await fetch(GET_CHARACTERISTIC, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setReservas(data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };
    useEffect(()=>{
        getData();
    })
    


    return (
    <div style={{ backgroundColor: '#d8c690' }}>
        <h1 className='text-center' style={{ color: 'black' }}>
            Lista de Productos
        </h1>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {reservas.map((object, index) => (
            <tr key={index}>
                <td>{object.name}</td>
                <td><img src={object.image} className='img-characteristics' /></td>
                <td>
                    <Button
                        variant='secondary'
                        className='mx-2'
                    >
                        Editar
                    </Button>
                    <Button
                        variant='danger'
                        onClick={() => handleDelete(object.name)}
                        className='mx-2'
                    >
                        Eliminar
                    </Button>
                </td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
    )
}

export default CharacteristicAdmin;