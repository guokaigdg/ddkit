<template>
      <el-menu
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        background-color="#E9EEF3"
        active-text-color="rgb(249 144 23)" 
      >
        <el-submenu index="1">
          <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
      </el-menu>

</template>

<script>
export default {
  name: 'Menu',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {

         console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less" scoped>
/* .el-menu-vertical{ */
  /* width: '100%'; */
  /* height: '100vh'; */
  /* background-color: E9EEF3; */
/* } */
</style>
