<template>
  <div>
    <input
      placeholder="test"
      type="text"
      :value="value"
      @input="onInput($event.target.value)">
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator'

@Component({
})
export default class ImageSearch extends Vue {
@Model('input', { type: String, default: '' })readonly value!:string
onInput (value:string):void {
  this.$emit('input', value)
}
}
</script>

<style lang="scss" scoped>
input{

  width: 60.5%;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  &:focus {
    border: 1px solid#778899;
  }
}

</style>