import React from 'react';
import './CreatePost.css';

const CreatePost = () => {
    return(
        <div className="main__creacte-post create-post">
            <span className="create-post__title">My post</span>
            <form action="#" className="create-post__form">
                <textarea name="post" className="create-post__textarea" placeholder="Create new post"></textarea>
                <button type="submit" className="create-post__submit">Send</button>
            </form>
        </div>
    );
};

export default CreatePost;
