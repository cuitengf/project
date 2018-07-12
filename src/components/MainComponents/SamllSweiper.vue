<template>
    <div class="samllSweiper">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>
                <div>
                    <ul class="list">
                        <li class="item">
                           <a href="javascript:">
                               <img src="" alt="">
                           </a>
                           <p>
                               <span class="recommend" :style="{color: recommendColor, fontSize: isSize}">推荐</span>
                           </p>
                           <a href="javascript:">
                                <span class="name" :style="{color: nameColor, fontSize: isSize}" >上帝怀中的羔羊</span>
                           </a>
                           <p>
                               <span class="author" :style="{color: authorColor, fontSize: isSize}">
                                   作者
                                </span>
                           </p>
                        </li>
                    </ul>
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
  }
};
</script>

<style scoped>
.samllSweiper {
  margin: 1.25rem 0;
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