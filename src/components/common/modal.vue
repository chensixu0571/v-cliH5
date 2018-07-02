<template>
  <div id="modal" :class="{'show_modal':show}">
    <div class="modal-content">
      <p>{{title}}</p>
      <p>{{text}}</p>
      <div class="modal_footer">
        <a class="cancle" :class="{'one-button': !oktext, 'show-button': cancletext}" @click="handleCancle">{{cancletext}}</a>
        <a class="ok" :class="{'one-button': !cancletext, 'show-button': oktext}" @click="handleOk">{{oktext}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['oktext','cancletext','text','show', 'title'],
  methods: {
    handleOk: function () {
      this.$emit('ok')
    },
    handleCancle: function () {
      this.$emit('cancle')
    }
  }
}
</script>

<style lang="less">
#modal {
  z-index: 39;
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  .modal-content {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 270px;
    min-height: 104px;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    p {
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      margin-top: 25px;
      margin-bottom: 22px;
      padding: 0 20px;
    }
  }
  .modal_footer {
    overflow: hidden;
    position: relative;
    background-color: #fff;
    padding: 0;
    height: 43px;
    border-top: 1px solid #c4c4c4;
    a {
      box-sizing:border-box;
      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */
      display: none;
      float: left;
      height: 43px;
      text-align: center;
      font-size: 17px;
      color: #333333;
      line-height: 43px;
      width: 50%;
      text-decoration:none;
    }
    .ok {
      border-right: 1px solid #c4c4c4;
      color: #FF6129;
    }
    .show-button {
      display: block;
    }
    .one-button {
      border-right: none!important;
      width: 100%;
    }
  }
}
.show_modal {
  display: block!important;
}
</style>
