<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="content-header">
        <h1>题库后台管理系统</h1>
      </div>
      <div class="content-body">

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login-wrap {
    // width: 100%;
    height: 100vh;
    background: url(http://tkproc.huatu.com/mk/static/img/login_bg.bcc2be4.png) no-repeat;
    background-size: 100% 100%;
    position: relative;

    .login-content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 530px;
      height: 500px;
      // border: 1px solid;

      .content-header {
        height: 200px;
        background: url('../../assets/image/login_head.png') no-repeat;
        background-size: 100% 100%;

        h1 {
          font-size: 50px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          line-height: 200px;
        }
      }

      .content-body {

      }
    }
  }


</style>