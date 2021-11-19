<template>
    <h1 class='heading'>Modifiers</h1>
    <input type='text' v-model.trim.lazy='data' />       <!-- .lazy is use for getting value after out of focus   .trim for trimming spaces in front-->
    <p>{{data}}</p>
                                                            <!-- we can chain multiple modifiers-->
    <input type='number' v-model.number.lazy='data2' />       <!-- .number for converting string to number-->
    <p>{{typeof(data2)}}</p>
    <p>{{data2}}</p>
</template>

<script>
    export default{
        name : 'Modifiers',
        data(){
            return{
                data:'',
                data2 : '',
            }
        }
    }
</script>

<style scoped>
    .heading{
        color:#540CF9;
    }
</style>