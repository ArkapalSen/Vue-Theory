<template>
    <h2>Parent Component of Reuse Child</h2>
    <div>
        <ul>
            <li v-for='user in users' :key='user'>
                <ReuseChildComponent :parentProps='user' :funcProps='getData' />
            </li>
        </ul>
    </div>
</template>

<script>
    import ReuseChildComponent from './ReuseChildComp.vue'
    export default{
        name : 'ParentReuseChild',
        components : {
            ReuseChildComponent
        },
        data(){
            return{
                users:[
                    {
                        name : 'Arkapal Sen',
                        email : 'arkapalsen@gmail.com'
                    },
                    {
                        name : 'Steve Smith',
                        email : 'stevesmith@gmail.com'
                    },
                    {
                        name : 'David Warner',
                        email : 'davidwarner@gmail.com'
                    },
                    {
                        name : 'Ashton Agar',
                        email : 'ashtonagar@gmail.com'
                    },
                ]
            }
        },
        methods:{
            getData(par){
                console.log(par);
            }
        }
    }
</script>