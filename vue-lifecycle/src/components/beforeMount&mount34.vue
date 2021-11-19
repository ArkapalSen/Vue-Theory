<template>
  <h1>beforeMount and mounted</h1>
  <div>
    <p>{{name}}</p>
  </div>
</template>
<script>


export default {
  name: 'beforeMountmounted',
  data(){
    console.warn('created');
    return{
      name : 'Arkapal'
    }
  },
  beforeMount(){
    console.warn('beforeMount',this.$el);
  },
  mounted(){
    console.warn('mounted',this.$el);
  }
  
}
</script>

<style>
#app {
  
}
</style>
