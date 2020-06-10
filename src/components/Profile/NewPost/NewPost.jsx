import React from 'react'
import './NewPost.css'

const NewPost = (props) => {
    return (
        <div className="main__new-post new-post">
            <picture className="new-post__picture">
                <img src={props.picture} alt="" className="new-post__image"/>
            </picture>
            <div className="new-post__content">
                <span className="new-post__text">{ props.message }</span>
                <span className="new-post__like">Like: { props.countLike }</span>
            </div>
        </div>
    )
}

export default NewPost
