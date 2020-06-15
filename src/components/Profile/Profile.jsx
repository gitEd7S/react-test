import React from 'react'
import Banner from './Banner/Banner'
import User from './User/User'
import NewPost from './NewPost/NewPost'
import './Profile.css'
import { ProfileForm } from './ProfileForm'

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
    const onAddPost = (values) => {
        props.addNewPost(values.post)
    }
    return (
        <div>
            <Banner />
            <User
                data={props.data.userProfile}
                status={props.data.status}
                updateStatus={props.updateStatus}
            />
            <div className="main__creacte-post create-post">
                <span className="create-post__title">My post</span>
                <ProfileForm onSubmit={onAddPost} />
            </div>
            <div className="main__posts">{CreateNewPost}</div>
        </div>
    )
}

export default Profile
