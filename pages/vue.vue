<template>
  <div id="app" class="p-10">
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      items: [
        { message: 'foo' },
        { message: 'りんご' },
      ]
    }
  }
}

</script>