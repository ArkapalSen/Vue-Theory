<template>
    <h1 class='heading'>Watchers</h1>

    <div>
        <h2>{{count}}</h2>
        <button v-on:click='count=count+1'> + </button>
        <button v-on:click='count=count-1'> - </button>
    </div>
</template>

<script>
    export default {
        name : 'Watchers',
        data(){
            return{
                count : 0,
            }
        },
        //watchers watch any change in the property it is connected and it will trigger the function connected with the property ie..watcher func
        watch:{ 
            count(val,prev){            //wacthers func name should be same as property name
                if(val > 5 && val > prev ){
                    this.count = 0;
                }
            }
        }
    }
</script>

<style scoped>
    .heading {
        color : #540CF9;
    }
</style>