<template>
  <div>
      	<el-button type="primary" @click="qrCode()" style="margin-left: 20px">生成二维码</el-button>
		<el-dialog title="支付" :visible.sync="dialogVisible" width="20%">
            <div id="qrcode"></div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
	
  </div>
</template>

<script>
/* eslint-disable */
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {
        dialogVisible: false     
    };
  },
  props: {
      
  },

  components: {
    
  },
  computed: {
    
  },
  mounted() {
    
  },
  beforeDestory() {
    
  },
  methods: {
	qrCode() {
		this.dialogVisible = true;
		this.$nextTick(function () {
			document.getElementById("qrcode").innerHTML = "";
			let qrcode = new QRCode("qrcode", {
				width: 150,
				height: 150,
				text: "https://www.jimmywu.top",
				colorDark: "#109dff",
				colorLight: "#d9d9d9"
			});
		});
	}
  },
}

</script>
<style scoped>
    
</style>