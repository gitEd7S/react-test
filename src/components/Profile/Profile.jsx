import React from 'react';
import Banner from './Banner/Banner';
import User from './User/User';
import NewPost from './NewPost/NewPost';
import './Profile.css';
import {newPostAction, textAction} from '../../redux/profile/reducers'

const Profile = (props) => {

    const CreateNewPost = props.data.posts.map((post, key) => {
        return (
            <NewPost
                key={key}
                picture={props.data.userPicture}
                message={post.message}
                countLike={post.countLike}
            />
        );
    })

    const addNewPost = (e) => {
        e.preventDefault()
        props.dispatch(newPostAction());
    }

    const onChangeText = (e) => {
        const action = textAction(e.target.value);
        props.dispatch(action)
    }

    return (
        <div>
            <Banner />
            <User />
            <div className="main__creacte-post create-post">
                <span className="create-post__title">My post</span>
                <form action="#" className="create-post__form">
                    <textarea
                        name="post"
                        className="create-post__textarea"
                        placeholder="Create new post"
                        onChange={onChangeText}
                        value={props.data.messageTextarea}
                    />
                    <button
                        type="submit"
                        onClick={ addNewPost }
                        className="create-post__submit"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="main__posts">{CreateNewPost}</div>
        </div>
    );
}

export default Profile;
