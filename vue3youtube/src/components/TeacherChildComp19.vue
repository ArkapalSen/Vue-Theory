<template>
    <h1 class = 'heading'>Teacher Child Component for Passing Props</h1>
    <p>{{nameProp}}</p>
    <p>{{varProp}}</p>
</template>

<script>
    export default{
        name : 'TeacherChildComponent',
        props:{
            nameProp : String,
            varProp : String
        }
    }
</script>

<style scoped>
    .heading{
        color : #0050E6;
    }
</style>