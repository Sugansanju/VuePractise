<template>
  <div class="hello">
    <div v-if="isLoggedIn">
             <h2>Welcome to Kodehelp.com</h2>
             <button @click="login" type="submit">Logout</button>
           </div>
           <div v-else>
             <input type="text" placeholder="username">
             <input type="password" placeholder="password">
             <button @click="login" type="submit">Login</button>
           </div>
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
         isLoggedIn: false
    }
  },
  methods:{
           login: function(){
             // 'this' refers to the vueModel instance
             this.isLoggedIn = !this.isLoggedIn;
           }
         }
}
</script>
<style>
</style>
