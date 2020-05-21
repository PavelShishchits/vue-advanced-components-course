<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component-bindings">ComponentBindings</router-link> |
      <router-link to="/global-events">GlobalEvents</router-link> |
      <router-link to="/portals">Portals</router-link> |
      <router-link to="/scoped-slots">ScopedSlots</router-link> |
      <router-link to="/data-provider">DataProvider</router-link> |
      <router-link to="/render-less-components">RenderLessComponents</router-link> |
      <router-link to="/provide-inject">ProvideInject</router-link> |
      <router-link to="/sortable-list">SortableList</router-link> |
      <router-link to="/search-select">SearchSelect</router-link> |
      <router-link to="/recursive-menu">RecursiveMenu</router-link> |
      <router-link to="/dynamic-form">DynamicForm</router-link> |
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
