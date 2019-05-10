import axios from '@/libs/axios.request'

/**
 * 订单列表
 * @param token
 * @param index
 * @param type
 * @param keyword
 * @param status
 * @param startTime
 * @param endTime
 */
export const getOrder = (token,index=1,type=1,keyword='',status='',startTime='',endTime='') =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/search/searchOrders?pageIndex=${index}&type=${type}&keyword=${keyword}&status=${status}&startTime=${startTime}&endTime=${endTime}`
    });
}
/**
 * 订单详情页
 * @param token
 * @param id
 */
export const getOrderDetail = (token,id) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/orders/getTrade?id=${id}`
    });
}
/**
 * 退
 * @param token
 * @param data
 */
export const tuiOrderDetail = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: `/api/u/orders/orders/refund`
    });
}
/**
 * 连台补货
 * @param token
 * @param data
 */
export const replenishment = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: `/api/u/orders/replenishmentTrade`
    });
}
/**
 * 删除
 * @param token
 * @param data
 */
export const removeOrderDetail = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: `/api/u/orders/orders/cancel`
    });
}
/**
 * 确认订单
 * @param token
 * @param data
 */
export const queRen = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: `/api/u/orders/immediate/settlement`
    });
}
/**
 * 确认密码
 * @param token
 * @param data
 */
export const pass = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: `/api/u/orders/verification/pay/password`
    });
}
/**
 * 手术完成
 * @param token
 * @param id
 */
export const finish = (token,id) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:{id:id},
        url: `/api/u/orders/operation/finish/${id}`
    });
}
/**
 * 确认收货
 * @param token
 * @param data
 */
export const receiving = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: `/api/u/orders/affirm/receiving`
    });
}
