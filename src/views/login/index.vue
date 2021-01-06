<template>
  <div class="login-container">
    <el-form ref="form" :model="user" class="login-form">
      <div class="login-title-img"></div>
      <el-form-item>
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }

}
</script>

<style scoped lang="less">
  .login-container {
    /* 设置定位的目的是使login组件铺满整个屏幕 */
    /* position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    height: 100vh;
    /* 开启flex布局是为了将表单内容居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    background-image: url('../../assets/img/login/login_bg.jpg');
  }
  .login-title-img {
    height: 57px;
    width: 259px;
    background-image: url('../../assets/img/login/logo_index.png');
    margin-bottom: 20px;
  }
  .login-form {
    padding: 30px 50px 20px;
    background-color: #fff;
    .login-btn {
      width: 100%;
    }
  }
</style>
