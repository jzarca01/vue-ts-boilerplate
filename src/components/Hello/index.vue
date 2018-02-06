<template>
  <div class="hello">
    <h1>{{ state.message }}</h1>

    <h2>Essential Links</h2>
    <ul class="links">
      <li><a href="https://vuejs.org" target="_blank">Vue</a></li>
      <li><a href="https://code.visualstudio.com/" target="_blank">VSCode</a></li>
      <li><a href="https://github.com/jzarca01/vue-ts-boilerplate" target="_blank">Vue-TS Starter Boilerplate</a></li>
    </ul>

    <h2>Things to Do</h2>
    <ul class="tips">
      <li><button @click="checkVuex">Click here to check VueX</button></li>
      <li><button @click="tweet">Tweet this</button></li>
    </ul>

    <h2>Things to read</h2>
    <button @click="toggleReadView">Toggle read</button>
    <div v-if="state.toggleRead">
      <ul v-if="state.items && state.items.length">
        <li v-for="item of state.items">
          <p><strong>{{item.title}}</strong><button @click="deleteItem(item)">Delete item</button></p>
          <p>{{item.body}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import axios from "axios";

import * as hello from "../../store/Hello";

@Component
export default class Hello extends Vue {
  state: hello.HelloState = hello.readState(this.$store);

  mounted(): void {
    axios({
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/posts",
      responseType: "json" // json by default
    })
    .then(response => {
      // JSON responses are automatically parsed.
      hello.commitNewItems(this.$store, { 
        items: response.data,
      });
    })
    .catch(e => {
      console.log(e);
    });
  }

  encodedTweetUri(): string {
    const hypedTweet: string = 'Now that is a cool Vue TypeScript ! https://github.com/jzarca01/vue-ts-boilerplate';
    return encodeURI(`https://twitter.com/intent/tweet?text=${hypedTweet}`);
  }
  
  checkVuex (): void {
    hello.commitNewMessage(this.$store, {
      message: "Committed text from Component",
    });
  }

  tweet (): void {
    window.open(this.encodedTweetUri())
  }

  toggleReadView(): void {
    hello.toggleReadView(this.$store);
  }

  deleteItem(item: hello.Item): void {
    hello.deleteItem(this.$store, item);
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
