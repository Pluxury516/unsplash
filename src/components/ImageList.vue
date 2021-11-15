<template>
  <div class="image">
    <ImageListItem
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      @click="currentImage=image" />
    <CurrentImage
      v-if="currentImage"
      :image="currentImage"
      @close="currentImage=null" />
  </div>
</template>

<script lang="ts">
import { IImage } from '@/types/Intarfaces'
import { Component, Prop, Vue } from 'vue-property-decorator'
import ImageListItem from './ImageListItem.vue'
import CurrentImage from './CurrentImage.vue'

@Component({
  components: {
    ImageListItem,
    CurrentImage
  }
})
export default class ImageList extends Vue {
  @Prop({ type: Array, required: true })images!:Array<IImage>
  currentImage:IImage | null=null
}
</script>

<style lang="scss" scoped>
.image{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>