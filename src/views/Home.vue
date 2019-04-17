<template>
  <div class="components-container">
    <!-- <code>
      Based on <a class="link-type" href="https://github.com/rowanwins/vue-dropzone"> dropzone </a>.
      {{ $t('components.dropzoneTips') }}
    </code> -->
    <div class="editor-container">
      <dropzone id="myVueDropzone" url="https://httpbin.org/post" preview="1" :defaultImg="defaultImg" @dropzone-fileAdded="dropzoneS" @add-new-img="addNewImg" @remove-img="removeImg" @remove-old-img="removeOldImg" />
    </div>
    <button @click="click">点我</button>

  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'

export default {
  name: 'DropzoneDemo',
  data() {
    return {
      fileList: [],
      defaultImg:[
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1624460426,2337993472&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1797342968,3541915061&fm=26&gp=0.jpg'
      ]
    }
  },
  components: { Dropzone },
  methods: {
    click(){
      console.log(this.fileList)
      console.log(this.defaultImg)
    },
    dropzoneS(file) {
      console.log('fileadded')
      // console.log(file)
      // this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR(file) {
      console.log('remove')
      // console.log(file)
      // this.$message({ message: 'Delete success', type: 'success' })
    },
    addNewImg(file) {
      this.fileList.push(file)
      // console.log(this.fileList)
    },
    removeImg(file) {
      this.fileList.splice(this.fileList.indexOf(file), 1);
      // console.log(this.fileList)
    },
    removeOldImg(url) {
      // console.log(url)
      this.defaultImg.splice(this.defaultImg.indexOf(url), 1);
    }
  }
}
</script>

