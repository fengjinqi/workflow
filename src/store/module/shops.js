import {subGoodsShopsList} from '@/api/goods'
import {  getToken } from '@/libs/util'

export default {
    state: {
        shops:[]
    },
    mutations: {
        setShops(state,shops){
          state.shops=shops
        },
    },
    getters: {
    },
    actions: {
        setSubGoodsShopsList({commit},data){
            return new Promise((resolve, reject) =>{

                subGoodsShopsList(getToken('token'),data).then(res=>{
                    if(res.code=='OK'){
                        commit('setShops', res)
                        resolve(res)
                    }else {
                        reject(res)
                    }

                })
            })
        }

    }
}
