<template>
  <h1>Home component</h1>
  <h2>{{ mgs }}</h2>
  <p>{{ mail }}</p>
  <p>{{ (mob = 2222) }}</p>
  <h3>{{ mob === 3456 }}</h3>
  <P>{{ func1("arkafunc1") }}</P>
  <P>{{ getName() }}</P>
  <p>{{ getNameParam("ArkapalParameter") }}</p>
  <p>{{ getData().name }}</p>
  <p>{{ getData().email }}</p>
  <p>{{ getData().p_email }}</p>
  <!--<h4>{{ getData().p_func1 }}</h4>-->

  <button v-on:click="getClicked('Button 1 clicked')">CLick Me 1</button>
  <button v-on:dblclick="getDoubleCLicked('Button 2 double clicked')">
    CLick Me 2
  </button>

  <div>
    <h2 class="countNum">{{ countNum }}</h2>
    <button v-on:click="stateChange('increment')">Increase</button>
    <button v-on:click="stateChange('decrement')">Decrease</button>
  </div>

  <div id = 'twoWayBind'>
    <input type='text' v-model='count2WayBind'/>    <!-- v-model binds data in 2ways..ie in template and script/modal..and data is changed sync without changing state or func -->
    <h2>{{count2WayBind}}</h2>
  </div>
</template>

<script>
export default {
  name: "Hemllo",
  props: {
    mgs: String,
  },
  data() {
    return {
      mail: "arkapalsen@gmail.com",
      mob: 3456,
      countNum: 0,
      count2WayBind: 2,
      func1: function (par) {
        return par;
      },
    };
  },
  methods: {
    getName() {
      return "Arkapal Sen getName";
    },
    getNameParam(data) {
      return data;
    },
    getData() {
      return {
        name: "Arkapal Sen getData",
        email: "arkapal.sen@codelogicx.com",
        p_email: this.mail,
        p_func1: this.func1,
      };
    },
    getClicked(data) {
      console.log(data);
    },
    getDoubleCLicked(data) {
      console.log(data);
    },
    stateChange(data) {
      this.countNum =
        data === "increment" ? this.countNum + 1 : this.countNum - 1;
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
h2 {
  color: blue;
}
h3 {
  color: brown;
}
.countNum {
  color: #9df507;
}

#twoWayBind{
    margin-top : 20px;
}
</style>
