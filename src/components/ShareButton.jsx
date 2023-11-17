import { useState } from 'react';
import '../styles/ProductShare.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareButton = ({name, description, image}) => {
    const [modal, setModal] = useState(false)
    const [desc, setDesc] = useState('')
    const state = {
        value: window.location.href,
        desc: desc
    }
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const descCreate = event => {
        setDesc(event.target.value)
    }

    const handleWhatsAppShare = () => {
        const productPageUrl = state.value;
        const additionalText = state.desc;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${additionalText} ${productPageUrl}`)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInstagramShare = () => {
        const caption = encodeURIComponent(`¡Mira este producto! ${state.desc} ${state.value}`);
        const instagramUrl = `instagram://share?text=${caption}`;
        if (window.location.href.includes('instagram.com') || !window.navigator.share) {
            alert('No se puede compartir en Instagram desde un navegador web. Intenta desde la aplicación móvil.');
        } else {
            window.location.href = instagramUrl;
        }
    };

    const handleTelegramShare = () => {
        const message = encodeURIComponent(`¡Mira este producto! ${state.desc} ${state.value}`);
        const telegramUrl = `https://web.telegram.org/#/im?p=@tu_usuario_bot&text=${message}`;
        window.open(telegramUrl, '_blank');
    };

    const handleFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(state.value)}`;
        window.open(facebookUrl, '_blank');
    }   

    const handleTwitterShare = () => {
        const twitterUrl = 	`https://twitter.com/intent/tweet?text=${encodeURIComponent(`¡Mira este producto! ${state.desc} ${state.value}`)}`;
        window.open(twitterUrl, '_blank');window.open(twitterUrl, '_blank');   
    }   

    return (
        <section>
            <button className='btn-modal' onClick={toggleModal}>
                <img src="/share-icon.svg" className='share-icon-button'/>
            </button>
            {modal && (
            <div>
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <img src={image} alt="" />
                    <div className='display-copies'>
                        <input value={state.value} className='input-disabled'/>
                        <CopyToClipboard text={state.value}> 
                            <button className='btn-copy-to-clipboard'>
                                <img src="/copy-regular.svg" className='copy-to-clipboard'/>
                            </button>
                        </CopyToClipboard>
                    </div>
                    <input value={state.desc} className='input-desc' onChange={descCreate} placeholder='Inserte mensaje adicional'/>
                    <div className='buttons-social-networks'>
                        <button onClick={handleWhatsAppShare}>
                            <img src="/redes-whatsapp.svg" alt="" className="social-network-img"/>
                        </button>
                        <button onClick={handleFacebookShare}>
                            <img src="/redes-facebook.svg" alt="" className="social-network-img"/>
                        </button>
                        <button onClick={handleTwitterShare}>
                            <img src="/redes-twitter.svg" alt="" className="social-network-img"/>
                        </button>
                        <button onClick={handleInstagramShare}>
                            <img src="/redes-instagram.svg" alt="" className="social-network-img"/>
                        </button>
                        <button onClick={handleTelegramShare}>
                            <img src="/redes-telegram.svg" alt="" className="social-network-img"/>
                        </button>
                    </div>
                    <button className='close-modal' onClick={toggleModal}>X</button>
                </div>
            </div>
            )}
            
        </section>
    );
};

export default ShareButton;