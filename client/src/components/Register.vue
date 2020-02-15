<template>
 <div>
     <h1>Register</h1>
     <input type="email" name="emai" placeholder="email" v-model="email"> <br>
     <input type="password" name="password" placeholder="password" v-model="password"> <br>
     <button @click="register">Register</button>
 </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import Auth from '@services/Auth'
import Auth from '../services/Auth'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      // eslint-disable-next-line no-unused-vars
      const response = await Auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
