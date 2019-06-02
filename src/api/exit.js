import axios from '@/libs/axios.request'

export const getbankInfo = (token)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: `/api/u/user/bankInfo`
    });
}
/**
 *款项结算
 * @param token
 * @param status
 * @param PageIndex
 */
export const getRepaymentList = (token,status=1,PageIndex=1)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: `/api/u/user/repaymentList?status=${status}&pageIndex=${PageIndex}`
    });
}

export const postrepayment = (token,data)=>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token
        },
        data,
        url: `/api/u/user/create/repayment`
    });
}
