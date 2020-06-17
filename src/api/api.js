import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '558ed2bb-e4e2-4dbc-a682-f2f52a931637',
    },
})

export const API = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
    },
    getUserProfile (id) {
        return instance.get(`profile/${id}`).then(responce => responce.data)
    },
    getAuth () {
        return instance.get(`auth/me`).then(responce => responce.data)
    },
    postFollow (id) {
        return instance.post(`follow/${id}`, {}).then(responce => responce.data)
    },
    postUnfollow (id) {
        return instance.delete(`follow/${id}`).then(responce => responce.data)
    },
    getStatus (id) {
        return instance.get(`profile/status/${id}`).then(responce => responce.data)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status }).then(responce => responce.data)
    },
    login (email, password, remember = false) {
        debugger
        return instance.post(`auth/login`, { email, password, remember }).then(responce => responce.data)
    },
    logout () {
        return instance.delete(`auth/login`).then(responce => responce.data)
    },
}
