<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component-bindings">ComponentBindings</router-link> |
      <router-link to="/global-events">GlobalEvents</router-link> |
      <router-link to="/portals">Portals</router-link> |
      <router-link to="/scoped-slots">ScopedSlots</router-link> |
      <router-link to="/data-provider">DataProvider</router-link> |
    </div>
    <div class="min-h-screen p-8">
      <div class="max-w-sm mx-auto">
        <router-view/>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style src="./assets/app.css"></style>
