<template>
  <div id="app">
      <router-view />
  </div>
</template>

<style>
html {
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.clearfix::after {
  content: " ";
  clear: both;
  display: block;
}
.btm .block .el-carousel .el-carousel__indicators button {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: #ccc;
}
.btm .block .el-carousel .el-carousel__container button {
  display: none;
}
.samll_btm .mint-swipe .mint-swipe-items-wrap {
  height: 14.6875rem;
}
.btm .consult .el-carousel .el-carousel__container {
  height: 13rem;
}
.hoverA:hover {
  color: #fff !important;
  background: #37a;
}
.home .el-aside,
.home .el-main {
  overflow: visible;
}
.hideBot {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
