import React from 'react';
import Banner from './Banner/Banner';
import User from './User/User';
import CreatePost from './CreatePost/CreatePost';
import NewPost from './NewPost/NewPost';

import './Profile.css';

const Profile = () => {
    return (
        <>
            <Banner />
            <User />
            <CreatePost />
            <div className="main__posts">
                <NewPost name="Hey, why nobody love me ??" like="2" />
                <NewPost name="How are you ??" like="5" />
            </div>
        </>
    );
}

export default Profile;
