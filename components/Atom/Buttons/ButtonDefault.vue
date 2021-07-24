<template>
  <div>
    <button
      :class="{ 'color-red': itemStatus }"
      class="button button-default"
    >
      <p class="text">
        <slot>default</slot>
      </p>
    </button>
  </div>
</template>

<script>
export default {
  props: ['itemStatus']
}
</script>

<style scoped>
  .button-default {
    background-color: beige;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 2rem;
    margin: 1rem;
  }
  .color-red {
    background-color: #ddd;
  }
</style>

