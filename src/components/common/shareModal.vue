<template>
  <div id="publicBox">
    <div  @click="hideModal()" v-bind:class="[{'modal-show': shareShow}, 'share-modal']">
      <div class="text">
        <p>1.点击右上角<span>[...]</span></p><br>
        <p>
          2.选择<span>[发送给朋友]</span><br>
          <div>或<span>[分享到朋友圈]</span></div>
        </p>
      </div>
      <img src="@/assets/image/share_arrow.png">
    </div>
  </div>
</template>
<script>
export default {
  props: ['shareShow'],
  name: 'publicBox',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    hideModal() {
      this.$emit('ok')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
#publicBox{
  .share-modal{
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
    top: 0;
    left: 0;
    z-index: 200;
    .text {
      position: absolute;
      left: 70px;
      top: 184px;
      font-size:16px;
      z-index: 999;
      color: white;
      span{
        color:#FDAD2E;
      }
      div{
        padding-left:13px;
      }
    }
    img {
      position: absolute;
      right: 10px;
      top: 40px;
      width: 142px;
      height: 160px;
      z-index: 999;
    }
  }
  .modal-show{
    display: block;
  }
}
</style>
