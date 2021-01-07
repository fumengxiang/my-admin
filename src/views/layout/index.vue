<template>
  <el-container class="layout-contain">
    <el-aside width="200px" class="layout-aside">Aside</el-aside>
    <el-container>
      <el-header class="layout-header">Header</el-header>
      <el-main class="layout-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {
  },
  methods: {
  },
  components: {
  },
  computed: {
  },
  created () {},
  mounted () {}
}
</script>

<style scoped lang="less">
//使layout占满整个父元素
.layout-contain {
  height: 100vh;
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
}
.layout-aside {
  background-color: #2980b9;
}
.layout-header {
  background-color: #27ae60;
}
.layout-main {
  background-color: #9b59b6;
}
</style>
