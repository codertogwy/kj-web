import axios from "/@/config/axios";
import {ElMessage} from "element-plus";

const post = function (url: any, data: any, callback: any) {
    return axios({
        url, data, method: 'post'
    }).then(res => {
        if (callback)
            callback(res)
    }).catch(err => {
        console.error(err)
        ElMessage.error("服务出错，请联系管理员！")
    })
}
const get = function (url: any, data: any, callback: any) {
    return axios({
        url, data, method: 'get'
    }).then(res => {
        if (callback)
            callback(res)
    }).catch(err => {
        console.error(err)
        ElMessage.error("服务出错，请联系管理员！")
    })
}

export {post, get}
