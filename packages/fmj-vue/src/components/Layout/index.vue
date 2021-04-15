<template>
  <el-container>
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="menu">
        <Menu/>
      </el-aside>
      <el-container>
        <el-header class="header1" >Header</el-header>
        <el-main class="main">
            <Main msg="111"/>
        </el-main>
        <el-footer class="foot">Footer</el-footer>
      </el-container>
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
.header{
  height: 100px;
  background-color: rgb(231, 231, 231);
}
.header1{
  background-color: bisque;
}
.menu{
  width: 200px;
  height: '100vh';
  background-color: rgb(84, 92, 100)
}
.main{
  height: calc(100vh - 180px);
}
.foot{
  background-color: bisque;
}

</style>