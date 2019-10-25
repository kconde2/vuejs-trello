<template>
  <div id="app">
    <Board></Board>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import InputMessage from "./components/InputMessage.vue";
import Board from "./components/Board.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    InputMessage,
    Board
  },
  created() {
    console.log("Component created");
  },
  updated() {
    console.log("Component updated");
  },
  watch: {
    message: (nextValue, prevValue) => console.log("message changed", nextValue)
  },
  data: () => ({
    message: "Hello World",
    description: "Welcome to Your Vue.js App Bis",
    name: "Freddy"
  }),
  computed: {
    fullMessage: function() {
      return this.message + " " + this.name;
    }
  },
  methods: {
    setMessage: function(event) {
      //console.log(event)
      this.message = event.target.value;
    }
  }
};
</script>

<style>
body {
margin: 0;
padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
