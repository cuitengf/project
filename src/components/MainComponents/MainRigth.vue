<template>
    <div class="mainRigth">

        <div class="topImg">
            <img src="" alt="">
            <span>广告</span>
        </div>

        <div class="mainNav">
            <div class="title">
                <h3>热门标签</h3>
                <a href="javascript:">
                    <span>所有热门标签</span>
                </a>
            </div>
            <div class="name">
                <ul 
                v-for="(v, index) in list" 
                :key="index" 
                class="clearfix">
                    <p>{{v.name}}</p>
                    <li 
                    class="flag"
                    v-for="(it, index) in v.items" 
                    :key="index"
                    @mouseover="moverColor()"
                    @mouseout="outColor()"
                    >
                        <a href="javascript:">
                            {{it.item}}
                        </a>
                    </li>
                    <li><a href="javascript:">
                        更多</a></li>
                </ul>
            </div>
            <div class="best-selling">
                <div class="best-title">
                    <h4>
                        畅销图书榜
                    </h4>
                    <p>
                        <span
                        :class='{colorBg: iscolorBg}' 
                        class="btnFlag"
                        @mousemove="clickColorBg()"
                        id="JD"
                        >jd</span>
                        <span 
                        class="btnFlag"
                        @mousemove="clickColorBg()"
                        id="DD"
                        >dd</span>
                    </p>
                </div>
                <div>
                    <ol class="list">
                        <li 
                        class="item" 
                        v-for="(item, index) in Entrance" 
                        :key="index"
                        >
                          <div>
                              <div>
                                  <a href="javascript:" class="titleName">
                                      {{item.bname}}
                                  </a>
                                  <p>
                                      {{item.bauth}}
                                  </p>
                              </div>
                              <div>
                                  <a href="javascript:">
                                      加入购物车
                                  </a>
                              </div>
                          </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="books">
              <div>
                <h4>
                  豆瓣图书250
                </h4>
                <span>
                  <a href="javascript:" class="hoverA">
                    更多
                  </a>
                </span>
              </div>
              <div>
                <ul class="list clearfix">
                  <li class="item">
                    <a href="javascript:">
                      <img src="" alt="">
                    </a>
                    <br>
                    <a href="javascript:">
                      <span class="hoverA">名称</span>
                    </a>
                    <br>
                    <span v-if="show">
                      有电子书
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        <div class="btmNav">
          <div class="btm_top">
            <div>
              <h5>
                联系我
              </h5>
              <h5 class="email">
                合作联系:
              </h5>
            </div>
            <div class="btm_btm">
              <h5>
                关注我
              </h5>
              <div class="logo">
                <img src="../../assets/home_weixin.png" alt="">
                <a href="javascript:">微信</a>
              </div>
              <div class="QR">
                <img src="../../assets/QR.png" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="topImg">
          <img src="" alt="">
            <span>广告</span>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mainrigth",
  props: ["books"],
  data() {
    return {
      show: true,
      list: [
        {
          name: "文学",
          items: [
            { item: "小说" },
            { item: "随笔" },
            { item: "日本文学" },
            { item: "散文" },
            { item: "诗歌" },
            { item: "童话" },
            { item: "名著" },
            { item: "港台" }
          ]
        },
        {
          name: "流行",
          items: [
            { item: "漫画" },
            { item: "推理" },
            { item: "绘本" },
            { item: "青春" },
            { item: "科幻" },
            { item: "言情" },
            { item: "奇幻" },
            { item: "武侠" }
          ]
        }
      ],
      iscolorBg: true,
      isMoverColor: false,
      bestFlag: "JD",
      Entrance: []
    };
  },
  watch: {
    bestFlag: function(val, oldval) {
      this.getBooks();
    }
  },
  created() {
    setTimeout(() => {
      this.getBooks();
    }, 300);
  },
  methods: {
    getBooks() {
      this.Entrance = this.books.filter(v => v.flag == this.bestFlag);
    },
    clickColorBg() {
      var vm = this;
      vm.$(".btnFlag").click(function() {
        vm.$(".btnFlag").removeClass("colorBg");
        vm.$(this).addClass("colorBg");
        vm.bestFlag = vm.$(this).attr("id");
      });
    },
    moverColor() {
      var vm = this;
      vm.$(".flag").mouseover(function() {
        vm.$(this).addClass("moverColor");
      });
    },

    outColor() {
      var vm = this;
      vm.$(".flag").mouseout(function() {
        vm.$(this).removeClass("moverColor");
      });
    }
  }
};
</script>

<style scoped>
/*app*/
@media all and (max-width: 750px) {
  .mainRigth {
    display: none;
  }
}

.best-selling .best-title .colorBg {
  background: #9b7c5e;
  color: #fff;
}
.moverColor {
  background: #e8e8e8;
}

.mainRigth {
  overflow: hidden;
}
.mainRigth .topImg {
  display: inline-block;
  position: relative;
  width: 18.75rem;
  height: 15.625rem;
  margin-bottom: 1.25rem;
  border: 0.0625rem solid red;
}
.mainRigth .topImg span {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.0625rem 0.1875rem;
}
.mainRigth .mainNav .title {
  line-height: 1.5;
  padding-bottom: 0.3125rem;
  border-bottom: 0.0625rem solid #ddd;
}
.mainRigth .mainNav .title h3 {
  display: inline-block;
  margin-right: 0.9375rem;
}
.mainRigth .mainNav .title span {
  font-size: 0.875rem;
  color: #3377aa;
}
.mainRigth .mainNav .title span::after,
.mainRigth .mainNav .name li:nth-last-of-type(1) a::after,
.mainRigth .mainNav .books div:nth-of-type(1) a::after {
  content: "》";
  font-size: 0.3125rem;
  margin-left: 0.125rem;
}
.mainRigth .mainNav .title span:hover,
.books .list .item span a:hover,
.btmNav .btm_top .btm_btm .logo a:hover {
  padding: 0.0625rem 0.125rem;
  background: #3377aa;
  color: #fff;
}
.mainRigth .mainNav .name ul {
  margin-top: 1.25rem;
  padding: 0.125rem 0.125rem;
  border-bottom: 0.0625rem dashed #ddd;
}
.mainRigth .mainNav .name li {
  float: left;
  padding: 0.125rem 0.3125rem;
  margin: 0.125rem 0.5rem;
  font-size: 0.875rem;
}
.mainRigth .mainNav .name p {
  font-size: 0.9375rem;
}
.mainRigth .mainNav .name li:not(:nth-last-of-type(1)) a {
  color: #3377aa;
}
.mainRigth .mainNav .name li:nth-last-of-type(1) a {
  color: #aaa;
}
.best-selling .best-title h4 {
  margin-top: 1.875rem;
  line-height: 2;
  border-bottom: 0.0625rem solid #ddd;
}
.best-selling .best-title span {
  cursor: pointer;
  display: inline-block;
  margin-right: 1.25rem;
  margin-top: 0.625rem;
  padding: 0.125rem 0.3125rem;
  line-height: 1.3;
  color: #ccc5bf;
  border-radius: 0.125rem;
}
.best-selling .best-title span:hover {
  background: #9b7c5e;
  color: #fff;
}
.best-selling .list {
  margin-left: 1.25rem;
}
.best-selling .list .item > div {
  padding: 0 0.9375rem;
}
.best-selling .list .item {
  display: list-item;
  line-height: 1.5;
  border-bottom: 0.0625rem dashed #ddd;
}
.best-selling .list .item > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
}
.best-selling .list .item div:nth-of-type(1) a {
  color: #3377aa;
  font-size: 0.9375rem;
}
.best-selling .list .item .titleName:hover {
  color: #fff;
  background: #37a;
}
.best-selling .list .item div:nth-of-type(1) p {
  color: #666;
}
.best-selling .list .item div:nth-of-type(2) a {
  display: inline-block;
  padding: 0.1875rem 0.3125rem;
  font-size: 0.9375rem;
  color: #999;
  border: 0.0625rem solid #fff;
}
.best-selling .list .item:hover div:nth-of-type(2) a {
  border-radius: 0.125rem;
  border: 0.0625rem solid #d4bea7;
  color: #d4bea7;
}
.books {
  margin-top: 1.875rem;
}
.books div:nth-of-type(1) h4 {
  display: inline-block;
}
.books div:nth-of-type(1) a {
  font-size: 0.9375rem;
  color: #3377aa;
}
.books div:nth-of-type(1) {
  border-bottom: 1px solid #999;
  line-height: 2;
}
.books .list .item img {
  display: inline-block;
  width: 5.3125rem;
  height: 7.75rem;
  border: 1px solid saddlebrown;
}
.books .list .item {
  text-align: center;
  float: left;
}
.books .list .item a span {
  font-size: 0.9375rem;
  color: #3377aa;
}
.books .list .item:nth-of-type(2),
.books .list .item:nth-of-type(5),
.books .list .item:nth-of-type(8) {
  margin: 0 1.25rem;
}
.books .list .item > span {
  padding: 0.0625rem 0.1875rem;
  font-size: 0.9375rem;
  color: #fff;
  background: #a1a1a1;
}
.btmNav,
.books .list {
  margin-top: 1.875rem;
  margin-bottom: 3.125rem;
}
.btmNav .btm_top h5:nth-of-type(1) {
  border-bottom: 1px solid #e4e2e2;
  line-height: 2;
}
.btmNav .btm_top h5:nth-of-type(1):hover {
  color: #fff;
  background: #666;
}
.btmNav .btm_top .email {
  line-height: 4;
}
.btmNav .btm_top .email::after {
  content: "QQ:719653622";
}
.btmNav .btm_top .btm_btm {
  margin-top: 1.25rem;
  position: relative;
}
.btmNav .btm_top .btm_btm .logo {
  margin-top: 1.25rem;
  width: 2.5rem;
  text-align: center;
}
.btmNav .btm_top .btm_btm .logo a {
  font-size: 0.875rem;
  color: #3377aa;
}
.btmNav .btm_top .btm_btm .QR {
  display: none;
}
.btmNav .btm_top .btm_btm .QR img {
  position: absolute;
  width: 115px;
  height: 115px;
  z-index: 1;
}
.btmNav .btm_top .btm_btm .logo:hover + .QR {
  display: block;
}
</style>