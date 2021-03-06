import {
    login,
    getUserInfo,
    getpayAmount
} from '@/api/user'
import {getGoodsShopsCount,getGoodsTaoShopsCount} from '@/api/goods'
import {
    Login
} from '@/api/login'
import { setToken, getToken } from '@/libs/util'

export default {
    state: {
        token:'',
        birthDate: '',
        idCard: '',
        licenseImage: '',
        medicalDeviceLicenseImage: '',
        mobile: '',
        phone: '',
        position: '',
        powerAttorneyImage: '',
        sex: '',
        goods:{
            list: []
        },
        tao:{
            definedPackageResponse: [],
            standardPackageResponse: []
        },
        afterSaleAmount:[],
        creditAmount:0,
        deposit:0,
        giveAmount:0,
        rebateAmount:0,
        p:'',
        users:'',
        types:1,

    },
    mutations: {
        setTypes(state,types){
            state.types=types
        },
        setP(state,p){
            state.p=p
        },
        setBirthDate(state, birthDate) {
            state.birthDate = birthDate
        },
        setTao(state,tao){
            state.tao=tao
        },
        setToken(state, token) {
            state.token = token
            setToken(token)
        },
        setIdCard(state, idCard) {
            state.idCard = idCard
        },
        setLicenseImage(state, licenseImage) {
            state.licenseImage = licenseImage
        },
        setUsers(state, users) {
            state.users = users
        },
        setMedicalDeviceLicenseImage(sate, medicalDeviceLicenseImage) {
            sate.medicalDeviceLicenseImage = medicalDeviceLicenseImage
        },
        setMobile(sate, mobile) {
            sate.mobile = mobile
        },
        setPhone(sate, phone) {
            sate.phone = phone
        },
        setPosition(state, position) {
            state.position = position
        },
        setPowerAttorneyImage(state, powerAttorneyImage) {
            state.powerAttorneyImage = powerAttorneyImage
        },
        setSex(state, sex) {
            state.sex = sex
        },
        setGoods(state,shops){
          state.goods=shops
        },
        setAfterSaleAmount(state,afterSaleAmount){
          state.afterSaleAmount=afterSaleAmount
        },
        setCreditAmount(state,creditAmount){
          state.creditAmount=creditAmount
        },
        setDeposit(state,deposit){
          state.deposit=deposit
        },
        setgiveAmount(state,giveAmount){
          state.giveAmount=giveAmount
        },
        setRebateAmount(state,rebateAmount){
          state.rebateAmount=rebateAmount
        },
    },
    getters: {
        cartNum(state){
            return state.goods.list.length+state.tao.standardPackageResponse.length+state.tao.definedPackageResponse.length
        }
    },
    actions: {
        // 登录
        handleLogin({commit}, {userName, code}) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
                Login({
                    userName,
                    code
                }).then(res => {
                    //let data = JSON.parse(res)
                    let data = res
                    commit('setToken', data.data)

                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut({state, commit}) {
            return new Promise((resolve, reject) => {
                // logout(state.token).then(() => {
                //   commit('setToken', '')
                //   commit('setAccess', [])
                //   resolve()
                // }).catch(err => {
                //   reject(err)
                // })
                // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                commit('setToken', '')
                commit('setAccess', [])
                resolve()
            })
        },
        // 获取用户相关信息
        getUserInfo({state, commit}) {
            return new Promise((resolve, reject) => {
                try {
                     getUserInfo(getToken('token')).then(res => {
                        //let  data = JSON.parse(res)
                        let  data = res

                        if(data.code=='OK'){
                            commit('setBirthDate', data.data.birthDate)
                            commit('setIdCard', data.data.idCard)
                            commit('setLicenseImage', data.data.LicenseImage)
                            commit('setMedicalDeviceLicenseImage', data.data.MedicalDeviceLicenseImage)
                            commit('setMobile', data.data.mobile)
                            commit('setPhone', data.data.phone)
                            commit('setPosition', data.data.position)
                            commit('setPowerAttorneyImage', data.data.powerAttorneyImage)
                            commit('setSex', data.data.sex)
                            commit('setUsers', data.data)
                        }
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },
        getAccem({state,commit}){
            let _this = this
            return new Promise((resolve, reject) => {
                getpayAmount(getToken('token')).then(res=>{

                    if(res.code=='OK') {
                        commit('setAfterSaleAmount', res.data)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        getGoodsShopsCounts({state,commit}){
            /**
             * 单品购物车列表
             */
            return new Promise((resolve, reject) =>{
                getGoodsShopsCount(getToken('token')).then(res=>{

                    if(res.code=='OK') {
                        console.log(res.data)
                        commit('setGoods', res.data)
                    }
                })
            } )
        },
        getGoodsTaoShopsCounts({state,commit}){
            /**
             * 套餐购物车列表
             */
            return new Promise((resolve, reject) =>{
                getGoodsTaoShopsCount(getToken('token')).then(res=>{

                    if(res.code=='OK') {
                        commit('setTao', res.data)
                    }
                })
            } )
        }
    }
}
