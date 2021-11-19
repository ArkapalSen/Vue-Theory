<template>
    <h1 class='heading'>Get Checkbox and Radio Button Value</h1>
    <div>
        <h1>FrameWorks Available</h1>
        <label for='react'>React</label>
        <input type = 'checkbox' value='react' id='react' v-model = 'frameworks' />
        
        <label for='vue'>Vue</label>
        <input type = 'checkbox' value='vue' id='vue' v-model = 'frameworks' />
        
        <label for='angular'>Angular</label>
        <input type = 'checkbox' value='angular' id='angular' v-model = 'frameworks' />
        <br /><br />
        <h1>Back End Lang.</h1>
        <label for='javascript'>Javascript</label>
        <input type = 'radio' value='javascript' id='javascript' name='lang' v-model='backEndLang' />
        
        <label for='php'>PHP</label>
        <input type = 'radio' value='php' id='php' name='lang' v-model='backEndLang' />
        
        <label for='python'>Python</label>
        <input type = 'radio' value='python' id='python' name='lang' v-model='backEndLang' />
        <br /><br />
        <h4>FrameWorks Selected : {{frameworks}}</h4>
        <h4>Back End Language Selected : {{backEndLang}}</h4>
    </div>
</template>

<script>
    export default{
        name : 'CheckboxRadiobtn',
        data(){
            return{
                frameworks: [],
                backEndLang : null
            }
        },
    }
</script>

<style scoped>
    .heading{
        color : #00C8EE
    }
    
</style>