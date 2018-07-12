<template>
    <div class='Nav'>
        <div class="top">

            <div class="big">
                <ul class="nav_left">
                    <li v-for="(item, index) in nav" :key="index">
                        <a href="javascript:">{{item.name}}</a>
                    </li>
                </ul>
                <ul class="nav_right">
                    <li>
                        <a href="javascript:">
                            (*Φ皿Φ*)
                        </a>
                    </li>
                    <li>
                        
                        <router-link to="" v-if="isLogin">
                          已登录《{{user}}》
                        </router-link>

                        <router-link to="/login" v-else>
                            登陆
                        </router-link>

                        <a href="javascript:" @click="cancel()" v-if="isLogin">
                            注销
                        </a>
                    </li>

                    <li v-if="!isLogin">
                        <router-link to="/enroll">
                            注册
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="small">
                <span class="btn" @click="slide()" >=</span>
                <div class="slide">
                    <ul>
                        <li v-for="(item, index) in nav" :key="index">
                            <a href="javascript:">{{item.name}}</a>
                        </li>
                    </ul>
                    <hr>
                    <ul>
                        <li>
                            <a href="javascript:">
                                (*Φ皿Φ*)
                            </a>
                        </li>
                        <li>
                            <a href="javascript:">
                                登陆
                            </a>
                        </li>
                        <li>
                            <a href="javascript">
                                注册
                            </a>
                        </li>
                        <li @click="slideUp">
                          =
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="seach">

            <div class="center">
                <div>
                    <span class="logo"><a href="javascript:">读书</a></span>
                </div>
                <div>
                    <input class="inp" type="text" placeholder="书名 / 作者 / ISBN">
                    <span class="icon">seach</span>
                </div>
            </div>

            <hr style="height:1px;border-width:0;background-color:#e5ebe4;" >

            <div class="center">
                <div class="list">
                    <span>
                      <router-link to="/">
                        首页
                      </router-link>
                    </span>
                    <span>
                      <router-link to="/cart">
                           购物车
                      </router-link>
                    </span>

                    <span>
                      <router-link to="">
                           书店
                      </router-link>
                    </span>
                   
                </div>
            </div>

        </div>

        <div class="samllSeach">
          <div>
            <div class="samll_seach">
                <input class="inp" type="text" placeholder="书名 / 作者 / ISBN">
                <span class="icon"><a href="javascript">seach</a></span>
            </div>
            <div>
              <span>
                <router-link to="/">
                  首页
                </router-link>
              </span>

              <span>
                <router-link to="/cart">
                    购物车
                </router-link>
              </span>

              <span>
                <router-link to="">
                    书店
                </router-link>
              </span>
            </div>
          </div>
        </div>
        
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        { name: "网站" },
        { name: "读书" },
        { name: "电影" },
        { name: "音乐" },
        { name: "同城" },
        { name: "小组" },
        { name: "阅读" },
        { name: "FM" },
        { name: "时间" },
        { name: "市集" },
        { name: "更多" }
      ],
      flag: true,
      isLogin: false,
      user: ""
    };
  },
  created() {
    this.isLogin = this.$cookie.get("user") ? true : false;
    this.getUser();
  },
  methods: {
    ...mapMutations(["LoginState"]),
    getUser() {
      this.user = this.$cookie.get("user")
        ? this.$cookie.get("user").split("=")[1]
        : this.$cookie.get("user");
    },
    cancel() {
      this.LoginState();
      this.$cookie.delete("user");
      this.isLogin = this.$store.state.loginState;
    },
    slide() {
      if (!this.flag) {
        this.$(".slide").slideUp();
        this.flag = !this.flag;
        return;
      }
      if (this.flag) {
        this.$(".slide").slideDown();
        this.flag = !this.flag;
        return;
      }
    },
    slideUp() {
      this.$(".slide").slideUp();
      this.flag = !this.flag;
    }
  },
  filters: {
    filte(v) {
      return v.slice(0, 5);
    }
  }
};
</script>

<style scoped>
.big {
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  background: #545652;
}
.nav_left {
  float: left;
  margin-left: 0.3125rem;
}
.nav_left li {
  float: left;
  margin: 0 0.625rem;
}
a {
  color: rgb(218, 214, 214);
  font-size: 0.875rem;
}
.Nav .top a:hover {
  color: #fff;
}
.nav_right {
  float: right;
  margin-right: 0.625rem;
}
.nav_right li {
  float: left;
  margin: 0 0.625rem;
}
.seach {
  text-align: left;
  background: #f6f6f1;
  padding: 1rem 0;
}

/* 版心 */
.seach .center {
  width: 62.5rem;
  margin: 0 auto;
}
.seach .center:nth-of-type(1) {
  margin-bottom: 1.25rem;
}
.seach .logo a {
  font-size: 1.875rem;
  font-weight: 700;
  color: #614e3c;
}

.seach .center div {
  display: inline-block;
}
.seach .center div:nth-of-type(1) {
  margin-right: 3.125rem;
}
.seach .center div:nth-last-of-type(2) {
  vertical-align: middle;
}
.seach .center .inp {
  outline: none;
  border: none;
  height: 1.875rem;
  width: 31.25rem;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.3125rem 0 0 0.3125rem;
  box-shadow: 0 0 0.1875rem 0 rgba(175, 175, 175, 0.945);
}
.seach .center div:nth-last-of-type(1) .icon {
  display: inline-block;
  height: 1.875rem;
  line-height: 1.875rem;
  color: #fff;
  background: #9f9d94;
  border-top-right-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
}
.seach .center .list span a {
  color: #614e3c;
  margin-right: 1.25rem;
  font-size: 0.875rem;
  line-height: 2;
}
.seach .center .list span a:hover {
  background: #614e3c;
  color: #fff;
}

/* pc */
@media all and (min-width: 750px) {
  .small {
    display: none;
  }
  .samllSeach {
    display: none;
  }
}

/* app */
@media all and (max-width: 750px) {
  .big {
    display: none;
  }
  .small {
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
  .small ul li {
    margin: 1.25rem auto;
  }
  a {
    color: rgb(128, 51, 51);
  }
  .slide {
    display: none;
  }
  .seach {
    display: none;
  }
}
.samllSeach {
  background: #f6f6f1;
}
.samll_seach .inp {
  width: 80%;
  outline: none;
  border: none;
  padding: 0.3125rem 0.9375rem;
  margin-bottom: 0.625rem;
  border-radius: 0.3125rem 0 0 0.3125rem;
  box-shadow: 0 0 0.1875rem 0 rgba(175, 175, 175, 0.945);
}
.samll_seach span a {
  display: inline-block;
  height: 1.875rem;
  line-height: 1.875rem;
  color: #fff;
  background: #9f9d94;
  border-top-right-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
}
</style>