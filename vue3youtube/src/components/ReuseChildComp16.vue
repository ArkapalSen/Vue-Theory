<template>
    <h2>Reuse Child Component</h2>
    <h4 class='user'>Name : {{parentProps.name}} with mail : {{parentProps.email}}</h4>
    <button v-on:click='funcProps(parentProps.name)'>Click to Get Name</button>
    <button v-on:click='funcProps(parentProps.email)'>Click to Get Email</button>
</template>

<script>
    export default{
        name:'ReuseChildComponent',
        props:{
            parentProps: Object,
            funcProps : Function,
        }
    }
</script>

<style scoped>
    .user{
        background-color : #FFD502;
        color : #FF02EC;
        padding : 10px;
        border-bottom : 1px solid;
        border-radius : 20px;
        margin-bottom : 20px;
    }
</style>