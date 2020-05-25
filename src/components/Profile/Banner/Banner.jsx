import React from 'react';
import './Banner.css';

const Banner = () => {
    return(
        <div className="main__banner banner">
            <picture className="banner__picture">
                <img src="https://www.starpool.com/wp-content/uploads/2019/06/Sauna-Outdoor-4.jpg" alt="" className="banner__image"/>
            </picture>
        </div>
    );
};

export default Banner;
