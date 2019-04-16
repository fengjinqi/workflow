import axios from '@/libs/axios.request'
export const getCartCount = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/cart/single/list'
    });
}
/**
 * 信息
 * @param token
 */
export const getUserInfo = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/user/getUserInfo'
    });
}
export const getpayAmount = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/user/get/payAmount'
    });
}

/**
 * 首页
 * @param token
 */
export const getIndex = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/index'
    });
}
/**
 * 分类
 * @param token
 */
export const getIndexList = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/category/list'
    });
}

export const searchCategory = (token,id) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/search/searchGoods?categoryIds='+id
    });
}
