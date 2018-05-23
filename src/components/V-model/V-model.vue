<template>
  <div class="hello">
<input v-model="message" placeholder="name">
<p>Name:{{message}}</p>
<p>A list of names that rhyme: {{namesThatRhyme.join(', ')}}</p>
<label>
  <input type="checkbox" value="Daniel" v-model="namesThatRhyme"/>
  Daniel
</label>
<label>
  <input type="checkbox" value="Nathaniel" v-model="namesThatRhyme"/>
  Nathaniel
</label>
<label>
  <input type="checkbox" value="Hubert" v-model="namesThatRhyme"/>
  Hubert
</label>
<p>You have decided this statement is {{statementIsTrue}}</p>
<label>
  <input type="checkbox" v-model="statementIsTrue"/>
  Is this statement true?
</label>
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      message:'',
      namesThatRhyme: [],
      namestatementIsTrue: true  
    }
  }
}
</script>
<style>

</style>
