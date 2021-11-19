<template>
    <h1 class='heading'>Simple Form</h1>
    <Form>
        <label>Email </label>
        <input type='text' placeholder='Enter email id' v-model='form.email' />
        <br/><br/>
        <label>Password </label>
        <input type='password' placeholder='Enter password' v-model='form.password' />
        <br/><br/>
        <select v-model='form.country'>
            <option>India</option>
            <option>Australia</option>
            <option>New ZeaLand</option>
        </select>
        <br/><br/>
        <h3>Technologies Available</h3>
        <label>JavaScript </label>
        <input type='checkbox' value='Javascript' v-model='form.technology' />
        <label>C </label>
        <input type='checkbox' value='C' v-model='form.technology' />
        <br/><br/>
        <h3>Gender</h3>
        <label>Male </label>
        <input type='radio' value='Male' name='gender' v-model='form.gender' />
        <label>Female </label>
        <input type='radio' value='Female' name='gender' v-model='form.gender' />
        <br/><br/>
        <button v-on:click='login' type='button'>Save data</button>
    </Form>
    <div>
        <ul>
            <li v-for='err in error' v-bind:key='err' >
                {{err}} field is empty
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name : 'SimpleForm',
        data(){
            return{
                form:{
                    email : '',
                    password : '',
                    country : '',
                    technology : ['Javascript','C'],
                    gender : '',
                },
                error:[],
            }
        },
        methods:{
            login(){
                this.error = [];
                for(const item in this.form){
                    if(this.form[item] === '' || this.form[item].length === 0){
                        this.error.push(item)
                    }
                }
                if(this.error.length===0){
                    alert('Form Submitted successfully');
                }
            }
        }
    }
</script>

<style scoped>
    .heading{
        font-size : '25px';
        color : #540CF9
    }
</style>