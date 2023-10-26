import '/src/styles/Detail.css'
import '/src/styles/lightbox.css'
import descLogo from '/src/assets/body-text.png'
import brush from '/src/assets/brush.png'

const Detail = () => {
    return (
    <div className='everyDetail'>
        <div className="arrow-title">
            <img src="./src/assets/prev2.png" className='btn-previous'/>
            <a href="" className='title-a'>Guitarra Electrica Ibanez T0d10 Tim Henson</a>
        </div>
        <div className='containerDetail'>
            <div className='galleryPrincipal'>
                <a href="https://f.fcdn.app/imgs/a141e9/www.palaciodelamusica.com.uy/pmusuy/b659/original/catalogo/T0D10-T0D10_1/2000-2000/guitarra-electrica-ibanez-t0d10-tim-henson-guitarra-electrica-ibanez-t0d10-tim-henson.jpg" data-lightbox="instruments" data-title="Caption1">
                    <img src="https://f.fcdn.app/imgs/a141e9/www.palaciodelamusica.com.uy/pmusuy/b659/original/catalogo/T0D10-T0D10_1/2000-2000/guitarra-electrica-ibanez-t0d10-tim-henson-guitarra-electrica-ibanez-t0d10-tim-henson.jpg"/>
                </a>
            </div>
            <div className='gallerySecundarias'>
                <div>
                    <a href="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_1.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_1.jpg"/>
                    </a>
                    <a href="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_2.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_2.jpg"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_3.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_3.jpg"/>
                    </a>
                    <a href="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_4.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://www.ibanez.com/common/product_artist_file/file/p_region_TOD10_CSV_1P_01_sub_4.jpg"/>
                    </a>
                </div>
                {
                /*
                <div>
                    <a href="https://f.fcdn.app/imgs/b58dcd/www.palaciodelamusica.com.uy/pmusuy/41fb/original/catalogo/T0D10-T0D10_2/2000-2000/guitarra-electrica-ibanez-t0d10-tim-henson-guitarra-electrica-ibanez-t0d10-tim-henson.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://f.fcdn.app/imgs/b58dcd/www.palaciodelamusica.com.uy/pmusuy/41fb/original/catalogo/T0D10-T0D10_2/2000-2000/guitarra-electrica-ibanez-t0d10-tim-henson-guitarra-electrica-ibanez-t0d10-tim-henson.jpg"/>
                    </a>
                    <a href="https://www.txirula.com/92061-thickbox_default/ibanez-tod10-tim-henson.jpg" data-lightbox="instruments" data-title="Caption1">
                        <img src="https://www.txirula.com/92061-thickbox_default/ibanez-tod10-tim-henson.jpg"/>
                    </a>
                </div> 
                */
                }
            </div>
        </div>
        <div className="containerDetail2">
            <div className="descripcionInstrumento">
                <img src={descLogo} className="logoDescripcion" alt="" />
                <span>
                    Descripción
                </span>
                <p>
                    La Ibanez Tim Henson TOD10 combina un aspecto especialmente limpio y elegante con características de <br />
                    interpretación optimizadas hasta el más mínimo detalle y sonidos polifacéticos. <br />Basada en el popular
                    diseño AZ, la guitarra eléctrica lacada Classic Silver presenta un cuerpo de tilo <br />americano de diseño
                    ergonómico y un mástil de arce tostado con el ágil perfil &quot;AZ Oval C&quot;,<br /> cuyo diapasón de ébano luce un
                    sombrío &quot;Tree or Death&quot; Inlay. <br />Las pastillas activas Fishman Fluence Tim Henson Signature con
                    voicings distintos y conmutables<br /> ofrecen el tono característico de Polyphia en el amplificador de guitarra,
                    desde limpios de sonido<br /> casi acústico hasta un elegante Distortion.<br /> Una respuesta suave Gotoh
                    T1502 2-Point Tremolo y afinadores Gotoh MG-T Locking completan el<br /> equipamiento de la guitarra
                    eléctrica Tim Henson TOD10 Signature de Ibanez.
                </p>
            </div>
            <div className="detallesInstrumento">
                <img src={brush} className="detalleBrush" alt="" />
                <span>
                    Detalles
                </span>
                <p>
                    Tim Henson Signature <br />
                    Cuerpo de tilo americano <br />
                    Mástil de arce tostado <br />
                    Diapasón de ébano <br />
                    Montaje del mástil (bolt-on) <br />
                    24 trastes <br />
                    Pastilla Fishman Fluence Tim Henson Signature de Alnico activa (puente) <br />
                    Pastilla Fishman Fluence Tim Henson Signature de Alnico activa (mástil) <br />
                    Controles: Volumen y tono <br />
                    Interruptor de 5 posiciones <br /> 
                    Puente trémolo Gotoh T1502 <br />
                    Acabado de los herrajes: Cromo <br /> 
                    Clavijas de afinación Gotoh MG-T con bloqueo <br />
                    Incluye funda <br />
                </p>
            </div>
        </div>
    </div>    
    );
};

export default Detail;