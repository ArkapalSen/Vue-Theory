<template>
    <h1>Ref In Use Js</h1>
    <div>
        <input type='text' ref='input' />
        <button v-on:click='getData'>Click Me</button>
    </div>
</template>

<script>
    export default{
        name : 'Ref',
        methods:{
            getData(){
                this.$refs.input.focus()
                let val = this.$refs.input.value
                console.log(val);
                this.$refs.input.style.color = 'red'
            }
        }
    }
</script>

<style scoped>
    h1{
        color : green
    }
</style>