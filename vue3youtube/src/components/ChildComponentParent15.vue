<template>
    <h1>Parent of Child Component Passing value</h1>
    <ChildComponentPassData nameProps='ArkapalSen' :userProps='user' :funcProps='getData' />
</template>

<script>
    import ChildComponentPassData from './ChildComponentPassData.vue'
    export default{
        name : 'ChildComponentParent',
        components:{
            ChildComponentPassData
        },
        data(){
            return{
                user:{
                    name : 'Arka',
                    email : 'arkapalsen@gmail.com'
                }
            }
        },
        methods:{
            getData(){
                console.log(`Parent Function called`);
            }
        }
    }
</script>