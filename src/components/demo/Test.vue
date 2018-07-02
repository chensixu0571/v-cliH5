<template>
  <div id="middleBox">
        Hello world!
      <div>
       <img  src="@/assets/image/logo.png" width='240' height='240'>
      </div>
      <div class="bgImgBox"></div>
  </div>
</template>
<script>
import "../../../static/js/mescroll.m";
import "../../../static/js/mescroll.min.css";

export default {
  name: 'middleBox',
  components:{

  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
#middleBox{
  margin:auto;
  text-align: center;
  .bgImgBox{
      background:url('src/assets/image/downImg.png') no-repeat;
      background-size: 100% 100%;
      width:190px;
      height:233px;
      margin:auto;
      text-align: center;
    }
    //下拉组件样式
  .mescroll{
      position: fixed;
      top: 0px;
      bottom: 0;
      height: auto;
      background:#F3F5F9;
      padding:0 10px;
      box-sizing: border-box;
  }
}

</style>
