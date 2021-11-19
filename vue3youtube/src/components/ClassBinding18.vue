<template>
    <h1>Class Binding</h1>
    <h3 class='defClass' :class='{test1:colorfull , err:true}'>Test Component</h3>       <!-- , for multiple classes adition dynamically -->
    <h3 :class='classBind'>Test Component 2</h3>
    <button v-on:click='colorfull=!colorfull'>Click</button>
</template>

<script>
    export default{
        name : 'ClassBinding',
        data(){
            return{
                colorfull : false,
            }
        },
        computed:{
            classBind(){
                return {
                    colorfull2 : true
                }
            }
        }
    }
</script>

<style scoped>
    h1{
        color : orange;
    }
    .test1{
        color : red;
    }
    .err{
        background-color : blue;
    }
    .colorfull2{
        font-size : 50px;
    }
</style>