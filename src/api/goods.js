import axios from '@/libs/axios.request'

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
/**
 * 分类商品
 * @param token
 * @param id
 */
export const searchCategory = (token,id) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/search/searchGoods?categoryIds='+id
    });
}
/**
 * 单商品详情页
 * @param token
 * @param id
 */
export const getGoodsDetail = (token,id) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/goods/get/goods?id='+id
    });
}
/**
 * 添加购物车
 * @param token
 * @param data
 */
export const addGoodsShops = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/single/add'
    });
}

export const getGoodsShopsCount = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: '/api/u/cart/single/list'
    });
}
