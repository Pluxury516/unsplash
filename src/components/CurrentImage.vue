<template>
  <div class="test">
    <div class="user-info">
      <h5 class="user-name">
        {{ image.user.name }}
      </h5>
      <img
        alt=""
        class="user-img"
        :src="image.user.profile_image.large">
    </div>
    <img
      alt=""
      :src="image.urls.regular">
    <button @click="$emit('close')">
      &times;
    </button>
  </div>
</template>

<script lang="ts">
import { IImage } from '@/types/Intarfaces'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class CurrentImage extends Vue {
  @Prop({ type: Object, required: true })image!:IImage
}
</script>

<style lang="scss" scoped>

.test{
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 800px;
  }
  img{
  border-radius: 5px;
  width: 100%;
  position: relative;
  height: 80%;
  }
  button{
    background: none;
    border: none;
    font-size: 4rem;
    color: red;
    position: absolute;
  }
  .user-info{
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fff;
    margin: 10px;
    width: 20%;
  }
  .user-name{
    color: black;
  }
  .user-img{
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
  }

</style>