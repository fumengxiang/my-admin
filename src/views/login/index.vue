<template>
  <div class="login-container">
    <!-- element表单验证的步骤：
          1. el-form 需要绑定rules，用于规定验证规则
          2. el-form-item 需要添加prop属性，其值为表单绑定的数据对象中的对应的项的key
          3. 在data中添加rules，用于表单的验证（详细的验证规则在：https://github.com/yiminghe/async-validator）
     -->
    <!-- 属性ref用于获取当前元素，对表单的显示没有作用 -->
    <el-form ref="user-form" :model="user" class="login-form" :rules="loginRules">
      <div class="login-title-img"></div>
      <el-form-item prop="phone">
        <el-input v-model="user.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意相关协议及隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
        type="primary"
        @click="onSubmit"
        class="login-btn"
        :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { login } from '@/api/login.js'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        phone: '13911111111',
        code: '123456',
        agree: false
      },
      isLoading: false,
      loginRules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur' }
        ],
        agree: [
          {
            // 自定义规则验证Boolean,使用validator key，此key值为函数，接受三个参数，
            // 第一个参数：rule,此表单项数据的验证规则，
            // 第二个参数：value，表单项值
            // 第三个参数: callback, 表单验证后执行的回调函数，验证通过则callback中不传入参数，否则传入
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意相关协议及隐私条款'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 先验证输入的格式是否正确，确定正确后在进行网络请求
    onSubmit () {
      // 手动开启表单验证，使用el-form中的validate方法,此方法接受两个参数一个是Boolean，表示表单是否验证通过，第二个是表单中每个数据的验证规则（少用）
      this.$refs['user-form'].validate(valid => {
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login () {
      // console.log(this.$refs['user-form'])
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$message({
          message: '登陆成功！',
          type: 'success'
        })
        // 路由的跳转有两种方式
        // 1. 使用路由的路径进行跳转
        this.$router.push('/layout')
        // 2. 使用路由的名字跳转,这也是路由名字的作用之一
        // this.$router.push({
        //   name: 'layout'
        // })
      }, 1500)
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
    background-image: url('../../assets/img/login/login_bg.jpg');
    background-repeat: no-repeat; /* 设置不重复背景图片 */
    background-size: cover;
  }
  .login-title-img {
    height: 57px;
    width: 259px;
    background-image: url('../../assets/img/login/logo_index.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }
  .login-form {
    padding: 30px 50px 20px;
    background-color: #fff;
    .login-btn {
      width: 100%;
    }
  }
  /**background-size:
    cover
    缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。
    contain
    缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。
  */
</style>
