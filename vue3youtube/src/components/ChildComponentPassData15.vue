<template>
    <h2>Child Component Pass Data to Parent</h2>
    <h4>{{nameProps}}</h4>
    <p>Name : {{userProps.name}} with mail : {{userProps.email}}</p>
    <!--<p>{{funcProps}}</p> only when in parent props func is called-->
    <button v-on:click='funcProps()'>Click To Run Function</button>
</template>

<script>
    export default {
        name : 'ChildComponentPassData',
        props: {
            nameProps : String,
            userProps : Object,
            funcProps : Function,
        }
    }
</script>

<style scope>

</style>