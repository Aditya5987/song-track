<template>
<v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
        <span @click="navigateTo({name:'root'})">   Songs Track</span>
       </v-toolbar-title>
      <v-spacer> </v-spacer>
       <v-btn  dark
           @click = "navigateTo({name: 'login'})">
            Login
        </v-btn>
        <v-btn  dark
           @click = "navigateTo({name: 'register'})">
            Sign Up
        </v-btn>
     </v-toolbar>

</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
