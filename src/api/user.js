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
 * 修改地址
 * @param token
 * @param data
 */
export const updateaddrs = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: `/api/u/address/update`
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
 * 获取基础医院列表
 * @param token
 */
export const getHospitalLists = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/hospital/setting/list`
    });
}
/**
 * 删除医院
 * @param token
 * @param id
 */
export const delHospitalList = (token,id) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:{id:id},
        url: `/api/u/hospital/delete/${id}`
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
/**
 * 修改密码
 * @param token
 * @param data
 */
export const putPass = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: '/api/u/user/update/password'
    });
}
/**
 * 购物车数量
 * @param token
 */
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
