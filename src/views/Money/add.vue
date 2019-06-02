<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li>打款金额 <el-input type="text" v-model="price" placeholder="请输入金额"></el-input></li>
                <li>备注信息 <el-input type="text" v-model="text"></el-input></li>
            </ul>
            上传凭证
            <el-upload
                        ref="img"
                        action="string"
                        :limit="8"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                        :on-success="succ"
                        :http-request="UploadImage"
                    :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        <el-button type="primary" @click="sub" style="margin-left:40px;width: 360px;height: 50px;background-color: #26B7BC;border-color: #26B7BC;">申请</el-button>
    </div>
</template>
<style>
    .el-upload-list__item-delete{
        display: none!important;
    }
</style>
<script>
    import {postrepayment} from '@/api/exit'
    import {getToken} from '@/libs/util'
    import axios from 'axios'
    import $axios from "../../libs/axios.request";
    export default {
        data(){
            return{
               text:'',
                price:'',
                dialogImageUrl: '',
                dialogVisible: false,
                img:[]
            }
        },
        created(){

        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                console.log(this.dialogImageUrl);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            succ(response, file, fileList){
                console.log(response,file, fileList);
            },
            UploadImage(param) {
                const formData = new FormData()
                formData.append('upfile', param.file)
                axios({
                    method:'post',
                    data:formData,
                    headers:{
                        'Authorization':'Bearer '+getToken('token')
                    },
                    url:'/api/api/ueditor?action=uploadimage&encode=utf-8'
                }).then(res=>{
                    console.log(res)
                    if(res.status==200){
                        this.img.push(res.data.url)
                    }
                })
            }          ,
            sub(){
                let a=[]
               this.$refs.img.uploadFiles.map(res=>{
                   a.push(res.raw)
               })
                let obj={
                    amount:this.price,
                    remark:this.text,
                    voucherImage:this.img.join(',')
                }
                console.log(obj)
                postrepayment(getToken('token'),obj).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                        this.$router.push({name:'money'})
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.nav{
    margin: 20px auto;
    padding: 30px 40px;
    font-size: 18px;
    li{
        margin-bottom: 8px;
    }
}

</style>
