<template>
    <div>

        <div class="center">
            <Advertisement></Advertisement>
        </div>

         <div class="btm center">
            <el-container>
              <el-main>
                  <MainLeft :books='books'></MainLeft>
              </el-main>
              <el-aside width="300px">
                  <MainRigth :books='books'></MainRigth>
              </el-aside>
            </el-container>
        </div>

        <div class="Foot center">
            <Foot></Foot>
        </div>

        <div class="samll_btm">
            <SamllSweiper :books='books'></SamllSweiper>
        </div>

        <div class="samll_hot">
            <SamllHot></SamllHot>
        </div>
        <div class="samllConsult">
            <SamllConsult :books='books'></SamllConsult>
        </div>
    </div>
</template>

<script>
import MainLeft from "./MainComponents/MainLeft";
import MainRigth from "./MainComponents/MainRigth";
import SamllSweiper from "./MainComponents/SamllSweiper";
import SamllHot from "./MainComponents/SamllHot";
import Foot from "./MainComponents/Foot";
import SamllConsult from "./MainComponents/SamllConsult";
import Advertisement from "./MainComponents/Advertisement";

import { mapMutations, mapState } from "vuex";
export default {
  name: "Main",
  components: {
    MainLeft,
    MainRigth,
    SamllSweiper,
    SamllHot,
    Foot,
    SamllConsult,
    Advertisement
  },
  created() {
    this.getBooks(this);
  },
  methods: {
    ...mapMutations(["getBooks"])
  },
  computed: {
    ...mapState(["books"])
  }
};
</script>

<style scoped>
.center {
  width: 62.5rem;
  margin: 0 auto;
}
.el-container .el-main {
  padding: 0;
}

.btm {
  text-align: left;
  margin-top: 1.875rem;
}

/*pc*/
@media all and (min-width: 750px) {
  .samll_btm {
    display: none;
  }
  .samll_hot {
    display: none;
  }
  .samllConsult {
    display: none;
  }
}

/*app*/
@media all and (max-width: 750px) {
  .btm {
    display: none;
  }
  .title {
    width: 100%;
  }
  .center {
    width: 100%;
  }
  .Foot {
    display: none;
  }
}
</style>