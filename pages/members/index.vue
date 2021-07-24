<template>
  <div>
    <NuxtLink to="/">ホーム画面へ</NuxtLink>
    <p>{{ message }}</p>
    <div>エリア１</div>
    <div>エリア2</div>
    <Mountains :propsMessage="myMessage"></Mountains>
    <Mountains>
      <template v-slot:title></template>
    </Mountains>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "/members/indexのページです",
      myMessage: "この文はpropsで子に渡した文字です",
    }
  }
}
</script>