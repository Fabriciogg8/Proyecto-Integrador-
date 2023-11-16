import '../../styles/Product/Product-Detail.css'
import '../../styles/lightbox.css'
import svgGolden from '../../assets/chevron-left-golden.svg';
import descLogo from '../../assets/body-text.png'
import brush from '../../assets/brush.png'
import prod from '../../assets/producto1.jpg'
import prod2 from '../../assets/percusion.jpg'
import { useState } from 'react'

import ImageSlider from '../Product/ImageSlider'

const Detail = () => {
    const [isTrue, setIsTrue] = useState(false)

    const [showG, setShowG] = useState(null);
    const showGallery = (showG) =>{
        setShowG(showG);
      };

    const data = [
        {
          image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
      ];
    
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
                <div className='galeryContainer g-container'>
                    <img src={prod} className='prodDetailGallery' alt="" onClick={() => showGallery(true)}/>
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                </div>
            </div>
        </div>

        
        
       {<ImageSlider slides={data} show={showG} />}
        
        

        

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

export default Detail;