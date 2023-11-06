import '/src/styles/ProductCreate.css'
import { useState } from 'react';

const ProductCreate = () => {

    const [selectedCategory, setSelectedCategory] = useState('DEFAULT');
    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    const token = localStorage.getItem('jwt');
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const priceFloatData = parseFloat(formData.get('price'));
        const discountIntData = parseInt(formData.get('discount'));
        const data = {
            name: formData.get('name'),
            category: selectedCategory,
            brand: formData.get('brand'),
            model: formData.get('model'),
            description: formData.get('description'),
            price: priceFloatData,
            discount: discountIntData,
            images: selectedFiles
            /*Comentado hasta pulir detalles (Probar con detalles de guitarra primero y seguir después con los demás)
            tipo_cuerda: formData.get(document.getElementById('tipo_cuerda')),
            cantidad_cuerdas: formData.get(document.getElementById('cant_cuerda')),
            guitarra_cuerpo: formData.get(document.getElementById('tipo_cuerpo')),
            guitarra_tamano: formData.get(document.getElementById('tamanio')),
            incluye_funda: formData.get(document.getElementById('funda')),*/
            

            /* piano_sensibilidad: formData.get('piano_sensibilidad'),
            teclas_cantidad: formData.get('teclas_cantidad'),
            viento_terminacion_laca: formData.get('viento_terminacion_laca'),
            percusion_cantidad_cuerpos: formData.get('percusion_cantidad_cuerpos'),
            percusion_incluye_platillo: formData.get('percusion_incluye_platillo'),*/
        }

        try {
            const response = await fetch('http://52.201.124.42:8001/api/v1/products', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization' : `${token}`
                },
                body: JSON.stringify(data)
            })
            console.log(data);
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
            } else {
                console.log('Error al enviar la solicitud al servidor')
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error)
        }
    }

    
    // Upload Images
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 7 || files.length < 5 ) {
            event.target.value = null
        } else {
            const imagesArray = [];
            for (let i = 0; i < files.length; i++) {
                if (files[i].type.startsWith('image/')){
                    imagesArray.push(files[i]);
                }
            }
            setSelectedFiles(imagesArray);
        }
    }
/*
    const [mostrarDivGuitar, setMostrarDivGuitar] = useState(false);
    const [mostrarDivPiano, setMostrarDivPiano] = useState(false);
    const [mostrarDivViento, setMostrarDivViento] = useState(false);
    const [mostrarDivPercusion, setMostrarDivPercusion] = useState(false);

    Esta función va en un onChange={handleChange} en el dropdown de Tipo de instrumento
    const handleChange = (event) => {
      if (event.target.value === "1") {
        setMostrarDivGuitar(true);
        setMostrarDivPercusion(false);
        setMostrarDivPiano(false);
        setMostrarDivViento(false);
      } else if (event.target.value === "4"){
        setMostrarDivPiano(true);
        setMostrarDivGuitar(false);
        setMostrarDivPercusion(false);
        setMostrarDivViento(false);
      } else if (event.target.value === "2"){
        setMostrarDivPiano(false);
        setMostrarDivGuitar(false);
        setMostrarDivPercusion(false);
        setMostrarDivViento(true);
      } else if (event.target.value === "3"){
        setMostrarDivPiano(false);
        setMostrarDivGuitar(false);
        setMostrarDivPercusion(true);
        setMostrarDivViento(false);
      } else {
        setMostrarDivPiano(false);
        setMostrarDivGuitar(false);
        setMostrarDivPercusion(false);
        setMostrarDivViento(false);
      }
    };
*/
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#d8c690' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3 form-background">
                            <img src="https://img.freepik.com/premium-photo/tenor-sax-golden-saxophone-macro-selective-focus_79295-700.jpg?size=626&ext=jpg" className="w-100"
                                alt="Sample photo"/>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 px-md-2">Registre su producto</h3>
                                <form onSubmit={handleSubmit} className="px-md-2" method='post' action='http://52.201.124.42:8001/api/v1/products'>
                                    <div className="margin-labels mb-4">
                                        <label htmlFor="">Name</label>
                                        <input type="text" id="form3Example1q" className="input-values-instruments" name='name' autoComplete='off'/>
                                    </div>
                                    <div className="margin-labels mb-4">
                                    <label htmlFor="form3Example1q">Marca</label>
                                        <input type="text" id="form3Example1q" className="input-values-instruments" name='brand'/>
                                    </div>
                                    <div className="margin-labels mb-4">
                                    <label htmlFor="form3Example1q">Modelo</label>
                                        <input type="text" id="form3Example1q" className="input-values-instruments" name='model'/>
                                    </div>
                                    <div className="margin-labels mb-4">
                                    <label htmlFor="form3Example1q">Descripción</label>
                                        <textarea rows="7" id="form3Example1q" className="input-values-instruments" name='description'></textarea>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <select className="form-select" aria-label="Default select example" value={selectedCategory} onChange={handleSelectChange}>
                                            <option value="DEFAULT" disabled>Tipo de instrumento</option>
                                            <option value="Cuerda">Cuerda</option>
                                            <option value="Viento">Viento</option>
                                            <option value="Percusion">Percusión</option>
                                            <option value="Teclado">Teclado</option>
                                        </select>
                                    </div>
                                    {/*
                                    {mostrarDivGuitar && (
                                        <div className='guitarra-radio'>
                                            <div className='flex-box-radio'>
                                                <select className="form-select" aria-label="Default select example" id="tipo_cuerda"  defaultValue={'DEFAULT'}>
                                                    <option value="DEFAULT" disabled>Tipo de cuerda</option>
                                                    <option value="Nylon">Nylon</option>
                                                    <option value="Acero">Acero</option>
                                                    <option value="Cobre">Cobre</option>
                                                </select>
                                            </div>
                                            <div className='flex-box-radio'>
                                                <select className="form-select" aria-label="Default select example" id="cant_cuerda" defaultValue={'DEFAULT'}>
                                                    <option value="DEFAULT" disabled>Cantidad de cuerdas</option>
                                                    <option value="4">4</option>
                                                    <option value="6">6</option>
                                                    <option value="8">8</option>
                                                </select>
                                            </div>
                                            <div className='flex-box-radio'>
                                                <select className="form-select" aria-label="Default select example" id="tipo_cuerpo" defaultValue={'DEFAULT'}>
                                                    <option value="DEFAULT" disabled>Cuerpo</option>
                                                    <option value="Superstrat">Stratocaster</option>
                                                    <option value="Les Paul">Les Paul</option>
                                                    <option value="Telecaster">Telecaster</option>
                                                    <option value="Superstrat">Superstrat</option>
                                                </select>
                                            </div>
                                            <div className='flex-box-radio'>
                                                <select className="form-select" aria-label="Default select example" id="tamanio" defaultValue={'DEFAULT'}>
                                                    <option value="DEFAULT" disabled>Tamaño</option>
                                                    <option value="1/2">1/2</option>
                                                    <option value="3/4">3/4</option>
                                                    <option value="4/4">4/4</option>
                                                </select>
                                            </div>
                                            <div className='flex-box-radio'>
                                                <select className="form-select" aria-label="Default select example" id="funda" defaultValue={'DEFAULT'}>
                                                    <option value="DEFAULT" disabled>Incluye funda</option>
                                                    <option value="Si">Si</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                    </div>
                                    )}
                                    {mostrarDivPiano && (
                                        <div className='guitarra-radio'>
                                            <label className='guitarra-radio-label'>Sensibilidad</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="piano_sensibilidad" id="exampleRadios1" value="Si" checked/>
                                                    <label>
                                                        Si
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="piano_sensibilidad" id="exampleRadios2" value="No"/>
                                                    <label htmlFor="exampleRadios2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <label className='guitarra-radio-label'>Cantidad de teclas</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="teclas_cantidad" id="exampleRadios1" value="88" checked/>
                                                    <label>
                                                        88
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="teclas_cantidad" id="exampleRadios2" value="61"/>
                                                    <label htmlFor="exampleRadios2">
                                                        61
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="teclas_cantidad" id="exampleRadios3" value="76"/>
                                                    <label  htmlFor="exampleRadios3">
                                                        76
                                                    </label>
                                                </div>
                                            </div>
                                            <label className='guitarra-radio-label'>Incluye funda</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="incluye_funda" id="exampleRadios1" value="Si" checked/>
                                                    <label>
                                                        Si
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="incluye_funda" id="exampleRadios2" value="No"/>
                                                    <label htmlFor="exampleRadios2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                    )}
                                    {mostrarDivViento && (
                                        <div className='guitarra-radio'>
                                            <label className='guitarra-radio-label'>Terminación de laca</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="viento_terminacion_laca" id="exampleRadios1" value="Negra" checked/>
                                                    <label>
                                                        Negra
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="viento_terminacion_laca" id="exampleRadios2" value="Dorada"/>
                                                    <label htmlFor="exampleRadios2">
                                                        Dorada
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="viento_terminacion_laca" id="exampleRadios1" value="Plateada" checked/>
                                                    <label>
                                                        Plateada
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="viento_terminacion_laca" id="exampleRadios2" value="Clara"/>
                                                    <label htmlFor="exampleRadios2">
                                                        Clara
                                                    </label>
                                                </div>
                                            </div>
                                            <label className='guitarra-radio-label'>Incluye funda</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="incluye_funda" id="exampleRadios1" value="Si" checked/>
                                                    <label>
                                                        Si
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="incluye_funda" id="exampleRadios2" value="No"/>
                                                    <label htmlFor="exampleRadios2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                    )}
                                    {mostrarDivPercusion && (
                                        <div className='guitarra-radio'>
                                            <label className='guitarra-radio-label'>Cantidad de cuerpos</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_cantidad_cuerpos" id="exampleRadios1" value="3c" checked/>
                                                    <label>
                                                        3c
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_cantidad_cuerpos" id="exampleRadios2" value="5c"/>
                                                    <label htmlFor="exampleRadios2">
                                                        5c
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_cantidad_cuerpos" id="exampleRadios1" value="4c" checked/>
                                                    <label>
                                                        4c
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_cantidad_cuerpos" id="exampleRadios2" value="8c"/>
                                                    <label htmlFor="exampleRadios2">
                                                        8c
                                                    </label>
                                                </div>
                                            </div>
                                            <label className='guitarra-radio-label'>Incluye platillo</label>
                                            <div className='flex-box-radio'>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_incluye_platillo" id="exampleRadios1" value="Si" checked/>
                                                    <label>
                                                        Si
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="percusion_incluye_platillo" id="exampleRadios2" value="No"/>
                                                    <label htmlFor="exampleRadios2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                    )}*/}
                                    <div className="margin-labels mb-4">
                                    <label htmlFor="form3Example1q">Precio ($USD)</label>
                                        <input type="number" step="0.01" id="form3Example1q" className="input-values-instruments" name="price"/>
                                    </div>
                                    <div className="margin-labels mb-4">
                                        <label htmlFor="form3Example1q">Descuento</label>
                                        <input type="number" id="form3Example1q" className="input-values-instruments" name="discount"/>
                                    </div>
                                    <input className="images-upload" name="images" id="file" type="file" accept="image/*" onChange={handleFileChange} multiple/>
                                    <label className="file-button" htmlFor="file"><img src="src/assets/photo-upload.svg" className='photo-upload'/>Elige las fotos</label>
                                    {selectedFiles.length == 7 || selectedFiles.length == 6 || selectedFiles.length == 5 ? (
                                        <label>
                                            Has subido {selectedFiles.length} imágenes con éxito
                                        </label>
                                        ) : (
                                        <p className='warning-message'>
                                            Tienes que subir de 5 a 7 imágenes
                                        </p>
                                        )}
                                    <button type="submit" className="btn btn-lg mb-1 submitt">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCreate;