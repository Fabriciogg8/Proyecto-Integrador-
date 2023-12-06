import { GET_REVIEWS_ON_SPECIFIC_PRODUCT } from '../../helpers/endpoints';
import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'
import '/src/styles/ShowScores.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCardImage,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function ShowScores({id}) {
    const [reservas, setReservas] = useState([]);
    const token = localStorage.getItem('token')

    const getData = async () => {
    try {
        const response = await fetch(`${GET_REVIEWS_ON_SPECIFIC_PRODUCT}${id}`, {
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
    <section style={{ backgroundColor: 'transparent' }}>
        <MDBContainer className="py-5 container-score" >
            <MDBRow className="justify-items-left-score">
                <MDBCol>
                    <MDBCard className="container-comments">
                        {reservas.map((object, index) =>(
                            <div key={index}>
                                <MDBCardBody className="p-4">
                                {index == 0 && (
                                    <div>
                                        <MDBTypography tag="h4" className="mb-0">
                                            Comentarios 
                                        </MDBTypography>
                                        <p className="fw-light mb-4 pb-2 font-comments-score">
                                            Últimos comentarios de usuarios
                                        </p>
                                    </div>
                                )}
                                <div className="d-flex flex-start">
                                <MDBCardImage
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    alt="avatar"
                                    width="60"
                                    height="60"
                                />
                                <div>
                                <MDBTypography tag="h6" className="fw-bold mb-1">
                                    {object.userName}
                                </MDBTypography>
                                <div className="mb-3">
                                <Rating readonly size={22} allowFraction initialValue={object.rating}/>
                                <p className="mb-0 date-score-product">
                                    {object.createdAt.split('T')[0]}
                                </p>
                                </div>
                                    <p className="mb-0 font-comments-score">
                                        {object.comment}
                                    </p>
                                </div>
                                </div>
                            </MDBCardBody>
                            <hr className="my-0" />
                        </div>
                        ))}
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
    );
}
