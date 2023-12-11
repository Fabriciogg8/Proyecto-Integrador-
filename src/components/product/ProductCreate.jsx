import { useState, useEffect } from 'react'
import { CREATE_PRODUCT, GET_CHARACTERISTIC } from '../../helpers/endpoints'

import '/src/styles/ProductCreate.css'

const ProductCreate = () => {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([])
  const [arrayCharacteristics, setArrayCharacteristics] = useState([])
  const [selectedFiles, setSelectedFiles] = useState()
  const [selectedCategory, setSelectedCategory] = useState('DEFAULT')
  const token = localStorage.getItem('token')

  const handleSelectCharacteristic = value => {
    setSelectedCharacteristics([...selectedCharacteristics, value])
  }

  const handleFileChange = event => {
    const files = event.target.files

    if (files.length < 5 || files.length > 7) {
      event.target.value = null
    } else {
      const imagesArray = Array.from(files)
      setSelectedFiles(imagesArray)
    }
  }

  const handleSelectChange = event => {
    setSelectedCategory(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', event.target.name.value)
    formData.append('categoryName', selectedCategory)
    formData.append('brand', event.target.brand.value)
    formData.append('model', event.target.model.value)
    formData.append('description', event.target.description.value)
    formData.append('price', parseFloat(event.target.price.value))
    formData.append('discount', parseInt(event.target.discount.value))

    for (let i = 0; i < selectedCharacteristics.length; i++) {
      formData.append('characteristics', selectedCharacteristics[i])
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('imagesFiles', selectedFiles[i])
    }

    try {
      const response = await fetch(CREATE_PRODUCT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      console.log(formData)

      if (response.ok) {
        console.log('Éxito en la creación del producto')
      } else {
          const imagesArray = [];
          for (let i = 0; i < files.length; i++) {
              imagesArray.push(files[i]);
          }
          setSelectedFiles(imagesArray);
      }
  };
 
    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
      };
   
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', event.target.name.value);
      formData.append('categoryName', selectedCategory);
      formData.append('brand', event.target.brand.value);
      formData.append('model', event.target.model.value);
      formData.append('description', event.target.description.value);
      formData.append('price', parseFloat(event.target.price.value));
      formData.append('discount', parseInt(event.target.discount.value));
      formData.append('characteristics', selectedCharacteristics[0]);
      if(selectedCharacteristics[1]){
        formData.append('characteristics', selectedCharacteristics[1]);
      }
      if(selectedCharacteristics[2]){
        formData.append('characteristics', selectedCharacteristics[2]);
      }
      if(selectedCharacteristics[3]){
        formData.append('characteristics', selectedCharacteristics[3]);
      }
      if(selectedCharacteristics[4]){
        formData.append('characteristics', selectedCharacteristics[4]);

      }
    } catch (error) {
      console.error('Error en la solicitud: ', error)
    }
  }

  const getCharacteristics = async () => {
    try {
      const response = await fetch(GET_CHARACTERISTIC, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`)
      }
      const data = await response.json()
      setArrayCharacteristics(data)
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  }

  useEffect(() => {
    getCharacteristics()
  }, [])

  return (
    <section className='h-100 h-custom' style={{ backgroundColor: '#d8c690' }}>
      <div className='container py-5 h-100'>
        <div className='row'>
          <div className='col-lg-8 col-xl-12'>
            <div className='card rounded-3 form-background'>
              <div className='card-body p-4 p-md-5'>
                <h3 className='mb-4 px-md-2'>Registre su producto</h3>
                <form onSubmit={handleSubmit} className='px-md-2'>
                  <form onSubmit={handleSubmit} className='px-md-2'>
                    <div className='margin-labels mb-4'>
                      <label htmlFor=''>Nombre</label>
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
                          Tipo de categoría
                        </option>
                        <option value='Cuerdas'>Cuerda</option>
                        <option value='Viento'>Viento</option>
                        <option value='Percusión'>Percusión</option>
                        <option value='Teclado'>Teclado</option>
                      </select>
                    </div>
                    {/* ... (se repite para cada Característica) */}
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
                      name='files'
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
                    {selectedFiles == undefined ||
                    selectedFiles == undefined ||
                    selectedFiles == undefined ? (
                      <p className='warning-message'>
                        Tienes que subir de 5 a 7 imágenes
                      </p>
                    ) : (
                      <label>
                        Has subido {selectedFiles.length} imágenes con éxito
                      </label>
                    )}
                    <button type='submit' className='btn btn-lg mb-1 submitt'>
                      Enviar
                    </button>
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCreate
