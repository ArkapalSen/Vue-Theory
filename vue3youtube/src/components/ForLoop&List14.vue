<template>
  <h1 class="heading">For Loop & List</h1>
  <div>
    <ul>
      <li v-for="items in technology" :key="items">
        {{ items }}
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li v-for="user in users" :key="user">
        Name : {{user.name}} and email : {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
    name : 'ForLoopList',
    data(){
        return{
            technology:['javascript','c','c++','node'],
            users:[
                {
                    name : "arkapal sen",
                    email : 'arkapalsen@gmail.com'
                },
                {
                    name : "steve smith",
                    email : 'stevesmith@gmail.com'
                },
                {
                    name : "david warner",
                    email : 'davidwarner@gmail.com'
                },
            ]
        }
    },

}
</script>

<style scoped>
.heading {
  color: #00c8ee;
}
</style>
