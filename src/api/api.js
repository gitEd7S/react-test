import * as axios from 'axios';

const instance = axios.create({

})

export const getUsers = (currentPage, pageSize) => {
    return (
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        })
        .then(responce => responce.data)
    )
}

export const getUserProfile = (id) => {
    return (
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        .then(responce => responce.data)
    )
}

export const getAuth = () => {
    return (
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
        .then(responce => responce.data)
    )
}
