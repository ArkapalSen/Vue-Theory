<template>
    <h1 class='heading' >Welcome to Computed Property</h1>

    <div>
        <h2>Normal way</h2>
        <p>Effective Price : {{(actualPrice * (100-discount))/100}}</p>
        <p>Discount : {{(actualPrice * discount)/100}}</p>
    </div>

    <div>
        <h2>Computed Property way</h2>
        <p>Effective Price : {{getResult}}</p>
        
    </div>
</template>

<script>
    export default{
        name : 'ComputedProperty',
        data(){
            return{
                actualPrice : 500,
                discount : 10,
            }
        },
        computed:{
            getResult(){
                return (this.actualPrice * (100-this.discount))/100
            }
        }
    }
</script>

<style scoped>
    .heading{
        color : #540CF9
    }
</style>