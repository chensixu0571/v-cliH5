<template>
  <div id="toast" v-show="show" :class="{'show_modal':timeShow}" >
    <div class="modal-content">
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['text','show'],
  name: 'toast',
  data () {
    return {
      timeShow: false
    }
  },
  mounted () {
  },
  watch : {
    show (val){
      if(val){
        const me = this;
        this.timeShow = true
        var InterValObj = window.setInterval(() => {
          me.timeShow = false
          window.clearInterval(InterValObj);
          me.$emit('hideFn', me.timeShow)
        }, 2000);
      }
    }
  },
  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
#toast{
  display:none;
 .modal-content{
   position: fixed;
   bottom: 10%; left: 50%;
   transform: translate(-50%, -50%);
   -webkit-transform: translate(-50%, -50%);
   min-width: 50px;
   height: 33px;
   background-color: #000;
   padding:0 12px;
   border-radius: 16px;
   color:#fff;
   overflow: hidden;
   opacity: 0.8;
   font-size:14px;
   z-index:1555;
   p{
     line-height:33px;
     text-align: center;
   }
 }
}
.show_modal {
  display: block!important;
}
</style>
