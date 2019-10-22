import axios from "axios"

export function isLogin() {
    return axios.get("/api/isLogin");
}

export function loginOut() {
    return axios.get("/api/loginOut")
}