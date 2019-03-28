import axios from 'axios'
//import config from '@/config'
export const getCode = (code) =>{
    return axios({
        method: 'get',
        url: '/api/jcaptcha?r='+code,
    });
}

export const Login = (data) =>{
    // let data ={
    //     username:username,
    //     password:password,
    //     code:code
    // }
    return axios({
        method:'post',
        data:data,
        url:'/api/api/passport/login'
    })
}