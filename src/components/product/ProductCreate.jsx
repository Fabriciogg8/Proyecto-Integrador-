import '/src/styles/ProductCreate.css'
import { useState } from 'react';
import { CREATE_PRODUCT } from '../../helpers/endpoints';

const ProductCreate = () => {

    const [selectedCategory, setSelectedCategory] = useState('DEFAULT');
    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    const token = localStorage.getItem('token');
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append('name', formData.get('name'));
      formData.append('category', selectedCategory);
      formData.append('brand', formData.get('brand'))
      formData.append('model', formData.get('model'));
      formData.append('description', formData.get('description'));
      formData.append('price', parseFloat(formData.get('price')));
      formData.append('discount', parseInt(formData.get('discount')));
      
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append(`images[${i}]`, selectedFiles[i]);
      }

        try {
            const response = await fetch(CREATE_PRODUCT, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Authorization': `${token}`,
              },
              body: formData,
            });
            console.log(formData);
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
            }
            
        } catch (error) {
            console.error('Error en la solicitud: ', error)
        }
        console.log(formData)
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
      <section
        className='h-100 h-custom'
        style={{ backgroundColor: '#d8c690' }}
      >
        <div className='container py-5 h-100'>
          <div className='row'>
            <div className='col-lg-8 col-xl-12'>
              <div className='card rounded-3 form-background'>
                <div className='card-body p-4 p-md-5'>
                  <h3 className='mb-4 px-md-2'>Registre su producto</h3>
                  <form
                    onSubmit={handleSubmit}
                    className='px-md-2'
                    method='post'
                    action={CREATE_PRODUCT}
                  >
                    <div className='margin-labels mb-4'>
                      <label htmlFor=''>Name</label>
                      <input
                        type='text'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='name'
                        autoComplete='off'
                      />
                    </div>
                    <div className='margin-labels mb-4'>
                      <label htmlFor='form3Example1q'>Marca</label>
                      <input
                        type='text'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='brand'
                      />
                    </div>
                    <div className='margin-labels mb-4'>
                      <label htmlFor='form3Example1q'>Modelo</label>
                      <input
                        type='text'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='model'
                      />
                    </div>
                    <div className='margin-labels mb-4'>
                      <label htmlFor='form3Example1q'>Descripción</label>
                      <textarea
                        rows='7'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='description'
                      ></textarea>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <select
                        className='form-select'
                        aria-label='Default select example'
                        value={selectedCategory}
                        onChange={handleSelectChange}
                      >
                        <option value='DEFAULT' disabled>
                          Tipo de instrumento
                        </option>
                        <option value='Cuerda'>Cuerda</option>
                        <option value='Viento'>Viento</option>
                        <option value='Percusion'>Percusión</option>
                        <option value='Teclado'>Teclado</option>
                      </select>
                    </div>

                    <div className='margin-labels mb-4'>
                      <label htmlFor='form3Example1q'>Precio ($USD)</label>
                      <input
                        type='number'
                        step='0.01'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='price'
                      />
                    </div>
                    <div className='margin-labels mb-4'>
                      <label htmlFor='form3Example1q'>Descuento</label>
                      <input
                        type='number'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='discount'
                      />
                    </div>
                    <input
                      className='images-upload'
                      name='images'
                      id='file'
                      type='file'
                      accept='image/*'
                      onChange={handleFileChange}
                      multiple
                    />
                    <label className='file-button' htmlFor='file'>
                      <img src='/photo-upload.svg' className='photo-upload' />
                      Elige las fotos
                    </label>
                    {selectedFiles.length == 7 ||
                    selectedFiles.length == 6 ||
                    selectedFiles.length == 5 ? (
                      <label>
                        Has subido {selectedFiles.length} imágenes con éxito
                      </label>
                    ) : (
                      <p className='warning-message'>
                        Tienes que subir de 5 a 7 imágenes
                      </p>
                    )}
                    <button type='submit' className='btn btn-lg mb-1 submitt'>
                      Submit
                    </button>
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
