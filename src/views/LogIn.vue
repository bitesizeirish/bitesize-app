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
          
            <div class="control">
              <button class="button is-link">Submit</button>
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
      email: '',
      password: ''
    };
  },
  methods: {
    checkForm() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', credentials)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    },
  }
}
</script>
