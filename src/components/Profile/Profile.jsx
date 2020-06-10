import React from 'react'
import Banner from './Banner/Banner'
import User from './User/User'
import NewPost from './NewPost/NewPost'
import './Profile.css'

const Profile = (props) => {
    const CreateNewPost = props.data.posts.map((post) => {
        return (
            <NewPost
                key={post.id}
                picture={props.data.userPicture}
                message={post.message}
                countLike={post.countLike}
            />
        )
    })
    const onChangeText = (e) => {
        props.updateNewPostText(e.target.value)
    }
    const onAddPost = () => {
        props.addNewPost()
    }
    return (
        <div>
            <Banner />
            <User data={props.data.userProfile} />
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
                        type="button"
                        onClick={ onAddPost }
                        className="create-post__submit"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="main__posts">{CreateNewPost}</div>
        </div>
    )
}

export default Profile
