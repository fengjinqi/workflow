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
 * 城市
 * @param token
 */
export const getaddrs = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/system/version/config?version=1.1'
    });
}
/**
 * 创建地址
 * @param token
 * @param data
 */
export const addaddrs = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/address/add'
    });
}
/**
 *删除地址
 * @param token
 * @param data
 */
export const removeaddrs = (token,data,id) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: `/api/u/address/delete/${id}`
    });
}
/**
 * 获取医院列表
 * @param token
 */
export const getHospitalList = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/hospital/list`
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
