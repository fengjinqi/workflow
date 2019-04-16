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
 * @param val
 */
export const searchCategory = (token,id,val) =>{

    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/search/searchGoods?categoryIds=${id}&keyword=${val}`
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
/**
 * 购物车列表数量
 * @param token
 */
export const getGoodsShopsCount = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: '/api/u/cart/single/list'
    });
}
/**
 * 修改购物车数量
 * @param token
 * @param id
 * @param val
 */
export const setGoodsShopsCount = (token,id,val) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: '/api/u/cart/single/amount?cartId=' +id+'&amount='+val
    });
}
/**
 * 删除购物车
 * @param token
 * @param data
 * @param id
 */
export const delGoodsShopsCount = (token,data,id) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/deleteCart/'+id
    });
}
export const subGoodsShops = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/single/arithmetic'
    });
}
/**
 * 收货地址
 * @param token
 */
export const getUserAdders = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: '/api/u/address/list'
    });
}


/**
 * 结算
 * @param token
 * @param data
 */
export const subGoodsShopsList = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/single/arithmetic'
    });
}
/**
 * 提交订单
 * @param token
 * @param data
 */
export const addGoodsShopst = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/orders/single/affirm'
    });
}
