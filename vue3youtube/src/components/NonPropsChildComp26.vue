<template>
    <h1>Non props Child Component</h1>
    <div>
        <h3>Steve</h3>
        <h3 v-bind='$attrs'>Warner</h3>
        <h3 v-bind='$attrs'>{{data}}</h3>
    </div>
</template>

<script>
    export default{
        name : 'NonProps',
//if we dont define any property as prop..then it will counted as non prop data and will bind as an attribute..since here 'data' is given as prop and 'xyz' not as prop..so 'xyz' will be trated as an attrs and bind as an attrs
        props:{                                 
            data : String,
        }
    }
</script>