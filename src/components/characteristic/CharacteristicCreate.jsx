import { CREATE_CHARACTERISTIC } from '../../helpers/endpoints';
import '/src/styles/ProductCreate.css'
import { useState } from 'react';

const CharacteristicCreate = () => {
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

    const token = localStorage.getItem('token');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', event.target.name.value);

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('imagesFiles', selectedFiles[i]);
        }

        try {
            const response = await fetch(CREATE_CHARACTERISTIC, {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${token}`
                },
                body: formData,
            });
            console.log(formData);
            if (response.ok) {
                console.log("ANDUVO")
            } else if (!response.ok) {
                console.log("no anduvo")
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error)
        }
    }

    return(
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
                                        Necesitas subir la imagen de la caracteristica
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

export default CharacteristicCreate;