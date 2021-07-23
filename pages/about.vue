<template>
  <div class="bg-gray-300">
    <NuxtLink to="/">ホーム画面へ</NuxtLink>
    <h1 class="font-bold">このサイトについて</h1>
    <h2>{{ nuxt }}</h2>
    <input type="text" v-model="newText">
    <p>{{ newText }}</p>
    <button @click="countUp">{{ click }}</button>
    <p>{{ counter }}</p>
    
    <button @click="show = !show">{{ click }}2</button>
    <transition name="fade">
      <p v-show="show">Nuxt.js</p>
    </transition>

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
      albums: [],
      show: false,
    }
  },
  transition: {
    name: "fade"
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