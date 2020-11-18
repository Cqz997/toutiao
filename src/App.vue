<template>
  <div id="app">
    <h1>头条发布系统</h1>
    <!-- 路由出口 -->
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle>da</el-button>
      <el-button type="success" icon="el-icon-check" circle>da</el-button>
      <el-button type="info" icon="el-icon-message" circle>da</el-button>
      <el-button type="warning" icon="el-icon-star-off" circle>qwe</el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <router-view />
  </div>
</template>

<style lang="less">
  @import './styles/index.less';
</style>
