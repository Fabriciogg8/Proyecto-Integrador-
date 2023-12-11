import '/src/styles/FavouritesList.css'
import { useEffect, useState } from 'react'
import { GET_RESERVATIONS } from '../../helpers/endpoints'
import { useAuthStore } from '/src/hooks/useAuthStore'
import { format } from 'date-fns'
import FavButton from '../FavButton'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit'

const ReservasList = () => {
  const [reservas, setReservas] = useState([])
  const { user } = useAuthStore()
  const token = localStorage.getItem('token')
  const getReservas = async () => {
    try {
      const response = await fetch(
        `${GET_RESERVATIONS}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`)
      }
      const data = await response.json()
      setReservas(data)
      console.log(data)
    } catch (error) {
      console.error('Error al obtener datos en el coso:', error)
    }
  }

  useEffect(() => {
    getReservas()
  }, [])

  return (
    <section>
      <MDBContainer className='py-5' style={{ maxWidth: '100%' }}>
        <MDBRow className='justify-content-center'>
          <MDBCol md='12' lg='10'>
            <MDBCard className='text-dark'>
              <MDBTypography tag='h4' className='mb-0 favourites-list-h4'>
                Lista de Reservas
              </MDBTypography>
              <p className='fw-light mb-4 pb-2 favourites-list-p'>
                Reservados recientemente
              </p>
              {reservas.map((object, index) => (
                <div key={index}>
                  <MDBCardBody className='p-4 '>
                    <div className='d-flex flex-start favourite-card'>
                      <div>
                        <MDBTypography tag='h6' className='fw-bold mb-1 '>
                          Producto: {object.productId}
                        </MDBTypography>
                        <div className='d-flex align-items-center mb-3'>
                          <p className='mb-0'>
                            <span className='badge bg-primary'>
                              Reservado desde:{' '}
                              {format(new Date(object.startDate), 'yyyy-MM-dd')}
                            </span>
                          </p>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                          <p className='mb-0'>
                            <span className='badge bg-primary'>
                              Reservado hasta:{' '}
                              {format(new Date(object.endDate), 'yyyy-MM-dd')}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                  <hr className='my-0' />
                </div>
              ))}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default ReservasList
