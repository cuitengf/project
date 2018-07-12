<template>
    <div class="advertisement" >
        <div>
            <section class="img" v-for="(item, index) in img" :key="index">
                {{item.img}}
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "Advertisement",
  data() {
    return {
      img: [{ img: "招" }, { img: "聘" }, { img: "广" }, { img: "告" }],
      i: 0
    };
  },
  methods: {
    myFocus() {
      console.log(13456);
    },
    show() {
      if (this.i == this.$(".img").length) this.i = 0;
      this.$(".img").hide();
      this.$(".img")
        .eq(this.i)
        .show();
      this.i++;
    }
  },
  created() {
    setInterval(() => {
      this.show()
    },3000)
  }
};
</script>

<style scoped>
.advertisement {
  margin-top: 1.25rem;
  position: relative;
  height: 6.25rem;
}
.advertisement .img {
  position: absolute;
  /* display: inline-block; */
  width: 100%;
  height: 6.25rem;
  border: 1px solid red;
}
.advertisement .img:not(:nth-of-type(1)) {
  display: none;
}
.advertisement .img:nth-of-type(2n) {
  background: deepskyblue;
}
.advertisement .img:nth-of-type(2n - 1) {
  background: gold;
}
</style>