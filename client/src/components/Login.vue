<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Login </v-toolbar-title>
       </v-toolbar>
       <div class="pl-4 pr-4 pt-2">
     <v-text-field type="email" name="email" label="Email" v-model="email"> </v-text-field>
     <v-text-field type="password" name="password" label ="Password" placeholder="password" v-model="password"> </v-text-field>
     <div class ="error"  v-html="error"> </div>
     <v-btn dark class="" @click="login">Login</v-btn>
    </div>
     </div>
  </v-flex>
</v-layout>

</template>

<script>
// eslint-disable-next-line no-unused-vars
// import Auth from '@services/Auth'
import Auth from '../services/Auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await Auth.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
