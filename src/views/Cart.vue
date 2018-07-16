<template>
    <div class="cart center">
      <h2>购物车</h2>
      <div>
        <ul class="clearfix">
          <li class="item">
            <p class="type color" @click="typeOne($event)" id="all">
              全部商品
                <span>
                  {{listAll.length}}
                </span>
            </p>
          </li>
          <li class="item">
            <p class="type" @click="typeOne($event)" id="buy">
              已购买
                <span>
                  {{listBuy.length}}
                </span>
            </p>
          </li>
        </ul>
      </div>
      <div class="list">
        <table>
          <tr>
            <th>商品名字</th>
            <th>单价 ( 元 )</th>
            <th>数量</th>
            <th>小计 ( 元 )</th>
            <th>操作</th>
          </tr>
          <tr v-if="list" v-for="(item, index) in list" :key="index">
            <td>{{item.bname}}</td>
            <td>{{item.pic}}</td>
            <td>{{item.cont}}</td>
            <td>{{item.pic * item.cont}}</td>
            <td><a href="javascript:" @click="del($event)" :id='item.bid'>删除</a></td>
          </tr>
        </table>
      </div>
      <div v-if="flag = this.list[0] ? false : true" class="empty">
        <img src="../assets/empty.png" alt="">
        <p>购物车里空空的~</p>
        <p>快去挑选你喜欢的商品吧!</p>
      </div>  
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      list: "",
      flag: false
    };
  },
  created() {
    this.getCartGoods(this);
    this.isLogin();
    this.list = this.listAll;
  },
  watch: {
    listAll(vl, old){
      this.list = this.listAll;
    }
  },
  computed: {
    ...mapState(["listAll", "listBuy", "uid"])
  },
  methods: {
    ...mapMutations(["getCartGoods"]),
    isLogin() {
      if (!this.$cookie.get("user")) this.$router.push({ path: "/login" });
    },
    del(ev) {
      var vm = this;
      var bid = this.$(ev.target).attr("id");
      var uid = this.uid;
      this._http
        .post("/api/cart/del", { bid, uid })
        .then(result => {
          var code = result.data.code;
          switch (code) {
            case 200:
              vm.getCartGoods(this);
              break;
            case 402:
              alert(result.data.message);
              break;
            case 500:
              alert(result.data.message);
              break;
          }
        })
        .catch(err => {
          if (err) throw err;
        });
    },
    typeOne(ev) {
      var vm = this;
      switch (ev.target.id) {
        case "all":
          vm.$(".type").removeClass("color");
          ev.target.classList.add("color");
          vm.list = vm.listAll;
          this.flag = vm.list[0] ? true : false;

          break;
        case "buy":
          vm.$(".type").removeClass("color");
          ev.target.classList.add("color");
          vm.list = vm.listBuy;
          this.flag = vm.list[0] ? true : false;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
}
.cart {
  margin: 3.125rem auto;
  text-align: left;
}
.cart h2 {
  padding: 1.25rem 0;
  border-bottom: 1px solid #ddd;
}
.cart .item {
  padding: 0.625rem 0;
  padding-right: 0.625rem;
  float: left;
}
.cart .item p {
  padding-bottom: 0.2rem;
  border: 2px solid transparent;
}
.cart .item:hover p {
  color: #0aa082;
  border-bottom: 2px solid #0aa082;
}

.cart .item span {
  font-size: 0.75rem;
}
.cart .item span::after {
  content: ")";
}
.cart .item span::before {
  content: "(";
}
.cart .item p {
  color: #5c5c5c;
  cursor: pointer;
}
.cart .item .color {
  color: #0aa082;
  border-bottom: 2px solid #0aa082;
}
.cart .list tr {
  line-height: 2;
}
.cart .list th {
  font-size: 0.875rem;
  width: 25rem;
  text-align: center;
  color: #5c5c5c;
}
.cart .list th:not(:nth-of-type(1)) {
  width: 9.375rem;
}

.cart .list td {
  text-align: center;
}
.cart .list td a {
  color: #cd3333;
}
.cart .empty {
  width: 11.875rem;
  margin: 3.125rem auto;
}
.cart .empty p {
  text-align: center;
  color: #5c5c5c;
  font-size: 0.875rem;
}

/*app*/
@media all and (max-width: 750px) {
  .cart .list th,
  .cart .list td {
    display: inline-block;
    width: 4.5rem !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>