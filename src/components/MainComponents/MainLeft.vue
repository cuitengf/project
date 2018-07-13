<template>
    <div class="mainLeft">
        <!-- 新书速递 -->
         <div class="block">
            <div class="title"> 
                <h3>新书速递</h3>
                <span>
                    
                    <a href="javascript:" class="hoverA">
                        更多
                    </a>
                </span>
            </div>
            <div class="container">
                <el-carousel trigger="click" height="31.25rem" :autoplay='isAuto'>
                <el-carousel-item>
                    <div>
                        <ul class="list clearfix">
                            <li class="item" v-for="(item, index) in books" :key="index">
                                <a href="javascript:">
                                    <img :src="item.img" alt="">
                                </a>
                                <p class="recommend">
                                    <span v-if="item.hot" :style="{color: recommendColor, fontSize: isSize}">推荐</span>
                                </p>
                                <p>
                                    <a href="javascript:" :title='item.bname'>
                                        <span class="name hoverA" :style="{color: nameColor, fontSize: isSize}" >{{item.bname}}</span>
                                    </a>
                                </p>
                                <p>
                                    <span 
                                    class="author" 
                                    :style="{color: authorColor, fontSize: isSize}"
                                    :title="item.bauth"
                                    >
                                        {{item.bauth}}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- 图书咨询 -->
        <div class="consult">
            <div class="title">
                <h3>
                    图书资讯
                </h3>
            </div>
            <div class="container">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="(item, index) in books" :key="index">
                            <a href="javascript:">
                                <div class="consult_content">
                                        <p class="title">{{item.bname}}</p>
                                        <p class="author">{{item.bauth}}</p>
                                        <p class="details">{{item.content}}</p>
                                </div>
                                <div class="consult_img">
                                        <img :src="item.img" alt="">
                                </div>
                            </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- 关注图书榜 -->
        <div class="follow">
            <div class="title">
                <h3>
                    关注图书榜
                </h3>
                <span>
                    <a href="javascript:" class="hoverA">
                        虚构类
                    </a>
                </span>
                <span>
                    <a href="javascript:" class="hoverA">
                        非虚构类
                    </a>
                </span>
            </div>
            <div class="container">
                <ul class="clearfix">
                    <li class="item" v-for="(item, index) in books" :key="index">
                        <div class="flx" v-if="item.hot">
                            <section>
                                <a href="javascript:">
                                    <img :src="item.img" alt="">
                                </a>
                            </section>
                            <section>
                                <p class="name">
                                    <a href="javascript:" :style="{color: nameColor}" class="hoverA">
                                        {{item.bname}}
                                    </a>
                                </p>
                                <p class="evaluate" :style="{fontSize: '0.6rem', color: evaluateColor}">
                                    7
                                </p>
                                <p class="author" :style="{fontSize: isSize}">
                                    {{item.bauth}}
                                </p>
                                <p class="type" :style="{fontSize: isSize}">
                                    类型
                                </p>
                                <p class="bookFlag" v-if="sign" :style="{fontSize: isSize}">
                                    <span>
                                        有电子书
                                    </span>
                                </p>
                            </section>
                        </div>
                        <div class="comment" :style="{fontSize: isSize}" v-if="item.hot">
                            评论(<a href="javasctipt:" class="hoverA" :style="{color: nameColor}">网友</a>)
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 书店 -->
        <div class="bookstore">
            <div class="title">
                <h3>
                    书店
                </h3>
                <span>
                    <a href="javascript:" :style="{color: nameColor, fontSize: isSize}" class="hoverA">
                        查看全部
                    </a>
                </span>
            </div>
            <div class="container">
                <div>
                    <section>
                        <a href="javascript:">
                            <img src="" alt="">
                        </a>
                    </section>
                    <section>
                        <p>
                            <span class="name">
                                书名
                            </span>
                            <span class="pic">
                                价格 <span> / 包邮</span>
                            </span>
                        </p>
                        <p class="details">
                            详情
                        </p>
                    </section>
                </div>
                <div>
                    <ul class="clearfix">
                        <li class="item" v-for="(item, index) in books" :key="index">
                            <a href="javascript:">
                                <img :src="item.img" alt="">
                            </a>
                            <p>
                                <span class="name hideBot">
                                    <a href="javascript:" class="hoverA">
                                        {{item.bname}}
                                    </a>
                                </span> 
                            </p>
                            <p>
                                <span class="pic">
                                    {{item.pic}}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 电子图书 -->
        <div class="E-book block">
            <div class="title">
                <h3>
                    电子图书
                </h3>
                <span>
                    <a href="javascript:" class="hoverA">
                        查看更多
                    </a>
                </span>
            </div>
            <div class="e-book">
                <span>热门电子图书</span>
                <span>
                    <a href="javascript" class="hoverA">
                        更多
                    </a>
                </span>
            </div>
            <div class="container">
                <div>
                    <ul class="list clearfix">
                        <li class="item" v-for="(item, index) in books" :key="index">
                           <a href="javascript:">
                               <img src="" alt="">
                           </a>
                           <p class="hideBot">
                               <a href="javascript:" >
                                <span class="name hoverA" :style="{color: nameColor, fontSize: isSize}" >{{item.bname}}</span>
                           </a>
                           </p>
                           <p>
                               <span class="pic" :style="{color: authorColor, fontSize: isSize}">
                                   {{item.pic}}元
                                </span>
                           </p>
                           <div class="details">
                               <p>{{item.bdetails}}</p>
                               <p>{{item.name}}</p>
                               <p>{{item.content}}</p>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 书评 -->
        <div class="evaluate">
            <div class="title">
                <h3>
                    最受欢迎的书评
                </h3>
                <span>
                    <a href="javascript:" class="hoverA">
                        更多热门书评
                    </a>
                </span>
                <span>
                    <a href="javascript:" class="hoverA">
                        最新书评
                    </a>
                </span>
            </div>
            <div class="container">
                <ul>
                    <li 
                    class="item" 
                    v-for="(item, index) in books" 
                    :key="index" 
                    v-if="item.hot">
                        <div>
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            <p class="title">
                                <a href="javascript:" class="hoverA" :style="{color: nameColor}">
                                    {{item.bdetails}}
                                </a>
                            </p>
                            <p class="name" :style="{fontSize: isSize}">
                                <span>网友</span>
                                评论
                                <span>{{item.bname}}</span>
                            </p>
                            <p class="details" :style="{fontSize: isSize}">
                                {{item.content}}
                                <span>
                                <a href="javsctipt:" :style="{color: nameColor}" class="hoverA">
                                    (全文)
                                </a>
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainLeft",
  data() {
    return {
      isAuto: false,
      recommendColor: "#a29e91",
      nameColor: "#3377aa",
      authorColor: "#333",
      isSize: "0.9rem",
      sign: true,
      evaluateColor: "#e09015"
    };
  },

  props: ["books"]
};
</script>

<style scoped>
.mainLeft {
  margin-right: 1.875rem;
}
.mainLeft .block .list img {
  display: inline-block;
  width: 7.1875rem;
  height: 10.75rem;
  border: 1px solid #000;
}
.mainLeft .block .list .recommend {
  padding-left: 0.9375rem;
  background: #f7f3db;
}
.mainLeft .block .list .item {
  width: 20%;
  float: left;
  position: relative;
  padding-right: 1.25rem;
  margin-bottom: 1.25rem;
}
.mainLeft .block .list .item:hover .details {
  display: block;
}
.mainLeft .block .list .item .details {
  display: none;
  top: 0;
  right: -20.9375rem;
  position: absolute;
  width: 20.625rem;
  height: 13.75rem;
  border: 1px solid red;
  background: #fff;
  z-index: 100;
}
.consult {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.container {
  padding: 1.25rem 0;
}
.consult .el-carousel .el-carousel__item {
  padding: 1.875rem;
  border: solid 1px #ddd;
  border-radius: 0.125rem;
}
.consult .el-carousel .el-carousel__item a {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.consult .consult_content .title {
  color: #37a;
  padding: 0;
  border: none;
}
.consult .consult_content .author {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #aaa;
}
.consult .consult_content .details {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #494949;
}
.consult .consult_img img {
  display: inline-block;
  width: 6rem;
  height: 6rem;
  border: 1px solid seagreen;
}

.title {
  padding: 0.625rem 0;
  border-bottom: solid 1px #ddd;
}
.title h3 {
  display: inline-block;
}
.title span a {
  margin: 0 0.9375rem;
  font-size: 0.875rem;
  color: #37a;
}
.container .item p {
  text-overflow: ellipsis;
  overflow: hidden;
}
.block .container .details {
  padding: 0.625rem 0.9375rem;
}
.block .container .details p {
  color: #494949;
}
.title span a::after,
.e-book span:nth-of-type(2) a::after {
  content: "》";
  font-size: 0.5rem;
}
.follow .container .item img {
  display: inline-block;
  width: 5.9375rem;
  height: 8.5625rem;
  border: 1px solid salmon;
}
.follow .container .item {
  float: left;
  width: 50%;
  padding-right: 1.25rem;
  margin-bottom: 1.875rem;
}
.follow .container .item .flx {
  display: flex;
  margin-bottom: 0.625rem;
}
.follow .container .item .flx section:nth-of-type(1) {
  margin-right: 1.5625rem;
}
.follow .container .item .flx .bookFlag span {
  background: #a1a1a1;
  padding: 0.1rem 0.3rem;
  color: #ffffff;
}
.bookstore {
  margin-bottom: 3.125rem;
}
.bookstore .container div:nth-of-type(1) {
  display: flex;
  margin-bottom: 1.875rem;
}
.bookstore .container div:nth-of-type(1) img {
  display: inline-block;
  width: 8.125rem;
  height: 10.75rem;
  border: 1px solid red;
}
.bookstore .container div:nth-of-type(1) section:nth-of-type(2) {
  margin-top: 1.25rem;
  padding-left: 1.875rem;
}
.bookstore .container div:nth-of-type(1) .name {
  font-size: 1.875rem;
}
.bookstore .container div:nth-of-type(1) .pic {
  color: #e76648;
  font-style: 1.0625rem;
}
.bookstore .container div:nth-of-type(1) .pic::before,
.bookstore .container .item .pic::before {
  content: "￥";
}
.bookstore .container div:nth-of-type(1) .details {
  color: #9b9b9b;
  margin-top: 0.5rem;
}
.bookstore .container .item {
  width: 20%;
  float: left;
  display: flex;
  flex-direction: column;
  padding-right: 1.875rem;
}
.bookstore .container .item img {
  display: inline-block;
  width: 6.625rem;
  height: 8.75rem;
  margin-bottom: 0.625rem;
  border: 1px solid red;
}
.bookstore .container .item .name a {
  font-size: 0.9375rem;
  color: #37a;
}
.bookstore .container .item .pic {
  font-size: 0.9375rem;
}
.e-book span:nth-of-type(2) a {
  color: #37a;
  font-size: 0.875rem;
}
.e-book {
  line-height: 2.5;
}
.evaluate .container .item {
  display: flex;
  padding: 20px 0;
}

.evaluate .container .item:not(:nth-last-of-type(1)) {
  border-bottom: 1px solid #ddd;
}
.evaluate .container .item img {
  display: inline-block;
  margin-right: 1.25rem;
  width: 4.6875rem;
  height: 6.375rem;
  border: 1px solid red;
}
.evaluate .container .item .title {
  border: none;
  padding: 0.39846875rem 0;
}
</style>