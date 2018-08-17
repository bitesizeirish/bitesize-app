<template>
  <div class="home">
    <img alt="Bitesize Irish Gealic logo" src="../assets/bitesize-irish-gaelic.png">
    <HelloWorld msg="Welcome to the future Bitesize app"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
