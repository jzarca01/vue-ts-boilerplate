<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    message: String
  }
})

export default class HelloWithProps extends Vue {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul { padding: 0; }
li { list-style-type: none; }
.code { color: #6f92ba; }

ul.links li {
  list-style-type: none;
  display: inline-block;
  margin: 0 16px;
}
ul.tips li {
  margin-bottom: 10px;
}

a {
  color: #42b983;
}

</style>
