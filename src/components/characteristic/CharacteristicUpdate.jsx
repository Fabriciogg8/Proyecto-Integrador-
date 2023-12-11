import { UPDATE_CHARACTERISTIC } from '../../helpers/endpoints'
import '/src/styles/CharacteristicAdmin.css'
import { useState } from 'react'

const CharacteristicUpdate = ({ name }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
    } else {
      event.target.value = null
      setSelectedFile(null)
    }
  }

  const token = localStorage.getItem('token')
  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', encodeURIComponent(event.target.name.value))
    if (selectedFile) {
      formData.append('image', selectedFile) // Cambiado a singular
    }
    console.log(event.target.name.value)
    try {
      const response = await fetch(`${UPDATE_CHARACTERISTIC}${name}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
      console.log(event.target.name.value)
      console.log(formData)
      if (response.ok) {
        console.log('ANDUVO EL PUT')
      } else if (!response.ok) {
        console.log('no anduvo el put')
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
                <h3 className='mb-4 px-md-2'>
                  Actualice la característica &quot;{name}&quot;
                </h3>
                <form onSubmit={handleSubmit} className='px-md-2'>
                  <div className='margin-labels mb-4'>
                    <label htmlFor=''>Nombre</label>
                    <input
                      type='text'
                      id='form3Example1q'
                      className='input-values-characteristic'
                      name='name'
                      autoComplete='off'
                    />
                  </div>
                  <input
                    className='images-upload'
                    name='image'
                    id='file'
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                  <label className='file-button' htmlFor='file'>
                    <img src='/photo-upload.svg' className='photo-upload' />
                    Elige su icono
                  </label>
                  <button type='submit' className='btn btn-lg mb-1 submitt'>
                    Agregar
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

export default CharacteristicUpdate
