import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 30000
});

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        let token = localStorage.getItem("token");
        config.headers["Authorization"] = "Bearer " + token;
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response;
    },
    function (error) {
        // 对响应错误做点什么
        let { status } = error.response;
        if (status == 401) {
            location.href = "/login";
        } else if (
            status == 404
        ) {
            alert('失败')
        }
        return Promise.reject(error);
    }
);

export default instance;
