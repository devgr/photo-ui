<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyAJmsIRLUBUXxBn1yqQLnEb115kHLuernU',
  authDomain: 'photo-6b67d.firebaseapp.com',
  databaseURL: 'https://photo-6b67d.firebaseio.com',
  projectId: 'photo-6b67d',
  storageBucket: 'photo-6b67d.appspot.com',
  messagingSenderId: '9282811773'
}
firebase.initializeApp(config)

export default {
  name: 'App'
}
</script>

<style>
html {
  margin: 0;
  color: #ddd;
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
a {
  color: #ddd;
}
.btn {
  display: block;
  font-family: 'Bungee Shade', sans-serif;
  font-size: 16px;
  border: 1px solid #888;
  border-radius: 12px;
  color: #383838;
  background-color: #ddd;
  margin: auto;
  width: 150px;
  padding: 0;
  margin-bottom: 5px;
  text-decoration: none;
  box-sizing: border-box;
}
.btn:hover {
  cursor: pointer;
  background-color: #eee;
}
.btn:active {
  background-color: #aaa;
}
img.v-aligned, div.v-aligned, h1.v-aligned{
  vertical-align: middle;
}
span.v-aligned{
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.card-body{
  white-space: normal;
}
.subtitle{
  font-style: italic;
}
</style>
