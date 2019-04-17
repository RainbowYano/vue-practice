<template>
 <div>
 <upload-img :fileList.sync="fileList" @change-file-list="function(val){fileList = val}"></upload-img>
 </div>
</template>

<script>
import uploadImg from '@/components/UploadImg/index'
export default {

 data () {
 return {
          fileList: [
        {
          name: "food.jpeg",
          origin: "old",
          url:
            "http://img0.imgtn.bdimg.com/it/u=1624460426,2337993472&fm=26&gp=0.jpg"
        },
        {
          name: "food2.jpeg",
          origin: "old",
          url:
            "http://img3.imgtn.bdimg.com/it/u=1797342968,3541915061&fm=26&gp=0.jpg"
        }
          ]
 }
 },

 methods: {
    //  changeFileList(val) {
    //      this.fileList = val
    //  }
 },

 created () {
 },
 components: {
     uploadImg
 }
}
</script>

<style lang='less' scoped>

</style>
