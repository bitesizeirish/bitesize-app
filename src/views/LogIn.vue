<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <form @submit.prevent="checkForm">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input 
                    class="input" 
                    type="text" 
                    placeholder="shamrock@biteme.com"
                    v-model="email">
                </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input 
                  class="input" 
                  type="password" 
                  placeholder="" 
                  v-model="password">
              </div>
            </div>
          
            <div v-if="error">
              <div class="field">
                <div class="control notification is-warning">
                  There was a problem with your email or password. Please try entering them again and re-submitting.
                  If you're stuck, do please 
                  <router-link to="/contact">contact us</router-link>.
                </div>
              </div>
              <br>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
        </form>
        </div>
        <div class="column">
          Don't have a Bitesize account? 
          <a href="https://www.bitesize.irish/try">Take a free trial.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    checkForm() {
      const credentials = {
        email: this.email,
        password: this.password,
        type: "password"
      };
      this.$store
        .dispatch("login", credentials)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {
          this.error = true;
        });
    }
  }
};
</script>
