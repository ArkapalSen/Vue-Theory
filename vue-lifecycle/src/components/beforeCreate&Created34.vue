<template>
  <h1>beforeCreate and created</h1>
  <div>
    <p>{{name}}</p>
  </div>
</template>
<script>


export default {
  name: 'beforeCreatecreated',
  data(){
    console.warn('created');
    return{
      name : 'Arkapal'
    }
  },
  beforeCreate(){
    this.name = 'arka changed before'
    alert('created before dom load');
  },
  created(){
    this.name = 'arka changed after'
    alert('created after dom updation');
  }
}
</script>

<style>
#app {
  
}
</style>
