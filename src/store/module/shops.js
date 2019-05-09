import {subGoodsShopsList,subGoodsTaoShopsCount} from '@/api/goods'
import {  getToken } from '@/libs/util'

export default {
    state: {
        shops:[],
        s:[]
    },
    mutations: {
        setShops(state,shops){
          state.shops=shops
        },
        setTaos(state,s){
            state.s=s
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
        },
        setSubTaoGoodsShopsList({commit},data){
            return new Promise((resolve, reject) =>{

                subGoodsTaoShopsCount(getToken('token'),data).then(res=>{
                    if(res.code=='OK'){
                        commit('setTaos', res)
                        resolve(res)
                    }else {
                        reject(res)
                    }

                })
            })
        }

    }
}
