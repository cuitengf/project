<template>
    <div class="samllSweiper">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="(item, index) in books" :key="index">
                <div class="list">
                    <div class="item">
                        <a href="javascript:">
                            <img :src="item.img" alt="">
                        </a>
                        <p>
                            <span class="recommend" v-if="item.hot" :style="{color: recommendColor, fontSize: isSize}">推荐</span>
                        </p>
                        <a href="javascript:">
                            <span class="name" :style="{color: nameColor, fontSize: isSize}" >{{item.bname}}</span>
                        </a>
                        <p>
                            <span class="author" :style="{color: authorColor, fontSize: isSize}">
                                {{item.bauth}}
                            </span>
                        </p>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  name: "SamllSweiper",
  data() {
    return {
      recommendColor: "#a29e91",
      nameColor: "#3377aa",
      authorColor: "#333",
      isSize: "0.9rem"
    };
  },
  props: ["books"]
};
</script>

<style scoped>
.samllSweiper {
  margin: 1.25rem 0;
}
.item {
  width: 7.1875rem;
}
.item p{
    overflow: hidden;
    text-overflow: ellipsis;
}
img {
  display: inline-block;
  width: 7.1875rem;
  height: 10.75rem;
  border: 1px solid #000;
}
.list p:nth-of-type(1) {
  padding-left: 0.925rem;
  background: #f7f3db;
}
.list {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>