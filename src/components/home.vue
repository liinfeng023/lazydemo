<template>
  <form name="form1">
		<p>
			加密字符串: <input type="text" name="sm3input" value="" size="100" /><br />
			<el-button type="primary" @click="doSM3">加密</el-button><br /> 加密结果: <input
				type="text" name="sm3key" value="" size="100" /><br />
		</p>
	</form>
</template>

<script>
export default {
  name:'Home',
  methods:{
    doSM3() {
      console.log(132)
      var f1 = document.form1;
      var msg = f1.sm3input.value;
      var msgData = CryptoJS.enc.Utf8.parse(msg);
      var md;
      var sm3keycur = new SM3Digest();
      msgData = sm3keycur.GetWords(msgData.toString());
      console.log(msgData);
      sm3keycur.BlockUpdate(msgData, 0, msgData.length);
      console.log(msgData);
      var c3 = new Array(32);
      sm3keycur.DoFinal(c3, 0);
      var hashHex = sm3keycur.GetHex(c3).toString();
      console.log(hashHex);
      f1.sm3key.value = hashHex.toUpperCase();
	  }
  }
}
</script>