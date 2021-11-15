<template>
  <div id="app">
    <div>
      <ImageSearch
        :value="value"
        @input="onInput" />
    </div>
    <div class="row">
      <ImageList
        v-if="images.length"
        ref="imageList"
        :images="
          images" />
      <div
        v-else
        class="unfoundet">
        Nothing found
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageSearch from './components/ImageSearch.vue'
import ImageList from './components/ImageList.vue'
import { IImage } from './types/Intarfaces'
import { UnsplashApi } from './http/Api'
import { Debounce } from './utils/decorator'

@Component({
  components: {
    ImageSearch,
    ImageList

  }
})
export default class App extends Vue {
  images:Array<IImage>= []
  pagination = { currentPage: 1, totalPages: 0 }
    value=''
    @Debounce(250)
    async onInput (v:string):Promise<void> {
      this.value = v
      if (!this.value) {
        this.images = []
        return
      }
      const photo = new UnsplashApi()
      this.images = (await (photo.getPhoto(this.value, this.pagination.currentPage))).results
    }

    onScrollHandler ():void {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      if (scrollTop + clientHeight >= scrollHeight) {
        const uploadPhoto = new UnsplashApi()
        uploadPhoto.getPhoto(this.value, this.pagination.currentPage++).then(response => {
          this.images = [...this.images, ...response.results]
        })
      }
    }

    mounted ():void {
      window.addEventListener('scroll', this.onScrollHandler)
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: flex-start;
}
.unfoundet{
  font-size: 1.5rem;
  padding-top: 10px;
}
</style>
