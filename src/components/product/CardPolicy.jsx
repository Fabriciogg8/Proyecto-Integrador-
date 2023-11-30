import '../../styles/Cards.css'

const CardPolicy = () =>{
    return(
        <div className="policy">
            <h1>Políticas de uso</h1>
            <div className="typePolicy">
                <div className="uso">
                    <h5>Cuidados en el uso</h5>
                    <p>El usuario será responsable por el cuidado del instrumento, tomando las precauciones necesarias para evitar golpear el instrumento</p>
                </div>
                <div className="almacenamiento">
                    <h5>Almacenamiento</h5>
                    <p>El usuario deberá evitar exponer a los instrumentos a la exposición de la luz solar para evitar su desgaste. Así como también, resguardarlo en su estuche correspondiente</p>
                </div>
                <div className="devolucion">
                    <h5>Consultas</h5>
                    <p>Al momento de realizar consultas con respecto al producto vía Whatsapp, se le garantiza al usuario que la información relativa a la consulta no será hecho pública sin su previo conscentimiento.</p>   
                </div>
            </div>
        </div>
    )
}

export default CardPolicy;
