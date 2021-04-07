<template>
<el-container>
  <el-aside class="menu">
    <Menu/>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
        <Main msg="111"/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import Main from '../Main/index.vue'
import Menu from '../Menu'


export default {
    name:'Layout',
    components:{
      Menu,
        Main
    }
}
</script>

<style>
.wrap{
  width: '100vw';
  height: '100vh';

}
  .menu{
    width: '200px';
    height: '100vh';
  }

</style>