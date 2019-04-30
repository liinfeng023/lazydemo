<template>
    <el-menu :default-openeds="['1']" class="el-menu-vertical-demo" router default-active="/CarouselTable" background-color="#545c64"  text-color="#fff" active-text-color="#409EFF">
        <el-submenu v-for="(item,index) in navMenuArr" :index="item.index" :key='index' :value="item.index" style="width:200px;">
            <template  slot="title">
                <i :class="item.menuIcons"></i>
                <span>{{item.menuName}}</span>
            </template>
            <el-menu-item v-for="(item,index) in item.childrenMenu" :index="item.index" :key="index" :value="item.index">
                {{item.menuName}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
import Nav from '../until/navMenu.js'
export default {
    name:'ElMenuAside',
    data(){
        return{
            navMenuArr:[]
        }
    },
    created(){
        this.navMenuArr = Nav.navMenu
    }
}
</script>