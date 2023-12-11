import '/src/styles/ProductCreate.css'
import { useState } from 'react'
import { CREATE_PRODUCT } from '../../helpers/endpoints'

const ProductCreate = () => {
  const [selectedFiles, setSelectedFiles] = useState()
  const handleFileChange = event => {
    const files = event.target.files
    if (files.length > 7 || files.length < 5) {
      event.target.value = null
    } else {
      const imagesArray = []
      for (let i = 0; i < files.length; i++) {
        imagesArray.push(files[i])
      }
      setSelectedFiles(imagesArray)
    }
  }
  const [selectedCategory, setSelectedCategory] = useState('DEFAULT')
  const handleSelectChange = event => {
    setSelectedCategory(event.target.value)
  }
  const token = localStorage.getItem('token')
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
        console.log('ANDUVO')
      } else if (!response.ok) {
        console.log('no anduvo')
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error)
    }
  }

  return (
    <section className='h-100 h-custom' style={{ backgroundColor: '#d8c690' }}>
      <div className='container py-5 h-100'>
        <div className='row'>
          <div className='col-lg-8 col-xl-12'>
            <div className='card rounded-3 form-background'>
              <div className='card-body p-4 p-md-5'>
                <h3 className='mb-4 px-md-2'>Registre su producto</h3>
                <form onSubmit={handleSubmit} className='px-md-2'>
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
                      <option value='Cuerdaa'>Cuerda</option>
                      <option value='Vientoo'>Viento</option>
                      <option value='Percucionn'>Percusión</option>
                      <option value='Tecladoo'>Teclado</option>
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

export default ProductCreate
