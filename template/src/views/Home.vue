<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App by Custom Vue Cli" />
  </div>
</template>

<script>
// @ is an alias to /src
const HelloWorld = () => import("@/components/HelloWorld.vue");

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
