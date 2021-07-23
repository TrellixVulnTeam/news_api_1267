<template>
  <div class="bg-gray-100">
    <h1 class="font-bold">このサイトについて</h1>
    <h2>{{ nuxt }}</h2>
    <input type="text" v-model="newText">
    <p>{{ newText }}</p>
    <button @click="countUp">{{ click }}</button>
    <p>{{ counter }}</p>

    <p>{{ number | addComma }}</p>

    <button>こんにちは
    </button>

    <p>{{ albums }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newText: "好きな文字を入力してね",
      click: "クリックしてね",
      counter: 0,
      number: 1234567890,
      nuxt: "Hello Nuxt!",
      albums: []
    }
  },
  methods: {
    countUp() {
      this.counter += 1
    },
  },
  filters: {
    addComma (number) {
      return number.toLocaleString();
    }
  },
  async fetch() {
    this.albums = await fetch(
      'https://jsonplaceholder.typicode.com/albums'
    ).then(res => res.json())
  },
  async getSomething() {
  const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
  this.posts = JSON.parse(response.posts)
}

}
</script>