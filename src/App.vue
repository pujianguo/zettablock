<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        home2: "/home2",
      };
    },
  };
</script>

<style lang="scss">
  @import "./scss/global";
</style>