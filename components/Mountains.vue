<template>
  <div>
    <AtomButtonsButtonDefault
      itemStatus="false"
    >
      click!
    </AtomButtonsButtonDefault>
  </div>
</template>

<script>
export default {
  props: {
    propsMessage: {
      type: String,
      default: 'ハロー！',
    }
  }
}
</script>

<style scoped>
  h1 {
    color: rgb(65, 193, 222);
    font-size: 1.5rem;
  }
  h2 {
    color: red;
    font-size: 1.2rem;
  }
</style>