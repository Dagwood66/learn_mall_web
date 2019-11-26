import axios from "axios"

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // 跳转登陆
    if (error.response && error.response.status === 401) {
        window.vm.$router.push({
            path: "/login",
            query: {
                ...window.vm.$route.query,
                backUrl: window.vm.$route.path
            },
        })
    }
    return Promise.reject(error);
});

export function isLogin() {
    return axios.get("/api/isLogin");
}

export function loginOut() {
    return axios.get("/api/loginOut")
}