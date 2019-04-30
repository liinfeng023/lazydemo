<template>
  <div>
    <dialog-form-slot>
      <el-button type="primary">打开表单对话框</el-button>
    </dialog-form-slot>
  </div>
</template>

<script>
import dialogFormSlot from '../components/dialog-form-slot';
export default {
  components:{
    dialogFormSlot
  },
  data(){
    return{

    }
  }
}
</script>

