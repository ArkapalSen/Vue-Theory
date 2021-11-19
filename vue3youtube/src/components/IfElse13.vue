<template>
    <h1 class='heading'>If-Else</h1>
    <div>
        <h1 v-if='val'>Data Show/Hidden</h1>
        <button v-on:click='toggleFunc()'>Show/Hide Button</button>
    </div>
</template>

<script>
    export default{
        name : 'IfElse',
        data(){
            return{
                val : true
            }
        },
        methods:{
            toggleFunc(){
                if(this.val === true){
                    this.val = false
                }
                else if(this.val === false){
                    this.val = true
                } 
            }
        }       
    }
</script>

<style scoped>
    .heading{
        color : #00C8EE
    }
    
</style>