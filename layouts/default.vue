<template>
  <div>
    <Header />
    <div class="main-area bg-gray-50">
      <p>layouts/default.vueをアプリ直下に持ってきましたが大丈夫でした</p>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .main-area {
    min-height: 100vh;
  }
</style>