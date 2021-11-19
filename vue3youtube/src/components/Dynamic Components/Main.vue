<template>
    <h1>Main File</h1>
    <div>
        <button @click="tabName='Vue'">Load Vue</button>
        <button @click="tabName='React'">Load React</button>
        <button @click="tabName='Js'">Load Js</button>  
        
        <component :is='tabName'/>
    </div>
</template>

<script>
    import Vue from './Vue.vue'
    import React from './React.vue'
    import Js from './Js.vue'

    export default{
        name : 'Main',
        components:{
            Vue,
            React,
            Js,
        },
        data(){
            return{
                tabName:''
            }
        }
    }
</script>