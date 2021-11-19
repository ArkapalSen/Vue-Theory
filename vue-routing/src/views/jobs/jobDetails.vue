<template>
    <h1>Job Details Page</h1>
    <div v-if='job'>
        <h2>{{job.title}}</h2>
         <p>THe job id is : {{id}}</p>
         <p>{{job.details}}</p>
    </div>
    <div v-else>
        <p>Loading Job details...</p>
    </div>
</template>
<script>
export default {
    name : 'JobDetails' ,
    props : ['id'],
    data(){
        return {
            job : null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id).then(   res=> res.json() ).then(data => this.job = data).catch(err=> console.log(err)) 
    }
    // data(){
    //     return{
    //         id : this.$route.params.id
    //     }
    // }   
}
</script>
<style lang="">
    
</style>