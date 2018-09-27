<template>
    <el-container class="wrap">
        <el-aside width="200px">
            <el-menu-aside></el-menu-aside>
        </el-aside>
        <el-container class="body_wrap">
            <el-header>

            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import HelloWorld from '../components/HelloWorld'
import ElMenuAside from '../components/Aside'
export default {
    name:'full',
    components:{
        HelloWorld,
        ElMenuAside
    }
}
</script>
<style scoped>
  .el-main {
    background-color: rgba(134, 134, 150, 0.411);
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-aside{
      background: rgb(84, 92, 100);
  }
</style>