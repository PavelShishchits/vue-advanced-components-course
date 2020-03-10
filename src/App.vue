<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component-bindings">ComponentBindings</router-link> |
      <router-link to="/global-events">GlobalEvents</router-link> |
    </div>
    <div class="p-8">
      <router-view/>
    </div>
  </div>
</template>

<style src="./assets/app.css"></style>
