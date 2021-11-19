<template>
     <h1 class='heading'>Multiple SLots</h1>
     <div class='cart'>
        <header class='header'>
            <slot name='header'>
            </slot>
        </header>
        <content class='content'>
            <slot name='main'>
            </slot>
        </content>
        <footer class='footer'>
            <slot name='footer'>
                <button>Click Me</button>
            </slot>
        </footer>
     </div>
</template>

<script>
    export default{
       name : 'MultipleSLots',
    }
</script>

<style scoped>
    .heading{
        color : #540CF9;
    }
    .header{
        color : #E76A02;
    }
    .cart{
        border: 1px solid;
        width : 250px;
        text-align: center;
        padding : 20px;
    }
</style>