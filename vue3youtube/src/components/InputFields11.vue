<template>
    <h1 class='heading'>Get input field value</h1>
    <div>
        <input type = 'text' placeholder='Enter Email' v-model = 'email' />
        <br /><br />
        <input type = 'password' placeholder='Enter Password' v-model = 'password' />
        <br /><br />
        <button v-on:click=getData()>Get Value</button>
    </div>
</template>

<script>
    export default{
        name : 'InputFields',
        data(){
            return{
                email : null,
                password : null,
            }
        },
        methods:{
            getData(){
                console.log(this.email);
                console.log(this.password);
            },
        },
        
    }
</script>

<style scoped>
    .heading{
        color : #00C8EE
    }
    
</style>