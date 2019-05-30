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

export const getRepaymentList = (token,status=1,PageIndex=1)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: `/api/u/user/repaymentList?status=${status}&pageIndex=${PageIndex}`
    });
}
