<template >
    <div class="abc">
        gafasdfa
    </div>
   <!-- <div>
       <div class="login">
           <img src="../../../static/img/logo.png" alt="" style="margin-top:5%">
           <div>
                <el-input v-model="username" placeholder="请输入用户名" style="width:70%;margin-top:5%"></el-input>
                <el-input v-model="password" placeholder="请输入密码" style="width:70%;margin-top:5%"></el-input>
           </div>
           <el-button type="primary" size="small" style="width:70%;margin-top:5%" @click="getLogin"><i class="fa fa-spinner fa-pulse" v-if="loading"></i>&nbsp;&nbsp;{{loginMsg}}</el-button>
       </div>
   </div> -->
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            loading:false,
            loginMsg:'登陆'
        }
    },
    methods:{
        getLogin(){
            let vm = this
            if(vm.username === '123' && vm.password === '123'){
                vm.loading = true
                vm.loginMsg = '登陆中'
                vm.$router.push({path:'/Aside'})
                console.log("登陆成功，即将跳转！")
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/loginStyle.scss';
</style>

