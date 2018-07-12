<template>
    <div class="samllConsult">
        <div class="container">
            <mt-swipe :show-indicators="false">
                <mt-swipe-item>
                    <a href="javascript:">
                            <div class="consult_content">
                                    <p class="title">title</p>
                                    <p class="author">作者</p>
                                    <p class="details">详情</p>
                            </div>
                            <div class="consult_img">
                                    <img src="" alt="">
                            </div>
                        </a>
                </mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="best-selling">
            <div class="best-title">
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
                    <li class="item" v-for="(item, index) in Entrance" :key="index">
                        <div>
                            <div>
                                <a href="javascript:" class="titleName">
                                    {{item.bname}}
                                </a>
                                <p>
                                    {{item.bauthor}}
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
        
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SamllConsult",
  data() {
    return {
      iscolorBg: true,
      bestFlag: "JD",
      Entrance: []
    };
  },
  created() {
    setTimeout(e => {
      this.getBooks();
    }, 300);
  },
  watch: {
    bestFlag: function(val, oldval) {
      this.getBooks();
    }
  },
  computed: {
    ...mapState(["books"])
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
    }
  }
};
</script>

<style scoped>
.samllConsult .container {
  height: 160px;
}
.samllConsult .mint-swipe-item {
  padding: 1.875rem;
  border: solid 1px #ddd;
  border-radius: 0.125rem;
}
.samllConsult .mint-swipe-item a {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.samllConsult .consult_content .title {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #37a;
}
.samllConsult .consult_content .author {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #aaa;
}
.samllConsult .consult_content .details {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #494949;
}
.samllConsult .consult_img img {
  display: inline-block;
  width: 6rem;
  height: 6rem;
  border: 1px solid seagreen;
}
.best-selling .best-title .colorBg {
  background: #9b7c5e;
  color: #fff;
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
</style>