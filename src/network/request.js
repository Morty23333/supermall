import axios from 'axios'


export function request(config) {
    
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:7888/api/hy66',
        timeout: 5000
    })

    // axios拦截器

    // 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
        //真正有用的数据
    }, err => {
        console.log(err);
    })
    // 发送真正的网络请求
    return instance(config)
}

