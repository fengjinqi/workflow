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
export const searchCategory = (token,id,pageIndex,pageSize,val) =>{

    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/search/searchGoods?categoryIds=${id}&pageIndex=${pageIndex}&pageSize=${pageSize
        }&keyword=${val}`
    });
}
/**
 * 单品搜索
 * @param token
 * @param id
 * @param pageIndex
 * @param pageSize
 * @param val
 */
export const searchCategorys = (token,id,pageIndex,pageSize,val) =>{

    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/search/searchGoods?categoryIds=${id}&pageIndex=${pageIndex}&pageSize=${pageSize
            }&keyword=${val}`
    });
}
/**
 * 套餐搜索
 * @param token
 * @param id
 * @param pageIndex
 * @param pageSize
 * @param val
 */
export const searchTaaoCategorys = (token,id,pageIndex,pageSize,val) =>{

    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },
        url: `/api/u/search/searchPackageGoods?categoryIds=${id}&pageIndex=${pageIndex}&pageSize=${pageSize
            }&keyword=${val}`
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
 * 单品添加购物车
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
 * 套餐添加购物车
 * @param token
 * @param data
 */
export const addTaoGoodsShops = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: '/api/u/cart/add/packageCart'
    });
}
/**
 * 套餐购物车列表
 * @param token
 */
export const getGoodsTaoShopsCount = (token) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: '/api/u/cart/getPackageCartList'
    });
}
/**
 * 套餐商品详情
 * @param token
 * @param id
 */
export const getGoodsTaoShopsDetail = (token,id) =>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: '/api/u/goods/get/packageGoods?id='+id
    });
}
/**
 * 修改套餐购物车数量
 * @param token
 * @param id
 * @param val
 */
export const setGoodsTaoShopsCount = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: '/api/u/cart/update/packageCart'
    });
}
/**
 * 删除套餐购物车
 * @param token
 * @param data
 */
export const delGoodsTaoShopsCount = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/deletePackageCart'
    });
}
/**
 * 套结算
 * @param token
 * @param data
 */
export const subGoodsTaoShopsCount = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/cart/package/single/arithmetic'
    });
}
/**
 * 套提交
 * @param token
 * @param data
 */
export const addTaoGoodsShopst = (token,data) =>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data:data,
        url: '/api/u/orders/combo/affirm'
    });
}


/**
 * 购物车单列表数量
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
 * 修改单购物车数量
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
/**
 * 单品结算
 * @param token
 * @param data
 */
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

        url: '/api/u/address/list?status=1'
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
