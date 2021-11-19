<template>
    <h1 class = 'heading'>Student Child Component for Passing Props</h1>
    <p>{{nameProp}}</p>
    <p>{{varProp}}</p>
</template>

<script>
    export default{
        name : 'StudentChildComponent',
        props:{
            nameProp : String,
            varProp : String,
        }
    }
</script>

<style scoped>
    .heading{
        color : #0050E6;
    }
</style>