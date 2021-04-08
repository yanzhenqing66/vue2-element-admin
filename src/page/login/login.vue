<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="content-header">
        <h1>后台管理系统</h1>
      </div>
      <div class="content-body">
        <el-form :model="form" :rules="rules" ref="form" label-width="50px" class="form">
          <el-form-item label="账号" prop="username" style="width: 350px">
            <el-input 
              v-model="form.username" 
              placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="width: 350px">
            <el-input 
              v-model="form.password" 
              type="password" 
              placeholder="请输入密码" 
              @keyup.enter.native="handleLogin"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button 
              type="primary" 
              style="width: 250px" 
              @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/api.js'
import {mapMutations, mapActions} from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },

  methods: {
    handleLogin() {
      this.$refs.form.validate(valid => {
        if(valid) {
          const formdata = new FormData()
          Object.keys(this.form).forEach(item => {
            formdata.append(item, this.form[item])
          })
          login(formdata).then(res => {
            this.setToken(res.data.token)
            this.$router.push('/home')
            this.getAuthInfo()
          })
          .catch(err => {
            this.$message.error(err.message)
          })
        }
      })
    },

    ...mapMutations('auth', ['setToken']),
    ...mapActions('auth', ['getAuthInfo'])
  }
}
</script>

<style lang="less" scoped>
  .login-wrap {
    height: 100vh;
    min-width: 800px;
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
      background-color: #fff;
      border-radius: 10px;

      .content-header {
        height: 200px;
        background: url('../../assets/image/login_head.png') no-repeat;
        background-size: 100% 100%;

        h1 {
          font-size: 45px;
          font-weight: 500;
          color: #fff;
          text-align: center;
          line-height: 200px;
        }
      }

      .content-body {
        height: 300px;
        position: relative;

        .form {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }


</style>