<template>
    <div class="main">
        <div class="nav"><img :src="dao" alt="">表格上传与下载</div>
        <div >
            <div style="float: left">
                <el-upload
                        ref="upload"
                        action="string"
                        list-type="picture-card"
                        :auto-upload="false"
                        :http-request="handlePictureCardPreview"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-button type="primary" @click="sub" style="margin: 5px 0">上传</el-button>
            </div>

            <el-button type="primary" @click="dowlow" style="float: right">下载模板</el-button>
        </div>

        <p style="clear: both;"></p>
        <div class="footer">
            <p>规格说明</p>
            <ul>
                <li>
                    1. 康美药业自创立以来始终肩负将民族传统中医药 <strong>发扬光大、开创人类生命健康事业的时代责任和神圣使命</strong>，秉持发 现才能发明，发明才有发展的理念，致力于西药研发、生物科技、现代中药融合发展的创新与开拓。






                </li>
                <li> 2.创新才能创造 创造才有创业创新才能创造，创造才有创业。康美以哲学智慧融入企业文化，经创新精神培养企业理念，以科学创造推动事业发展。</li>
                <li>3.诚实才能诚信 诚信才有成功。<strong>“成人达己，成己达人”</strong>。康美人深深懂得，只有成就人类的健康，成全社会的和谐，才能成功康美的事业。</li>
                <li>4.善良才能善为 善为才有善报“心做良田，百世耕之有余”，康美人以和谐之心视物，以博爱之心待人。</li>
                <li>5. <strong>“用爱感动世界，用心经营健康”</strong>        ，这是康美的企业理念，也是康美员工的坚定信念。</li>
                <li>6.尽心才能尽力 尽力才有进步尽心才能尽力，尽力才有进步。</li>
                <li>7.吸收汲取一切古今中外的人类自然科学和社会科学的文明营养， <strong>心系万众健康，立志医药济世</strong>，成就百年大业。</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getdownloadTemplate} from '@/api/exit'
    import axios from 'axios'
    import {getToken} from '@/libs/util'
    export default {
        data(){
            return{
                dao:require('../assets/2E6208CD-1AA3-4947-9798-E653C4289E11@1x.png'),
            }
        },
        created(){

        },
        methods:{
            handlePictureCardPreview(param){
                console.log(param)
                const formData = new FormData()
                formData.append('file', param.file)

                axios({
                    method:'post',
                    data:formData,
                    headers:{
                        'Authorization':'Bearer '+getToken('token')
                    },
                    url:'/api/api/u/cart/importForcartData'
                }).then(res=>{
                    if(res.data.code=='OK'){
                        this.$router.push({name:'mobans'})
                    }

                    console.log(res)
                })

            },
            dowlow(){
                getdownloadTemplate(getToken('token')).then(res=>{
                    console.log(res)

                })
            },
            sub(){
                this.$refs.upload.submit();
            }
        }
    }
</script>
<style>
    .el-upload-list.el-upload-list--picture-card{
        display: none;
    }
</style>
<style scoped lang="less">

.main{
    background-color: #fff;
    padding:0 30px;
    .nav{
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin: 20px 0;

    }
    .footer{
        margin: 40px 0;
        p{
            border-left: 4px solid rgb(38, 183, 188);
            padding-left: 15px;
            color: rgba(51, 51, 51, 1);
            font-size: 18px;

        }
        ul{
            padding-left: 15px;
            li{
                line-height: 28px;
                font-size: 14px;
            }
        }
    }
}
</style>
