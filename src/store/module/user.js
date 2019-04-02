import {
    login,
    getUserInfo,
} from '@/api/user'
import {getGoodsShopsCount} from '@/api/goods'
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
        shops:[]

    },
    mutations: {
        setBirthDate(state, birthDate) {
            state.birthDate = birthDate
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
        setShops(state,shops){
          state.shops=shops
        },
        setEmail(state, email) {
            state.email = email
        },
        setAccess(state, access) {
            state.access = access
        },

        setHasGetInfo(state, status) {
            state.hasGetInfo = status
        },
        setMessageCount(state, count) {
            state.unreadCount = count
        },
        setMessageUnreadList(state, list) {
            state.messageUnreadList = list
        },
        setMessageReadedList(state, list) {
            state.messageReadedList = list
        },
        setRead(state, list) {
            state.read = list
        },
        setMessageTrashList(state, list) {
            state.messageTrashList = list
        },
        updateMessageContentStore(state, {msg_id, content}) {
            state.messageContentStore[msg_id] = content
        },
        moveMsg(state, {from, to, msg_id}) {
            const index = state[from].findIndex(_ => _.msg_id === msg_id)
            const msgItem = state[from].splice(index, 1)[0]
            msgItem.loading = false
            state[to].unshift(msgItem)
        }
    },
    getters: {

        messageUnreadCount: state => state.unreadCount,
        messageReadedCount: state => state.read,
        messageTrashCount: state => state.messageTrashList.length
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
                console.log(state)
                try {
                     getUserInfo(state.token).then(res => {
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
                        }
                        /*else if(data.code=='Unauthorized'){
                            commit('setToken', '')
                            this.$router.push({
                                path:'/'
                            })
                        }*/
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },
        getGoodsShopsCounts({state,commit}){
            return new Promise((resolve, reject) =>{
                getGoodsShopsCount(state.token).then(res=>{

                    if(res.code=='OK') {
                        commit('setShops', res.data)
                    }
                })
            } )
        }
    }
}
