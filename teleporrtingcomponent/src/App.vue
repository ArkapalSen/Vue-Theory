<template>
    <h1>Root App</h1>

    <div>
      <teleport to='#footer'>
        <TeleportComponent/>
      </teleport>
    </div>
    
  
</template>

<script>
import TeleportComponent from './components/TeleportComponent32.vue'

export default {
  name: 'App',
  components: {
    TeleportComponent
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
