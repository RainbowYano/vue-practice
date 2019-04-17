<template>
  <div class="test">
    <el-upload
      class="my-el-upload"
      drag
      :file-list="fileList"
      :auto-upload="false"
      :multiple="true"
      action
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
    >
      <i>将文件拖到此处，或点击此处上传</i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    //回显的图片
    fileList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      this.$emit("change-file-list", fileList);
    },
    handleChange(file, fileList) {
      this.$emit("change-file-list", fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};

// 使用 
// <upload-img :fileList.sync="fileList" @change-file-list="function(val){fileList = val}"></upload-img>
</script>

<style lang='less'>
.my-el-upload .el-upload {
  display: block;
  margin: 0 auto;
  width: 360px;
  height: 180px;
}
.my-el-upload .el-upload-dragger i {
  font-size: 16px;
}
</style>


