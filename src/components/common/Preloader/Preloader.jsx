import React from 'react';
import imgGifLoader from '../../../assets/images/loader.gif';

const Preloader = () => {
    return(
        <span className="loader">
            <img src={imgGifLoader} />
        </span>
    )
}

export default Preloader;