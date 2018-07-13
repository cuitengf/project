<template>
    <div class="samllHot">
        <div class="title">
            <h3>热门标签</h3>
            <a href="javascript:">
                <span>所有热门标签</span>
            </a>
        </div>
        <div class="name">
            <ul v-for="(v, index) in list" :key="index" class="clearfix">
                <p>{{v.name}}</p>
                <li 
                class="flag"
                v-for="(it, index) in v.items" 
                :key="index"
                >
                    <a href="javascript:">
                        {{it.item}}
                    </a>
                </li>
                <li><a href="javascript:">
                    更多</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "SamllHot",
  data() {
    return {
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
      ]
    };
  },
  props: ['books']
};
</script>

<style scoped>
.samllHot .title {
  line-height: 1.5;
  padding-bottom: 0.3125rem;
  border-bottom: 0.0625rem solid #ddd;
}
.samllHot .title h3 {
  display: inline-block;
  margin-right: 0.9375rem;
}
.samllHot .title span {
  font-size: 0.875rem;
  color: #3377aa;
}
.samllHot .title span::after,
.samllHot .name li:nth-last-of-type(1) a::after {
  content: "》";
  font-size: 0.3125rem;
  margin-left: 0.125rem;
}
.samllHot .title span:hover {
  padding: 0.0625rem 0.125rem;
  background: #3377aa;
  color: #fff;
}
.samllHot .name ul {
  margin-top: 1.25rem;
  padding: 0.125rem 0.125rem;
  border-bottom: 0.0625rem dashed #ddd;
}
.samllHot .name li {
  float: left;
  padding: 0.125rem 0.3125rem;
  margin: 0.125rem 0.5rem;
  font-size: 0.875rem;
}
.samllHot .name p {
  font-size: 0.9375rem;
}
.samllHot .name li:not(:nth-last-of-type(1)) a {
  color: #3377aa;
}
.samllHot .name li:nth-last-of-type(1) a {
  color: #aaa;
}
</style>