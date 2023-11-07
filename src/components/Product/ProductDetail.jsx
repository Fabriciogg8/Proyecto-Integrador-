import '../../styles/Product/Product-Detail.css'
import '../../styles/lightbox.css'
import svgGolden from '../../assets/chevron-left-golden.svg';
import prod from '../../assets/producto1.jpg'
import { useState } from 'react'

const Detail = () => {
  const [isTrue, setIsTrue] = useState(false)
  return (
    <div className='everyDetail'>
        <section className="arrow-title">
            <div className='contTituloProd'>
                <p>Category</p>
                <p className='title-a'>Guitarra Electrica Ibanez T0d10 Tim Henson</p>
            </div>
            <div className='contBtnBack'><img src={svgGolden} className='btn-previous'/></div>
            
        </section>
        <div>
            <div className='contenedorGalery'>
                <div className='galeryContainer'>
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                </div>
            </div>
           : (
            <button onClick={() => setIsTrue(!isTrue)} className='btn-images'>
              Ver más
            </button>
          )
        </div>

        <section className='descripYCaract'>
            <div className='descripcionProd'>
                <h4>Detalles</h4>
                <p>
                    La Ibanez Tim Henson TOD10 combina un aspecto especialmente limpio y elegante con características de
                    interpretación optimizadas hasta el más mínimo detalle y sonidos polifacéticos. Basada en el popular
                    diseño AZ, la guitarra eléctrica lacada Classic Silver presenta un cuerpo de tilo americano de diseño
                    ergonómico y un mástil de arce tostado con el ágil perfil &quot;AZ Oval C&quot;, cuyo diapasón de ébano luce un
                    sombrío &quot;Tree or Death&quot; Inlay. Las pastillas activas Fishman Fluence Tim Henson Signature con
                    voicings distintos y conmutables ofrecen el tono característico de Polyphia en el amplificador de guitarra,
                    desde limpios de sonido casi acústico hasta un elegante Distortion. Una respuesta suave Gotoh
                    T1502 2-Point Tremolo y afinadores Gotoh MG-T Locking completan el equipamiento de la guitarra
                    eléctrica Tim Henson TOD10 Signature de Ibanez.
                </p>
            </div>
            <div className='caracteristicasProd'>
                <h4>Caracteristicas</h4>
                <hr />
                
            </div>
        </section>
    </div>    
    );
};

export default Detail
