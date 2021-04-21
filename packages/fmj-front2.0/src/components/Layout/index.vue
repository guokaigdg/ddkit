<template>
  <el-container>
    <el-header class="header">
      这里是头部
    </el-header>
    <el-container >
      <el-aside width ='220px'>
        <div class="menu">
          <Menu/>
        </div>
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
  background-color: #E9EEF3;
}
.header1{
  background-color: bisque;
}
.el-aside {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
.el-main{
    height: calc(100vh - 180px);
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}
.foot{
  background-color: rgb(235, 200, 157);
}

</style>