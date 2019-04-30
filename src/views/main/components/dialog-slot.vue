<template>
    <div>
      <!-- 使用vue插槽 -->
      <div @click="showDialog">
        <slot></slot>  
      </div>
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>{{dialogMsg}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
  name:'dialogSlot',
  data(){
    return{
      dialogTitle:'提示',
      dialogVisible : false,
      dialogMsg:'这是一段信息'
    }
  },
  methods:{
    showDialog(){
      this.dialogVisible = true
    },
    handleClose(done){
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        }).catch(_ => {});
    }
  }
}
</script>
