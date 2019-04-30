<template>
  <div>
    <div @click="showDialog">
      <slot></slot>
    </div>
     <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogFormVisible"
        width="30%"
        :before-close="handleClose">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="活动名称" prop="name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option v-for="item in options" :label="item.label" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeDialog('form')">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  name:'dialogFormSlot',
  data(){
    return{
      dialogTitle:'收货地址',
      form: {
        name: '',
        region: '',
      },
      options:[
        {label:'北京',value:1},
        {label:'成都',value:2},
        {label:'上海',value:3}
      ],
      formLabelWidth: '120px',
      dialogFormVisible:false,
      rules:{
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
      }
    }
  },
  methods:{
    showDialog(){
      this.dialogFormVisible = true
    },
    handleClose(){
      this.$confirm('确认关闭？')
        .then(_ => {
          this.closeDialog('form')
          done();
        }).catch(_ => {});
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    closeDialog(formName){
      this.dialogFormVisible = false
      this.$refs[formName].resetFields();
    }
  }
}
</script>
