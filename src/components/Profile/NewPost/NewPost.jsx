import React from 'react';
import './NewPost.css';

const NewPost = (props) => {
    return(
        <div className="main__new-post new-post">
            <picture className="new-post__picture">
                <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" alt="" className="new-post__image"/>
            </picture>
            <div className="new-post__content">
                <span className="new-post__text">{ props.name }</span>
                <span className="new-post__like">Like: { props.like }</span>
            </div>
        </div>
    );
};

export default NewPost;
