<template>
    <el-menu :default-openeds="['1']" class="el-menu-vertical-demo" router default-active="/CarouselTable" background-color="#545c64"  text-color="#fff" active-text-color="#409EFF">
        <el-submenu index="1" style="width:200px;">
            <template  slot="title"><i class="el-icon-message"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2" style="width:200px;">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3" style="width:200px;">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name:'ElMenuAside',
    data(){
        return{

        }
    }
}
</script>