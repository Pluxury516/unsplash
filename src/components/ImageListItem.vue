<template>
  <div
    class="image-item"
    @click="$emit('click', $event)">
    <img
      alt=""
      :src="image.urls.small">
  </div>
</template>

<script lang="ts">
import { IImage } from '@/types/Intarfaces'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class ImageListItem extends Vue {
@Prop({ type: Object, required: true })image!:IImage
}
</script>

<style lang="scss" scoped>
.image-item{

  margin: 20px;

}
img{
  width: 400px;
  height: 400px;
  margin-top: 15px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{filter: brightness(0.4)}
}

</style>