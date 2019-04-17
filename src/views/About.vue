<template>
  <el-upload action="string" :http-request="uploadImg" :show-file-list="false"></el-upload>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    uploadImg(item) {
      let formData = new FormData();
      formData.append("file", item.file);
      formData.append("group", "system");

      Api.uploadFile({
        data: formData // 选择FormData方式传参
      })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err, "error");
        });
    }
  },

  created() {}
};
</script>

<style lang='less' scoped>
</style>
