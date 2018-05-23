<template>
  <div class="hello">
    <div v-for="(user,value,index) in users">
                {{index}}.{{value}}:{{user}}
        </ul>
    </div>
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      users: {
        firstname:'John',
        lastname:'michal'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
