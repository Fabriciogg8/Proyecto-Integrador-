import '/src/styles/ProductCreate.css'
import { useContext, useState } from 'react';
import { CREATE_CATEGORIES } from '../../helpers/endpoints';
import { ProductContext } from '../../conexts/ProductContext';

const CreateCategory = () => {

    const {state} = useContext(ProductContext);
    const token = state.token;
    

  const handleSubmit = async (event) => {
    event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJBbGluYSIsImxhc3ROYW1lIjoiQ2FzYXMiLCJyb2xlIjoiQURNSU4iLCJzdWIiOiJhbGlAbWFpbC5jb20iLCJpYXQiOjE3MDE3MzAzMTYsImV4cCI6MTcwMTgxNjcxNn0.KPKoN4zM-CYAFvgaIVJP0UcFNk0V4ZOMU0xG341dHXQ");

var raw = JSON.stringify({
  "name": event.target.name.value,
  "description": event.target.description.value,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://174.129.92.139:8001/api/v1/categories", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
    
    // Upload Images
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 2 ) {
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
                  <h3 className='mb-4 px-md-2'>Ingrese una categoría</h3>
                  <form
                    onSubmit={handleSubmit}
                    className='px-md-2'
                  >
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
                      <label htmlFor='form3Example1q'>Descripción</label>
                      <textarea
                        rows='7'
                        id='form3Example1q'
                        className='input-values-instruments'
                        name='description'
                      ></textarea>
                    </div>
                    
                    <input
                      className='images-upload'
                      name='images'
                      id='file'
                      type='file'
                      accept='image/*'
                      onChange={handleFileChange}
                      
                    />
                    <label className='file-button' htmlFor='file'>
                      <img src='/photo-upload.svg' className='photo-upload' />
                      Elige las fotos
                    </label>
                    {selectedFiles.length > 0 ? (
                        <p>
                        Se ha subido {selectedFiles.length} imágen con éxito
                        </p>
                        
                    ) : (
                      <p className='warning-message'>
                      
                      </p>
                    )}
                   
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

export default CreateCategory;
