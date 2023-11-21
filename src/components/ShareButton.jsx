import { useState } from 'react';
import '../styles/ProductShare.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareButton = ({name, description, image}) => {
    const [modal, setModal] = useState(false);
    const [desc, setDesc] = useState('');
    const acortarDescripcion = (descripcion, limitePalabras) => {
        if(descripcion){
            const palabras = descripcion.split(' ');
            const descripcionAcortada = palabras.slice(0, limitePalabras).join(' ');
            return `${descripcionAcortada}...`;
        }
        return '';
    };
    
    const descripcionAcortada = acortarDescripcion(description, 24);

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
        const url = state.value; 
        const message = `${state.desc} ${url}`;
        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
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
        const message = encodeURIComponent(`${state.desc}`);
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(state.value)}&text=${message}`;
        window.open(telegramUrl, '_blank');
    };

    const handleFacebookShare = () => {
        const message = state.desc ? `&quote=${encodeURIComponent(state.desc)}` : '';
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(state.value)}${message}`;
    
        window.open(facebookUrl, '_blank');
    }   

    const handleTwitterShare = () => {
        const twitterUrl = 	`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${state.desc} ${state.value}`)}`;
        window.open(twitterUrl, '_blank'); 
    }   

    return (
        <section>
            <button className='btn-modal' onClick={toggleModal}>
            <svg  className="share-icon-button" viewBox="-1 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                <title>share</title>
                <defs>
                </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage">
                    <g id="Icon-Set" sketchtype="MSLayerGroup" transform="translate(-312.000000, -726.000000)" fill="#be9e44">
                    <path d="M331,750 C329.343,750 328,748.657 328,747 C328,745.343 329.343,744 331,744 C332.657,744 334,745.343 334,747 C334,748.657 332.657,750 331,750 L331,750 Z M317,742 C315.343,742 314,740.657 314,739 C314,737.344 315.343,736 317,736 C318.657,736 320,737.344 320,739 C320,740.657 318.657,742 317,742 L317,742 Z M331,728 C332.657,728 334,729.343 334,731 C334,732.657 332.657,734 331,734 C329.343,734 328,732.657 328,731 C328,729.343 329.343,728 331,728 L331,728 Z M331,742 C329.23,742 327.685,742.925 326.796,744.312 L321.441,741.252 C321.787,740.572 322,739.814 322,739 C322,738.497 321.903,738.021 321.765,737.563 L327.336,734.38 C328.249,735.37 329.547,736 331,736 C333.762,736 336,733.762 336,731 C336,728.238 333.762,726 331,726 C328.238,726 326,728.238 326,731 C326,731.503 326.097,731.979 326.235,732.438 L320.664,735.62 C319.751,734.631 318.453,734 317,734 C314.238,734 312,736.238 312,739 C312,741.762 314.238,744 317,744 C318.14,744 319.179,743.604 320.02,742.962 L320,743 L326.055,746.46 C326.035,746.64 326,746.814 326,747 C326,749.762 328.238,752 331,752 C333.762,752 336,749.762 336,747 C336,744.238 333.762,742 331,742 L331,742 Z" id="share" sketchtype="MSShapeGroup">
                    </path>
                    </g>
                </g>
            </svg>
            </button>
            {modal && (
            <div>
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h2>{name}</h2>
                    <p>{descripcionAcortada}</p>
                    <img src={image} alt="" />
                    <div className='display-copies'>
                        <input value={state.value} className='input-disabled' readOnly/>
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
                    <button className='close-modal' onClick={toggleModal}>
                    <svg className="custom-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5" strokeLinecap="round"/>
                        </g>
                    </svg>
                    </button>
                </div>
            </div>
            )}
            
        </section>
    );
};

export default ShareButton;