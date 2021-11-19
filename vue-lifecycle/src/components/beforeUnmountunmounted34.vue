<template>
  <h1 ref='user'>beforeUnmount and unmount</h1>
</template>

<!-- any deletion of html from ui..just before deletion..beforeUnmount is called..
but as soon as deletion is done and that part of ui is empty..unmounted is called..so doing unmounted..that part of ui will be empty -->
<script>
export default {
  name: 'beforeUnmountunmounted',
  data(){
    return{
      show : true,
    }
  },
  beforeUnmount(){
    console.log(`before Unmounted`,this.$refs['user']);
  },
  unmounted(){
    console.log(`unmounted`,this.$refs['user']);
  }
  
}
</script>

<style>
#app {
  
}
</style>
