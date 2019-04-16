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
