<template>
  <div>
    <dialog-slot>
      <!-- 对应dialog-slot.vue组件中的slot插槽,会执行slot点击事件显示对话框 -->
      <el-button type="primary">打开对话框</el-button>
    </dialog-slot>
  </div>
</template>
<script>
import dialogSlot from '../components/dialog-slot'
export default {
  components:{
    dialogSlot
  },
  data(){
    return{

    }
  }
}
</script>
