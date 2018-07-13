<template>
  <div class="home">
    <div class="top">
      <Nav>
      </Nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import { mapMutations } from 'vuex';
export default {
  name: "home",
  data() {
    return {
      
    }
  },
  components: {
    Nav,
  },
  created(){
    this.getUid(this)
  },
  methods: {
    ...mapMutations(['getUid'])
  }
};
</script>

<style scoped>
.center {
  width: 62.5rem;
  margin: 0 auto;
}

@media all and (max-width: 750px) {
  .center{
    width: 100%;
  }
}
</style>
