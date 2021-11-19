<template>
    <h1 class='heading'>Slots</h1>

    <div>
        <!-- <slot> because of use of slot...we cant write normal tag -->
        <slot>default val</slot>
    </div>
</template>

<script>
    export default {
        name : 'Slots',
        data(){
            return{
                
            }
        },
        props:{
           
        }
    }
</script>

<style scoped>
    .heading {
        color : #540CF9;
    }
</style>