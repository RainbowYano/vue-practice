<template>
  <div>
    <img src="http://img4.imgtn.bdimg.com/it/u=3159012673,405655215&fm=26&gp=0.jpg" alt="">
    <button>点我aaaaaaaaaaaaa</button>
    <div id="mydropzone" ref="mydropzone" action="url" class="dropzone">
      <input type="file" name="file">
    </div>
  </div>
</template>

<script>
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
Dropzone.autoDiscover = false;
export default {
  data() {
    return {};
  },

  methods: {},

  created() {}
};
</script>

<style lang='less' scoped>
</style>
