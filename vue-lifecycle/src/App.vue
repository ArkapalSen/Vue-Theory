<template>
    <h1>Root App</h1>
    <div>
      <beforeCreatecreated/>
      <beforeMountmounted/>
      <beforeUpdateupdated/>
      <div>
        <beforeUnmountunmounted v-if='show' />
        <button @click='show = !show'>Toggle</button>
      </div>
      
    </div>
</template>

<script>
// import beforeCreatecreated from './components/beforeCreate&Created34.vue'
// import beforeMountmounted from './components/beforeMount&mount34.vue'
// import beforeUpdateupdated from './components/beforeUpdate&updated34.vue'
import beforeUnmountunmounted from './components/beforeUnmountunmounted34.vue'

export default {
  name: 'App',
  components: {
    // beforeCreatecreated
    // beforeMountmounted
    // beforeUpdateupdated
    beforeUnmountunmounted
  },
  data(){
    return{
      show : true,
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
