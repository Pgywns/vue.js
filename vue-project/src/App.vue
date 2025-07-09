<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data Link</router-link> |
    <router-link to="/dataAttr">Data Attr</router-link> |
    <router-link to="/dataList">Data List</router-link> |
    <router-link to="/eventClick">Evt Click</router-link> |
    <router-link to="/showVue">Show Vue</router-link> |
    <router-link to="/computedVue">Computed Vue</router-link> |
    <router-link to="/watchVue">Watch Vue</router-link> |
    <router-link to="/todoVue">Todo Vue</router-link> |
    <router-link to="/nestedComponent">NestedComponent Vue</router-link> ||
    <router-link to="/parentComponent">ParentComponent Vue</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
