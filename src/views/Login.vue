<template>
    <div class="Login">
      <h1>{{title}}</h1>
        <div>
            <div class="user">
                <label for="username">账号</label>
                <input 
                id="username" 
                type="text" 
                placeholder="输入账号"
                maxlength="20"
                minlength="5"
                required
                >
            </div>

            <div class="pass">
                <label for="password">密码</label>
                <input 
                type="password" 
                id="password" 
                placeholder="输入密码"
                maxlength="20"
                minlength="5"
                required
                >
            </div>

            <div class="btn">
                <button id="login" @click="isLogin($event)" v-if="title == '欢迎登陆'">登陆</button>
                <button id='register' @click="isLogin($event)" v-else>注册</button>
                <button id="close" @click="isLogin($event)">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.title = this.$store.state.loginTitle;
  },
  computed: {
    ...mapState(["path"])
  },
  methods: {
    ...mapMutations(["LoginState", "getUid"]),

    isLogin(ev) {
      var vm = this;
      var username = vm.$("#username").val();
      var password = vm.$("#password").val();
      if (ev.target.id == "close") {
        vm.$router.push({ path: "/" });
        return;
      }

      if (!username && !password) {
        alert("请填写账号密码");
        return;
      }

      password = vm._md5(password);
      switch (ev.target.id) {
        case "login":
          vm._http
            .post("/api/login", { username, password })
            .then(result => {
              switch (result.data.code) {
                case 200:
                  vm.$cookie.set(
                    "user",
                    `username=${username}, uid=${result.data.uid}`,
                    {
                      expires: "2h"
                    }
                  );
                  if (vm.$cookie.get("user")) {
                    vm.LoginState();
                  }
                  vm.$router.push({ path: this.path });
                  break;
                case 400:
                  alert("账号密码错误,请重新输入");
                  break;
                case 500:
                  alert("服务器错误,后台人员正在维修中...");
                  break;
              }
              return;
            })
            .catch(err => {
              throw new Error(err);
            });
          break;
        case "register":
          if (username.charAt(4) && password.charAt(4)) {
            vm._http
              .post("/api/register", { username, password })
              .then(result => {
                if (result.data.code == 400) {
                  alert(result.data.message);
                  return;
                }
                if (result.data.code == 200) {
                  vm.$cookie.set(
                    "user",
                    `username=${username}, uid=${result.data.uid}`,
                    {
                      expires: "2h"
                    }
                  );
                  if (vm.$cookie.get("user")) {
                    vm.LoginState();
                  }
                  alert(result.data.message);
                  vm.$router.push({ path: "/" });
                  return;
                }
              })
              .catch(err => {
                if (err) throw new Error(err);
              });
            break;
          } else {
            alert("不符合规则");
            return;
          }
      }
    }
  }
};
</script>

<style scoped>
.Login input {
  height: 1.875rem;
  width: 12.5rem;
  margin-left: 1.25rem;
  padding: 0 0.625rem;
  border: 1px solid #c9c9c9;
  border-radius: 0.125rem;
}
.Login div {
  margin: 1.25rem 0;
}
.Login .btn button {
  font-size: 0.9375rem;
  margin-left: 0.625rem;
  cursor: pointer;
  background: #fff;
  border: none;
}
.Login .btn button:nth-of-type(1) {
  color: #00ced1;
}
.Login .btn button:nth-of-type(2) {
  color: #ff3030;
}
</style>