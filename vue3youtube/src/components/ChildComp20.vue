<template>
    <h1>Child Component for passing props from parent</h1>
    <button v-on:click='passProps(val)'>Click to Alert</button>
</template>

<script>
    export default {
        name : 'ChildComponent',
        data(){
            return{
                val : 'ArkaChildValue',
            }
        },
        props:{
            passProps : Function,
        }
    }
</script>
