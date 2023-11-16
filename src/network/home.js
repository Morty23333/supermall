import {request} from "../../../learnvuerouter/src/network/request.js"

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}