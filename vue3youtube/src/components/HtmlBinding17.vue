<template>
  <h1>HTML BINDING</h1>
  <div>
    <p>{{ text }}</p>
    <div v-html="tag1 + tag2 + tag3"></div>     <!-- for binding all tag in single element -->
  </div>
  <br/><br/>
  <div>
    <p v-html="tag1"></p>                       <!-- for binding each tag in each diff element -->      
    <p v-html="tag2"></p>
    <p v-html="tag3"></p>
  </div>
</template>

<script>
export default {
  name: "HtmlBinding",
  data() {
    return {
      text: "Arkapal Sen",
      tag1: '<h1>Arka H1</h1>',
      tag2: '<h2>Arka h2</h2>',
      tag3: '<h3>Arka h3</h3>',
    };
  },
};
</script>
