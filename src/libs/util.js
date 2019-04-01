import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 })
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

// export const setToken = (token) =>{
//     sessionStorage.setItem(TOKEN_KEY, token);
// }
// export const getToken = () => {
//     const token = sessionStorage.getItem(TOKEN_KEY)
//     if (token) return token
//     else return false
// }
