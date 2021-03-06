import axios from '@/libs/axios.request'
import axioss from 'axios'
import config from '@/config/index'
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
export const getRepaymentList = (token,status=1,PageIndex=1,pageSize=20)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token
        },

        url: `/api/u/user/repaymentList?status=${status}&pageIndex=${PageIndex}&pageSize=${pageSize}`
    });
}
/**
 * 申请
 * @param token
 * @param data
 */
export const postrepayment = (token,data)=>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,
            'Content-Type':'application/json;charset=UTF-8'
        },
        data:data,
        url: `/api/u/user/create/repayment`
    });
}
/**
 * 导入上传
 * @param token
 * @param data
 */
export const importForcartData = (token,data)=>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,

        },
        data,
        url: `/api/u/cart/importForcartData`
    });
}
/**
 * 下载购物车模板
 * @param token
 */
export const getdownloadTemplate = (token)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/common/downloadTemplate`
    });
}
/**
 * redis中获取excel导入的商品数据
 * @param token
 */
export const getImportCartData = (token)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/cart/getImportCartData/`
    });
}
/**
 * 删除导入的商品数据
 * @param token
 * @param data
 */
export const deleteImportCommodity = (token,data)=>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,
        },
        data,
        url: `/api/u/cart/deleteImportCommodity`
    });
}
/**
 * 导入的商品数据到购物车
 * @param token
 * @param data
 */
export const importCommodityFotCart = (token,data)=>{
    return axios({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,
        },
        data,
        url: `/api/u/cart/importCommodityFotCart`
    });
}
/**
 * 获取订单服务报告状态
 * @param token
 */
export const gettradeReport = (token,pageIndex=1,pageSize=20,reportServiceStatus)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/report/query/tradeReport?pageIndex=${pageIndex}&pageSize=${pageSize}&reportServiceStatus=${reportServiceStatus}`
    });
}
/**
 * 获取订单各个服务报告填写信息
 * @param token
 * @param tradeSn
 */
export const report = (token,tradeSn)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/report/query/report?tradeSn=${tradeSn}`
    });
}
/**
 * 获取订单服务报告医疗信息
 * @param token
 * @param tradeSn
 */
export const medicalInfo = (token,tradeSn)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/report/query/medicalInfo?tradeSn=${tradeSn}`
    });
}
/**
 * 新增报告类型信息
 * @param token
 */
export const serveAdd = (token,data)=>{
    return axioss({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,
        },
        data,
        url: config.baseUrl+`/api/u/report/serve/add`
    });
}
/**
 * 新增产品分类报告
 * @param token
 * @param data
 */
export const brandAdd = (token,data)=>{
    return axioss({
        method: 'post',
        headers:{
            'Authorization':'Bearer '+token,
        },
        data,
        url:config.baseUrl+ `/api/u/report/brand/add`
    });
}


/**
 * 查询未开票
 * @param token
 * @param pageIndex
 * @param type
 * @param hospitalName
 */
export const getordesrs = (token,pageIndex,type,hospitalName,pageSize)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/invoice/search/ordesrs?pageIndex=${pageIndex}&type=${type}&hospitalName=${hospitalName}&pageSize=${pageSize}`
    });
}
/**
 * 开票查询
 * @param token
 * @param type
 * @param makeInvoiceType
 */
export const getquery = (token,type,makeInvoiceType)=>{
    return axios({
        method: 'get',
        headers:{
            'Authorization':'Bearer '+token,
        },
        url: `/api/u/invoice/makeInformation/query?type=${type}&makeInvoiceType=${makeInvoiceType}`
    });
}
