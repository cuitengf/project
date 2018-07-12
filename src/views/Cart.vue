<template>
    <div class="cart center">
      <h2>购物车</h2>
      <div>
        <ul class="clearfix">
          <li class="item">
            <p class="type color" @mouseover="typeOne($event)" id="all">
              全部商品
                <span>
                  {{all}}
                </span>
            </p>
          </li>
          <li class="item">
            <p class="type" @mouseover="typeOne($event)" id="buy">
              已购买
                <span>
                  {{buy}}
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
            <td>{{item.name}}</td>
            <td>{{item.pic}}</td>
            <td>{{item.count}}</td>
            <td>{{item.subtotal}}</td>
            <td><a href="javascript;">删除</a></td>
          </tr>
        </table>
      </div>
      <div v-if="!list" class="empty">
        <img src="../assets/empty.png" alt="">
        <p>购物车里空空的~</p>
        <p>快去挑选你喜欢的商品吧!</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      all: 0,
      buy: 0,
      list: "",
      listFlag: "all",
      listAll: '',
      listBuy: [
        { name: 'name', pic: 10, count: 1, subtotal: 14.55}
      ]
    };
  },
  created() {
    this.isLogin();
    this.getCart();
  },
  methods: {
    isLogin() {
      if (!this.$cookie.get("user")) this.$router.push({ path: "/login" });
    },
    getCart() {
      this.list = this.listAll;
    },
    typeOne(ev) {
      var vm = this;
      this.$(".type").click(function() {
        switch (vm.$(this).attr("id")) {
          case "all":
            vm.$(".type").removeClass("color");
            vm.$(this).addClass("color");
            vm.list = vm.listAll;
            break;1

          case "buy":
            vm.$(".type").removeClass("color");
            vm.$(this).addClass("color");
            vm.list = vm.listBuy;
            break;

          default:
            break;
        }
      });
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
</style>