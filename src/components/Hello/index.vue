<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="links">
      <li><a href="https://vuejs.org" target="_blank">Vue</a></li>
      <li><a href="https://code.visualstudio.com/" target="_blank">VSCode</a></li>
      <li><a href="https://github.com/jzarca01/vue-ts-boilerplate" target="_blank">Vue-TS Starter Boilerplate</a></li>
    </ul>
    <h2>Things to Do</h2>
    <ul class="tips">
      <li><button @click="hype()">Hype this</button></li>
      <li><button @click="tweet">Tweet this</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({

})

export default class Hello extends Vue {
  msg: string =  `Now that is a cool Vue.JS with Typescript 2.7 boilerplate `;

  encodedTweetUri(): string {
    const hypedTweet = this.msg + ' https://github.com/jzarca01/vue-ts-boilerplate'
    return encodeURI(`https://twitter.com/intent/tweet?text=${hypedTweet}`)
  }

  hype () {
    this.msg += '!'
  }

  tweet () {
    window.open(this.encodedTweetUri())
  }
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
