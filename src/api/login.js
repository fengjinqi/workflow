import axios from '@/libs/axios.request'

/**
 * 获取验证码
 * @param code
 */
export const getCode = (code)=>{
    return axios({
        method: 'post',
        data: code,
        url: '/api/passport/sendCode'
    });
}
/**
 * 登录
 * @param data
 * @constructor
 */
export const Login = (data) =>{
    return axios({
        method:'post',
        data:data,
        url:'/api/passport/signIn'
    })
}
