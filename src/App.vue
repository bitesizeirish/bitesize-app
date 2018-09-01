<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div v-if="!isLoggedIn" class="navbar-brand">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <router-link to="/login" class="navbar-item">Log In</router-link>
      </div>
      <div v-if="isLoggedIn" class="navbar-brand">
        <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <router-link to="/logout" class="navbar-item">Log Out</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
};
</script>
