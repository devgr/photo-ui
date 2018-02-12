<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  margin: 0;
  color: #CCC;
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-family: 'Bungee Shade', sans-serif;
}
body {
  margin: 0;
  min-width: 480px;
  background-color: #383838;
  box-sizing: border-box;
}
#app {

}
.btn {
  display: block;
  font-family: 'Bungee Shade', sans-serif;
  font-size: 16px;
  border: 1px solid #888;
  border-radius: 12px;
  color: #383838;
  background-color: #ccc;
  margin: auto;
  width: 150px;
  padding: 0;
  margin-bottom: 5px;
  text-decoration: none;
  box-sizing: border-box;
}
.btn:hover {
  cursor: pointer;
}
.btn:active {
  background-color: #aaa;
}
</style>
