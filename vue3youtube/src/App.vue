<template>
  <h2>Root app</h2>

  <div>
    <StudentChildComponent nameProp="Arkapal" :varProp="dietStudent" />
    <TeacherChildComponent nameProp="Sten Ekberg" :varProp="dietTeacher" />

    <ChildComponent :passProps="passPropFunc" />
    <h3>{{ childVal }}</h3>

    <Ref/>

    <SimpleForm/>

    <Modifiers/>

    <NonProps data='ArkapalSen' xyz='smithark' abc='anotherprop'/>

    <ComputedProperty/>

    <Watchers/>

    <div>
       <!-- <Slots prop='ArkaProp' /> -->      <!--passing normal prop-->
      <!--in normal component we can pass a static prop..but not dynamic prop like images or any tags..so for that we use Slots instead of component -->
      <!--<Slots><h1>This is tag passed via slot</h1></Slots>
      <Slots><img src='https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927'></Slots>
      <Slots></Slots>-->
    </div>

    <div>
      <MultipleSLots>
        <template  v-slot:header>
          <h1>Steve Smith Jersey</h1>        
        </template>
        <template  v-slot:main>
          <p>A australian product</p>     
        </template>
        <template  v-slot:footer>
          <button>Buy Now</button>        
        </template>
      </MultipleSLots>

      <MultipleSLots>
        <template  v-slot:header>
          <h1>Vue Js</h1>        
        </template>
        <template  v-slot:main>
          <p>React Js</p>     
        </template>
        <template  v-slot:footer>
                
        </template>
      </MultipleSLots>
    </div>

    <Main/>
    
  </div>
</template>

<script>
// import StudentChildComponent from './components/StudentChildComp19.vue'
// import TeacherChildComponent from './components/TeacherChildComp19.vue'
// import ChildComponent from "./components/ChildComp20.vue"
// import Ref from './components/Ref21.vue'
// import SimpleForm from './components/Simple Form Validation/SimpleForm.vue'
// import Modifiers from './components/Modifiers25.vue'
// import NonProps from './components/NonPropsChildComp26.vue'
// import ComputedProperty from './components/ComputedProperty27.vue'
// import Watchers from './components/Watchers28.vue'
// import Slots from './components/Slots29.vue'
// import MultipleSLots from './components/MultipleSlots30.vue'
import Main from './components/Dynamic Components/Main.vue'

export default {
  name: "App",
  components: {
    // StudentChildComponent,
    // TeacherChildComponent,
    // ChildComponent,
    // Ref
    // SimpleForm
    // Modifiers
    // NonProps
    // ComputedProperty
    // Watchers
    // Slots
    // MultipleSLots
    Main
  },
  data() {
    return {
      // dietTeacher : 'Keto Diet Teacher',
      // dietStudent : 'Keto Diet Student',
      // childVal: "",
    };
  },
  methods: {
    // passPropFunc(name) {
    //   this.childVal = name;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
