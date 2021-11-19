<template>
  <h1>beforeMount and updated</h1>
  <div>
    <p ref='count'>{{counter}}</p>
    <button @click='counter++'>Update Count</button>
  </div>
</template>

<!-- beforeUpdate runs just before UI call and updated calls after ui call..
any value loaded are taken from ui and not from the variable or property
checking login detals or any validation..this might help as it checks from ui and not from properties -->
<script>
export default {
  name: 'beforeUpdateupdated',
  data(){
    return{
      counter : 0,
    }
  },
  beforeUpdate(){
    console.log('before update',this.$refs['count'].textContent);
  },
  updated(){
    console.log('after update',this.$refs['count'].textContent);
  }
  
}
</script>

<style>
#app {
  
}
</style>
